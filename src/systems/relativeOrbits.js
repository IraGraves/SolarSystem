import * as Astronomy from 'astronomy-engine';
import * as THREE from 'three';
import { AU_TO_SCENE, config } from '../config.js';
import { calculateKeplerianPosition } from '../physics/orbits.js';

// Reusable vectors to avoid garbage collection
const _tempVec = new THREE.Vector3();
const _targetPos = new THREE.Vector3();
const _centerPos = new THREE.Vector3();

// Cache for geometries to avoid reallocation
const orbitGeometries = new Map();

function getHeliocentricPosition(data, time, target) {
  if (data.body) {
    const vec = Astronomy.HelioVector(Astronomy.Body[data.body], time);
    target.set(vec.x, vec.y, vec.z);
  } else if (data.elements) {
    const vec = calculateKeplerianPosition(data.elements, time);
    target.set(vec.x, vec.y, vec.z);
  } else {
    target.set(0, 0, 0);
  }
  return target;
}

/**
 * Updates relative orbits dynamically.
 * Should be called every frame if in Geocentric/Barycentric mode.
 */
export function updateRelativeOrbits(orbitGroup, relativeOrbitGroup, planets, sun) {
  const system = config.coordinateSystem;

  // 1. Handle Visibility
  if (system === 'Heliocentric') {
    orbitGroup.visible = config.showOrbits;
    relativeOrbitGroup.visible = false;
    // Ensure orbits are visible, respecting settings
    orbitGroup.children.forEach(child => {
      // Check if it's a dwarf planet orbit
      const isDwarf = planets.some(p => p.data.type === 'dwarf' && child.name === p.data.name + '_Orbit');
      const isPlanet = planets.some(p => p.data.type !== 'dwarf' && child.name === p.data.name + '_Orbit');
      
      if (isDwarf) {
        child.visible = config.showDwarfPlanets;
      } else if (isPlanet) {
        child.visible = config.showPlanets;
      } else {
        // Fallback for other orbits (e.g. Moon if we had it)
        child.visible = true;
      }
    });
    return;
  } else if (system === 'Tychonic') {
    // Tychonic: Earth at center. Sun orbits Earth. Planets orbit Sun.
    // Show standard orbits (centered on Sun)
    orbitGroup.visible = config.showOrbits;
    // Show relative orbits (for Sun's path around Earth)
    relativeOrbitGroup.visible = config.showOrbits;

    // Hide Earth's standard orbit (since Earth is center)
    const earthOrbit = orbitGroup.getObjectByName('Earth_Orbit');
    if (earthOrbit) earthOrbit.visible = false;
    
    // Ensure other orbits are visible, respecting settings
    orbitGroup.children.forEach(child => {
      if (child.name !== 'Earth_Orbit') {
        // Check if it's a dwarf planet orbit
        const isDwarf = planets.some(p => p.data.type === 'dwarf' && child.name === p.data.name + '_Orbit');
        const isPlanet = planets.some(p => p.data.type !== 'dwarf' && child.name === p.data.name + '_Orbit');
        
        if (isDwarf) {
          child.visible = config.showDwarfPlanets;
        } else if (isPlanet) {
          child.visible = config.showPlanets;
        } else {
          // Fallback for other orbits (e.g. Moon if we had it)
          child.visible = true;
        }
      }
    });
  } else {
    // Geocentric / Barycentric
    orbitGroup.visible = false;
    relativeOrbitGroup.visible = config.showOrbits;
  }
  
  // Sync rotation with universeGroup (e.g. for Ecliptic plane)
  if (sun && sun.parent) {
     relativeOrbitGroup.quaternion.copy(sun.parent.quaternion);
  }

  if (!config.showOrbits) return;

  const allBodiesData = planets.map(p => p.data);
  const bodiesToTrace = [...planets];
  if (system === 'Geocentric' || system === 'Tychonic') {
    bodiesToTrace.push({ data: { name: 'Sun', body: 'Sun', color: 0xffff00, period: 365.25 } });
  } else if (system === 'Barycentric') {
    // 12 years (Jupiter period) to show the full wobble loop
    bodiesToTrace.push({ data: { name: 'Sun', body: 'Sun', color: 0xffff00, period: 12 * 365.25 } });
  }

  // 3. Update Lines
  bodiesToTrace.forEach(bodyObj => {
    const data = bodyObj.data;
    
    // Check Visibility Settings
    let isVisible = true;
    if (data.type === 'dwarf') {
      isVisible = config.showDwarfPlanets;
    } else if (data.name !== 'Sun') {
      isVisible = config.showPlanets;
    }

    // Hide Earth trail in Geocentric/Tychonic
    if ((system === 'Geocentric' || system === 'Tychonic') && data.name === 'Earth') {
      isVisible = false;
    }

    // In Tychonic, ONLY show Sun trail (planets use standard orbits)
    if (system === 'Tychonic' && data.name !== 'Sun') {
      isVisible = false;
    }

    let line = relativeOrbitGroup.getObjectByName(data.name + '_Trail');

    if (!isVisible) {
      if (line) line.visible = false;
      return;
    }

    // Determine Duration and Steps
    const durationDays = data.period || 730;
    
    // Adaptive resolution: 1 step every ~2 days, but capped
    // Barycentric/Tychonic: 500 (performance focus, simple ellipses)
    // Geocentric: 5000 (fidelity focus, complex epicycles)
    const maxSteps = (system === 'Geocentric') ? 5000 : 500;
    
    let steps = Math.ceil(durationDays / 2);
    if (steps > maxSteps) steps = maxSteps;
    if (steps < 360) steps = 360;

    const halfDuration = durationDays / 2;
    const startTimeMs = config.date.getTime() - halfDuration * 24 * 60 * 60 * 1000;

    // Create or Resize Line
    if (!line || line.geometry.attributes.position.count <= steps) {
      if (line) {
        line.geometry.dispose();
        relativeOrbitGroup.remove(line);
      }

      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array((steps + 1) * 3);
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      
      const isSun = data.name === 'Sun';
      const showColors = config.showPlanetColors;
      const showDwarfColors = config.showDwarfPlanetColors;
      const isDwarf = data.type === 'dwarf';
      const useColor = isDwarf ? showDwarfColors : showColors;
      
      const color = isSun ? (data.color || 0xffff00) : (useColor ? (data.color || 0x444444) : 0x444444);
      
      const material = new THREE.LineBasicMaterial({
        color: color,
        transparent: true,
        opacity: isSun ? 0.8 : (useColor ? 0.8 : 0.5),
      });
      
      line = new THREE.Line(geometry, material);
      line.name = data.name + '_Trail';
      line.frustumCulled = false;
      relativeOrbitGroup.add(line);
    }
    
    line.visible = true;
    line.geometry.setDrawRange(0, steps + 1);
    const positions = line.geometry.attributes.position.array;

    // Update Points
    for (let i = 0; i <= steps; i++) {
      const t = new Date(startTimeMs + (i / steps) * durationDays * 24 * 60 * 60 * 1000);
      
      if (data.name === 'Sun') {
        _targetPos.set(0, 0, 0);
      } else {
        getHeliocentricPosition(data, t, _targetPos);
      }

      if (system === 'Geocentric' || system === 'Tychonic') {
        const earthData = allBodiesData.find(d => d.name === 'Earth');
        getHeliocentricPosition(earthData, t, _centerPos);
      } else {
        // Use native Astronomy Engine SSB
        const ssb = Astronomy.HelioVector(Astronomy.Body.SSB, t);
        _centerPos.set(ssb.x, ssb.y, ssb.z);
      }

      // _tempVec = target - center
      _tempVec.subVectors(_targetPos, _centerPos);

      // Convert to Scene Coords (X, Z, -Y)
      positions[i * 3] = _tempVec.x * AU_TO_SCENE;
      positions[i * 3 + 1] = _tempVec.z * AU_TO_SCENE;
      positions[i * 3 + 2] = -_tempVec.y * AU_TO_SCENE;
    }

    line.geometry.attributes.position.needsUpdate = true;
  });
}
