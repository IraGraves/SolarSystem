/**
 * @file stars.js
 * @description Starfield generation, constellation rendering, and stellar catalog management.
 *
 * Supports chunked loading of star data for performance (visible vs deep space).
 * Manages multiple THREE.Points objects and Octrees.
 */
import * as THREE from 'three';
import { Logger } from '../utils/logger.js';
import { Octree } from '../utils/Octree.js';
import { config } from '../config.js';

const ZODIAC_IDS = [
  'Ari',
  'Tau',
  'Gem',
  'Cnc',
  'Leo',
  'Vir',
  'Lib',
  'Sco',
  'Sgr',
  'Cap',
  'Aqr',
  'Psc',
];

// Chunk config matching generation script
const CHUNKS = [
  { id: 0, file: 'stars_data_0.bin', meta: 'stars_meta_0.json' },
  { id: 1, file: 'stars_data_1.bin', meta: 'stars_meta_1.json' },
  { id: 2, file: 'stars_data_2.bin', meta: 'stars_meta_2.json' },
];

// Hybrid texture: Solid Core + Soft Edge for high-quality point rendering
function createStarTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const context = canvas.getContext('2d');
  const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32);

  // 0.0 - 0.15: Solid Core (100%) - Defines the "hard" point
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
  gradient.addColorStop(0.15, 'rgba(255, 255, 255, 1.0)');

  // 0.15 - 0.4: Falloff (Anti-aliasing/Soft Edge)
  gradient.addColorStop(0.4, 'rgba(255, 255, 255, 0.2)');

  // 0.4+: Transparent
  gradient.addColorStop(1.0, 'rgba(0, 0, 0, 0.0)');

  context.fillStyle = gradient;
  context.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(canvas);
}

class StarManager {
  constructor(scene) {
    this.scene = scene;
    this.starsGroup = new THREE.Group();
    this.starsGroup.name = 'StarsGroup';
    this.starsGroup.renderOrder = -1;
    this.scene.add(this.starsGroup);

    this.chunks = new Map(); // id -> { points, octree, data }
    this.texture = createStarTexture();

    // Expose a flat data array for easy access by other systems (search etc)
    // This will be rebuilt when chunks load
    this.allStarData = [];
    this.starsGroup.userData = {
      starData: this.allStarData, // Reference to the array
      manager: this,
    };

    // Default brightness from config
    this.brightness = config.starBrightness;
    this.currentBrightness = this.brightness;
    this.currentLimit = 6.0; // Default limit

    this.loadingChunks = new Set();
  }

  async loadChunk(chunkId) {
    if (this.chunks.has(chunkId)) return; // Already loaded
    if (this.loadingChunks.has(chunkId)) return; // Already loading

    this.loadingChunks.add(chunkId);

    const chunkConfig = CHUNKS[chunkId];
    if (!chunkConfig) {
      this.loadingChunks.delete(chunkId);
      return;
    }

    try {
      const timestamp = Date.now(); // Cache busting
      Logger.log(`Loading star chunk ${chunkId} (v=${timestamp})...`);
      const [metaRes, binRes] = await Promise.all([
        fetch(`${import.meta.env.BASE_URL}assets/${chunkConfig.meta}?v=${timestamp}`),
        fetch(`${import.meta.env.BASE_URL}assets/${chunkConfig.file}?v=${timestamp}`),
      ]);

      const metaData = await metaRes.json();
      const arrayBuffer = await binRes.arrayBuffer();
      const dataView = new Float32Array(arrayBuffer);
      const STRIDE = 11;

      const positions = [];
      const colors = [];
      const sizes = [];
      const chunkData = [];

      // [x, y, z, r, g, b, lum, rad, mass, temp, mag]
      const SCALE = 10000;

      for (let i = 0; i < metaData.length; i++) {
        const offset = i * STRIDE;

        const xRaw = dataView[offset + 0];
        const yRaw = dataView[offset + 1];
        const zRaw = dataView[offset + 2];
        const r = dataView[offset + 3];
        const g = dataView[offset + 4];
        const b = dataView[offset + 5];
        const lum = dataView[offset + 6];
        const rad = dataView[offset + 7];
        const mass = dataView[offset + 8];
        const temp = dataView[offset + 9];
        const mag = dataView[offset + 10];

        // Recalculate distance from coords (since we don't store it in binary)
        // Coords are already normalized or scaled? No, raw coords in parsecs?
        // Wait, x/y/z in binary ARE the coords.
        const distV = Math.sqrt(xRaw * xRaw + yRaw * yRaw + zRaw * zRaw);
        const dist = Math.max(distV, 0.1);

        // Flux-based size
        const flux = lum / (dist * dist);
        const logFlux = Math.log(Math.max(flux, 1e-12));

        // Tuned Size Curve for Gaia Sky look (Round 3):
        let size = 1.0;

        // Fainter stars (logFlux < -8) -> Keep small but visible
        if (logFlux < -8) {
          size = 0.8 + (logFlux + 12) * 0.15; // Increased base size & slope
          if (size < 0.6) size = 0.6; // Hard floor
        } else {
          // Brighter stars: Exponential growth
          const t = logFlux + 8;
          size = 1.0 + Math.pow(t, 1.4) * 0.3;
        }

        // Strict Cap to prevent "blobs"
        size = Math.min(size, 8.0);
        sizes.push(size);

        const [id, name, bayer, flam, hip, hd, spect] = metaData[i];

        // Coordinate swizzle: x->z, y->x, z->y to match Three.js (Y-up) vs Celestial (Z-up?)
        // Previous code: x=zRaw, y=xRaw, z=yRaw.
        const x = zRaw * SCALE;
        const y = xRaw * SCALE;
        const z = yRaw * SCALE;

        positions.push(x, y, z);
        colors.push(r, g, b);

        if (i === 0) {
          console.warn(
            `[DEBUG Chunk ${chunkId}] First Star Pos: ${x}, ${y}, ${z} | RGB: ${r}, ${g}, ${b}`
          );
        }

        chunkData.push({
          id,
          name,
          bayer,
          flamsteed: flam,
          hip,
          hd,
          spectralType: spect || 'Unknown',
          luminosity: lum,
          radius: rad,
          mass: mass,
          temperature: temp,
          mag: mag,
          distance: dist, // Parsecs
          x: xRaw,
          y: yRaw,
          z: zRaw,
        });
      }

      // Geometry
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
      geometry.setAttribute('starSize', new THREE.Float32BufferAttribute(sizes, 1));

      // Material
      const material = new THREE.PointsMaterial({
        size: 1.0,
        map: this.texture,
        vertexColors: true,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: false, // Fix: Prevent distance from shrinking stars to <1px
      });

      material.onBeforeCompile = (shader) => {
        // console.log(`[Shader] Compiling star material for Chunk ${chunkId}`);
        shader.vertexShader = `
                    attribute float starSize;
                    ${shader.vertexShader}
                `;
        shader.vertexShader = shader.vertexShader.replace(
          'gl_PointSize = size;',
          'gl_PointSize = starSize * size;'
        );
      };

      const points = new THREE.Points(geometry, material);

      // Apply brightness relative to config/current state
      this.updateMaterial(points, this.currentBrightness);

      this.starsGroup.add(points);

      // Octree
      const octree = this.buildOctree(chunkData);

      this.chunks.set(chunkId, { points, octree, data: chunkData });
      this.updateAllStarData();

      // Apply current magnitude limit to the new chunk
      if (config.magnitudeLimit !== undefined) {
        this.setMagnitudeLimit(config.magnitudeLimit);
      }
    } catch (err) {
      Logger.error(`Failed to load chunk ${chunkId}`, err);
    } finally {
      this.loadingChunks.delete(chunkId);
    }
  }

  // New method to unload chunks for memory management if needed
  unloadChunk(chunkId) {
    if (!this.chunks.has(chunkId)) return;

    const chunk = this.chunks.get(chunkId);
    this.starsGroup.remove(chunk.points);
    chunk.points.geometry.dispose();
    chunk.points.material.dispose();

    this.chunks.delete(chunkId);
    this.updateAllStarData();
  }

  buildOctree(data) {
    const min = new THREE.Vector3(Infinity, Infinity, Infinity);
    const max = new THREE.Vector3(-Infinity, -Infinity, -Infinity);
    const SCALE = 10000;

    data.forEach((star) => {
      const x = star.z * SCALE;
      const y = star.x * SCALE;
      const z = star.y * SCALE;
      min.min(new THREE.Vector3(x, y, z));
      max.max(new THREE.Vector3(x, y, z));
    });

    min.subScalar(100);
    max.addScalar(100);

    const octree = new Octree(new THREE.Box3(min, max), 64);
    data.forEach((star, i) => {
      const x = star.z * SCALE;
      const y = star.x * SCALE;
      const z = star.y * SCALE;
      octree.insert({ position: new THREE.Vector3(x, y, z), data: star, index: i });
    });
    return octree;
  }

  updateAllStarData() {
    // Rebuild flat array
    this.allStarData.length = 0;
    this.chunks.forEach((chunk) => {
      this.allStarData.push(...chunk.data);
    });
    // Update userData reference just in case
    this.starsGroup.userData.starData = this.allStarData;
  }

  getOctrees() {
    const trees = [];
    this.chunks.forEach((c) => trees.push(c.octree));
    return trees;
  }

  setMagnitudeLimit(limit) {
    this.currentLimit = limit;

    // Determine which chunks we need
    // Chunk 0: Mag < 6.5
    // Chunk 1: Mag < 8.0
    // Chunk 2: Mag > 8.0
    // (This implies we must know the max mag of each chunk.
    // For now, we just conservatively load chunks based on typical ranges)

    // Logic:
    // If limit > 6.5, load Chunk 1
    // If limit > 8.0, load Chunk 2

    if (limit > 6.5) this.loadChunk(1);
    if (limit > 8.0) this.loadChunk(2);

    this.chunks.forEach((chunk, id) => {
      const data = chunk.data;
      if (!data || data.length === 0) return;

      // Find visible count
      // Binary search or linear scan?
      // Data is sorted by mag (asc or desc? Descending brightness means Ascending Mag value?
      // Wait, stars_data generator sorts by mag. Mag -1 is bright. Mag 10 is dim.
      // So sorted by Magnitude means -1, 0, 1, 2...
      // So we want all stars where star.mag < limit.
      // Since it's sorted ascending, we valid from index 0 to K.

      let count = 0;
      // Optimization: Check boundaries
      if (data[0].mag > limit) {
        count = 0;
      } else if (data[data.length - 1].mag < limit) {
        count = data.length;
      } else {
        // Linear scan for now (fast enough for 100k stars? maybe)
        // Binary search is better.
        let low = 0,
          high = data.length - 1;
        while (low <= high) {
          const mid = Math.floor((low + high) / 2);
          if (data[mid].mag < limit) {
            count = mid + 1; // logical count
            low = mid + 1;
          } else {
            high = mid - 1;
          }
        }
      }

      // chunk.points.geometry.setDrawRange(0, count);
      if (chunk.points && chunk.points.geometry) {
        chunk.points.geometry.setDrawRange(0, count);
      }
    });
  }

  setBrightness(val) {
    this.brightness = val;
    this.applyBrightness(val);
  }

  applyBrightness(val) {
    this.currentBrightness = val;
    this.chunks.forEach((chunk) => {
      this.updateMaterial(chunk.points, val);
    });
  }

  updateMaterial(points, val) {
    if (!points || !points.material) return;

    // Safety check
    if (val === undefined || val === null) val = 0.5;

    let intensity = 0.0;
    let opacity = 0.0;

    // Adjusted Curve for Point-Source Visibility
    if (val <= 0.5) {
      // Range 0.0 -> 0.5
      // Opacity: 0.6 -> 0.85
      // Intensity: 0.6 -> 1.2
      const t = val / 0.5;
      opacity = 0.6 + t * 0.25;
      intensity = 0.6 + t * 0.6;
    } else {
      // Range 0.5 -> 1.0 (Bloom/HDR mode)
      // Opacity: 0.85 -> 1.0
      // Intensity: 1.2 -> 2.5
      const t = (val - 0.5) / 0.5;
      opacity = 0.85 + t * 0.15;
      intensity = 1.2 + t * 1.3;
    }

    points.material.opacity = opacity;
    points.material.color.setScalar(intensity);

    // Subtle size increase only at very high settings (Turbo Range)
    if (val > 0.8) {
      const t = (val - 0.8) / 0.2;
      points.material.size = 1.0 + t * 0.2; // Max 1.2x
    } else {
      points.material.size = 1.0;
    }
  }
}

export async function createStarfield(scene) {
  const manager = new StarManager(scene);

  // Initial Load: Chunk 0 (Visible + Constellations)
  await manager.loadChunk(0);

  return {
    stars: manager.starsGroup,
    rawData: manager.allStarData, // Note: This will grow if more chunks load
    manager: manager,
  };
}

export async function createConstellations(zodiacGroup, constellationsGroup, starsData) {
  // Note: starsData might only be Chunk 0 at start.
  // Constellation lines rely on stars being present in provided starsData.
  // Our chunking logic FORCED all constellation stars into Chunk 0, so this is safe.

  try {
    const response = await fetch(`${import.meta.env.BASE_URL}assets/constellations_lines_all.json`);
    const allConstellations = await response.json();

    // Map ID -> Position
    const SCALE = 10000;
    const starPositionMap = new Map();

    // Loop through whatever data we have (Chunk 0 usually)
    starsData.forEach((star) => {
      const x = star.z * SCALE;
      const y = star.x * SCALE;
      const z = star.y * SCALE;
      starPositionMap.set(star.id, new THREE.Vector3(x, y, z));
    });

    // Materials
    const zodiacMaterial = new THREE.LineBasicMaterial({
      color: 0x446688,
      transparent: true,
      opacity: 0.6,
    });

    const starMaterial = new THREE.LineBasicMaterial({
      color: 0xcccccc,
      transparent: true,
      opacity: 0.4,
    });

    let zodiacCount = 0;
    let otherCount = 0;

    for (const [constellationId, lineStrips] of Object.entries(allConstellations)) {
      const isZodiac = ZODIAC_IDS.includes(constellationId);
      const targetGroup = isZodiac ? zodiacGroup : constellationsGroup;
      const material = isZodiac ? zodiacMaterial : starMaterial;

      for (const starIds of lineStrips) {
        const points = [];
        let missing = false;
        for (const id of starIds) {
          const pos = starPositionMap.get(id);
          if (pos) points.push(pos);
          else missing = true;
        }

        if (!missing && points.length >= 2) {
          const geometry = new THREE.BufferGeometry().setFromPoints(points);
          const line = new THREE.Line(geometry, material);
          line.userData = { type: 'constellation', id: constellationId };
          targetGroup.add(line);
        }
      }
      if (isZodiac) zodiacCount++;
      else otherCount++;
    }
    Logger.log(`Created ${zodiacCount} zodiacs and ${otherCount} other constellations.`);
  } catch (err) {
    Logger.error('Error creating constellations', err);
  }
}
