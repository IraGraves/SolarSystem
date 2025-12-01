import * as THREE from 'three';

class TextureManager {
  constructor() {
    this.queue = [];
    this.textureLoader = new THREE.TextureLoader();
    this.maxConcurrent = 6; // Browser limit is usually 6 per domain
    this.activeRequests = 0;

    // Priority 0 bodies (Highest)
    this.priorityBodies = ['Sun', 'Jupiter', 'Saturn', 'Neptune', 'Earth'];
  }

  /**
   * Queue texture loading for a body
   * @param {string} originalPath - The original path to the texture (e.g. assets/textures/earth.jpg)
import * as THREE from 'three';

class TextureManager {
  constructor() {
    this.queue = [];
    this.textureLoader = new THREE.TextureLoader();
    this.maxConcurrent = 6; // Browser limit is usually 6 per domain
    this.activeRequests = 0;

    // Priority 0 bodies (Highest)
    this.priorityBodies = ['Sun', 'Jupiter', 'Saturn', 'Neptune', 'Earth'];
  }

  /**
   * Queue texture loading for a body
   * @param {string} originalPath - The original path to the texture (e.g. assets/textures/earth.jpg)
   * @param {THREE.Material} material - The material to apply the texture to
   * @param {string} bodyName - Name of the body for priority
   * @param {boolean} isMoon - Whether it's a moon
   * @param {string} moonCategory - Category of the moon (largest, major, small)
   */
  loadTexture(originalPath, material, bodyName, isMoon = false, moonCategory = null) {
    // Determine priority score (Lower is better)
    let priority = 100; // Default (Other planets/moons)

    const priorityIndex = this.priorityBodies.indexOf(bodyName);
    if (priorityIndex !== -1) {
      priority = priorityIndex; // 0 to 4 for Sun...Earth
    } else if (isMoon && moonCategory === 'largest') {
      priority = 10;
    }

    // Add stages to queue
    // Stage 0: Lowres
    // Stage 0.5: Original (Fallback/Base)
    // Stage 1: Midres
    // Stage 2: Highres

    this.addToQueue(originalPath, material, 0, priority);
    this.addToQueue(originalPath, material, 0.5, priority);
    this.addToQueue(originalPath, material, 1, priority);
    this.addToQueue(originalPath, material, 2, priority);

    this.processQueue();
  }

  addToQueue(originalPath, material, stage, priority) {
    this.queue.push({
      originalPath,
      material,
      stage,
      priority,
    });

    // Sort queue:
    // 1. Stage (Low -> Original -> Mid -> High)
    // 2. Priority (Sun -> Jupiter -> ... -> Others)
    this.queue.sort((a, b) => {
      if (a.stage !== b.stage) return a.stage - b.stage;
      return a.priority - b.priority;
    });
  }

  processQueue() {
    if (this.activeRequests >= this.maxConcurrent || this.queue.length === 0) return;

    const item = this.queue.shift();
    this.activeRequests++;

    // Determine path based on stage
    let path = item.originalPath;
    if (item.stage === 0) path = this.getPathForStage(item.originalPath, 'lowres');
    else if (item.stage === 1) path = this.getPathForStage(item.originalPath, 'midres');
    else if (item.stage === 2) path = this.getPathForStage(item.originalPath, 'highres');
    // Stage 0.5 uses originalPath directly

    this.textureLoader.load(
      path,
      (texture) => {
        // Success
        // Only update if this texture is "better" (higher stage) than what we have
        if (
          !item.material.userData.currentStage ||
          item.stage >= item.material.userData.currentStage
        ) {
          texture.wrapS = THREE.RepeatWrapping;
          texture.wrapT = THREE.ClampToEdgeWrapping;

          item.material.map = texture;
          // Reset color to white so texture shows
          if (item.material.color) item.material.color.setHex(0xffffff);

          item.material.needsUpdate = true;
          item.material.userData.currentStage = item.stage;
        }

        this.activeRequests--;
        this.processQueue();
      },
      undefined,
      (err) => {
        // Error (file not found) - just skip
        this.activeRequests--;
        this.processQueue();
      }
    );

    // Trigger next immediately to maximize throughput
    this.processQueue();
  }

  getPathForStage(path, subfolderName) {
    // path is like ".../assets/textures/earth.jpg"
    // We want to insert subfolderName before the filename

    const lastSlashIndex = path.lastIndexOf('/');
    if (lastSlashIndex === -1) return path;

    const directory = path.substring(0, lastSlashIndex);
    const filename = path.substring(lastSlashIndex + 1);

    return `${directory}/${subfolderName}/${filename}`;
  }
}

export const textureManager = new TextureManager();
