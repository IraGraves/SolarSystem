/**
 * @file orbits.js (systems)
 * @description Orbit line creation for planets using Astronomy Engine or Keplerian elements.
 *
 * This file generates visual orbit paths for planets and dwarf planets. It samples positions over
 * the body's orbital period to create smooth elliptical Three.js LineLoop geometries.
 *
 * Key features:
 * - 360-step sampling: Creates smooth curves even for highly elliptical orbits
 * - Astronomy Engine integration: Uses HelioVector for major planets (accurate ephemeris)
 * - Keplerian fallback: Uses custom orbit calculator for dwarf planets (Ceres, Haumea, etc.)
 * - Dynamic coloring: Applies planet-specific colors or neutral gray based on config
 * - Opacity adjustment: Colored orbits are more opaque (0.8) than monochrome (0.5)
 *
 * Orbit lines are added to the orbitGroup for visibility management. The color mode is controlled
 * by `config.showPlanetColors` and `config.showDwarfPlanetColors` settings.
 */
import * as Astronomy from 'astronomy-engine';
import * as THREE from 'three';
import { AU_TO_SCENE, config } from '../config.js';
import { calculateKeplerianPosition } from '../physics/orbits.js';

/**
 * Creates an orbit line for a planet
 * @param {Object} data - Planet data object
 * @param {THREE.Group} orbitGroup - Group to add the orbit line to
 */
export function createOrbitLine(data, orbitGroup) {
  if (!data.body && !data.elements) return null;

  const points = [];
  const steps = 360;
  const startTime = new Date();
  const periodDays = data.period || 365; // Fallback

  for (let i = 0; i < steps; i++) {
    const t = new Date(startTime.getTime() + (i / steps) * periodDays * 24 * 60 * 60 * 1000);
    let vec;
    if (data.body) {
      vec = Astronomy.HelioVector(Astronomy.Body[data.body], t);
    } else if (data.elements) {
      vec = calculateKeplerianPosition(data.elements, t);
    }
    points.push(new THREE.Vector3(vec.x * AU_TO_SCENE, vec.z * AU_TO_SCENE, -vec.y * AU_TO_SCENE));
  }

  const orbitGeo = new THREE.BufferGeometry().setFromPoints(points);
  const showColors = config.showPlanetColors;
  const showDwarfColors = config.showDwarfPlanetColors;
  const isDwarf = data.type === 'dwarf';
  const useColor = isDwarf ? showDwarfColors : showColors;
  const color = useColor ? data.color || 0x444444 : 0x444444;

  const orbitMat = new THREE.LineBasicMaterial({
    color: color,
    transparent: true,
    opacity: useColor ? 0.8 : 0.5,
  });
  const orbitLine = new THREE.LineLoop(orbitGeo, orbitMat);
  orbitLine.name = data.name + '_Orbit';
  orbitGroup.add(orbitLine);

  return orbitLine;
}
