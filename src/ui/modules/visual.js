import * as THREE from 'three';
import * as Astronomy from 'astronomy-engine';
import { config, REAL_PLANET_SCALE_FACTOR } from '../../config.js';

export function setupVisualFolder(gui, starsRef, renderer, universeGroup) {
  const visualFolder = gui.addFolder('Visual');

  const updateReferencePlane = (val) => {
    if (universeGroup) {
      if (val === 'Ecliptic') {
        // Rotate universe so Ecliptic is flat (X-Z plane)
        // Ecliptic is tilted by Obliquity relative to Equatorial (~23.44 degrees)
        // Equatorial Y is North. Ecliptic North is tilted.
        // To make Ecliptic flat, we rotate the whole universe around X axis.

        const obliquity = 23.43928; // Mean Obliquity of the Ecliptic J2000
        const obliquityRad = THREE.MathUtils.degToRad(obliquity);

        // Rotate around X axis to bring Ecliptic to horizontal
        // Equatorial to Ecliptic transformation requires negative rotation
        universeGroup.rotation.x = -obliquityRad;
      } else {
        // Equatorial (Default)
        universeGroup.rotation.x = 0;
      }
    }
  };

  // Reference Plane Control
  visualFolder
    .add(config, 'referencePlane', ['Equatorial', 'Ecliptic'])
    .name('Reference Plane')
    .onChange(updateReferencePlane);

  // Initialize Reference Plane state
  updateReferencePlane(config.referencePlane);

  const updateStarBrightness = (val) => {
    const stars = starsRef.value;
    if (stars && stars.material) {
      // Piecewise logic for better control:
      // 0.0 - 0.6: Fine Opacity Control (0.0 -> 0.3) - Realistic Range
      // 0.6 - 0.8: Rapid Opacity Ramp (0.3 -> 1.0)
      // 0.8 - 1.0: Intensity Boost (1.0 -> 100.0) - Turbo Range

      let opacity = 1.0;
      let intensity = 1.0;

      if (val <= 0.6) {
        opacity = (val / 0.6) * 0.3;
      } else if (val <= 0.8) {
        opacity = 0.3 + ((val - 0.6) / 0.2) * 0.7;
      } else {
        opacity = 1.0;
        // Exponential boost from 1.0 to 100.0
        // (val - 0.8) / 0.2 goes 0 -> 1
        const t = (val - 0.8) / 0.2;
        intensity = 1.0 + Math.pow(t, 3) * 99.0;
      }

      stars.material.opacity = opacity;
      stars.material.color.setScalar(intensity);

      // Subtle size increase only at very high settings (Turbo Range)
      if (val > 0.8) {
        const t = (val - 0.8) / 0.2;
        stars.material.size = 1.0 + t * 0.2; // Max 1.2x
      } else {
        stars.material.size = 1.0;
      }
    }
  };

  const starSlider = visualFolder
    .add(config, 'starBrightness', 0.0, 1.0)
    .name('Star Brightness')
    .onChange(updateStarBrightness);
  starSlider.domElement.classList.add('hide-value');

  // Initialize star brightness state
  updateStarBrightness(config.starBrightness);

  const gammaSlider = visualFolder
    .add(config, 'gamma', 0.1, 5.0)
    .name('Gamma')
    .onChange((val) => {
      if (renderer) {
        renderer.toneMappingExposure = val;
      }
    });
  gammaSlider.domElement.classList.add('hide-value');

  visualFolder.close(); // Close Visual folder by default
}

export function setupOverlaysFolder(
  gui,
  orbitGroup,
  zodiacGroup,
  constellationsGroup,
  planets,
  sun,
  zodiacSignsGroup,
  habitableZone,
  magneticFieldsGroup
) {
  const overlaysFolder = gui.addFolder('Overlays');

  // Orbits
  const orbitsCtrl = overlaysFolder
    .add(config, 'showOrbits')
    .name('Orbits')
    .onChange((val) => {
      orbitGroup.visible = val;
      planets.forEach((p) => {
        p.moons.forEach((m) => {
          if (m.data.orbitLine) m.data.orbitLine.visible = val;
        });
      });
      updateCapMoonOrbitsVisibility();
    });
  orbitsCtrl.domElement.classList.add('checkbox-left');

  const capMoonOrbitsCtrl = overlaysFolder
    .add(config, 'capMoonOrbits')
    .name('Cap Moon Orbits When Scaling')
    .onChange(() => {
      // Moon positions will be updated in the next animation frame
    });
  capMoonOrbitsCtrl.domElement.classList.add('child-control', 'checkbox-left');

  // Show/hide child control based on parent state
  const updateCapMoonOrbitsVisibility = () => {
    capMoonOrbitsCtrl.domElement.style.display = config.showOrbits ? '' : 'none';
  };
  updateCapMoonOrbitsVisibility();

  // Axes
  const axesCtrl = overlaysFolder
    .add(config, 'showAxes')
    .name('Axes')
    .onChange((val) => {
      // Toggle sun axis
      if (sun.axisLine) sun.axisLine.visible = val;

      // Toggle planet axes
      planets.forEach((p) => {
        if (p.data.axisLine) p.data.axisLine.visible = val;

        // Toggle moon axes
        p.moons.forEach((m) => {
          if (m.data.axisLine) m.data.axisLine.visible = val;
        });
      });
    });
  axesCtrl.domElement.classList.add('checkbox-left');

  // Zodiacs & Constellations Logic
  const updateConstellations = () => {
    const showZ = config.showZodiacs;
    const showC = config.showConstellations;

    // Zodiac Group Visibility: Visible if either switch is ON
    if (zodiacGroup) {
      zodiacGroup.visible = showZ || showC;

      // Zodiac Group Color: Distinct (Blue) if Zodiac switch is ON, else same as others (Grey)
      const color = showZ ? 0x446688 : 0xcccccc;
      zodiacGroup.children.forEach((child) => {
        if (child.material) {
          child.material.color.setHex(color);
          // Adjust opacity if needed, but keeping it simple for now
          child.material.opacity = showZ ? 0.6 : 0.4;
        }
      });
    }

    // Other Constellations Visibility: Only if Constellations switch is ON
    if (constellationsGroup) {
      constellationsGroup.visible = showC;
    }
  };

  // Zodiacs
  const zodiacsCtrl = overlaysFolder
    .add(config, 'showZodiacs')
    .name('Zodiacs')
    .onChange(updateConstellations);
  zodiacsCtrl.domElement.classList.add('checkbox-left');

  // Constellations (All 88)
  const constellationsCtrl = overlaysFolder
    .add(config, 'showConstellations')
    .name('Constellations (All)')
    .onChange(updateConstellations);
  constellationsCtrl.domElement.classList.add('checkbox-left');

  // Zodiac Signs
  const zodiacSignsCtrl = overlaysFolder
    .add(config, 'showZodiacSigns')
    .name('Zodiac Signs')
    .onChange((val) => {
      if (zodiacSignsGroup) {
        zodiacSignsGroup.visible = val;
      }
    });
  zodiacSignsCtrl.domElement.classList.add('checkbox-left');

  // Habitable Zone
  const habitableZoneCtrl = overlaysFolder
    .add(config, 'showHabitableZone')
    .name('Habitable Zone')
    .onChange((val) => {
      if (habitableZone) {
        habitableZone.visible = val;
      }
    });
  habitableZoneCtrl.domElement.classList.add('checkbox-left');

  // Magnetic Fields
  const magneticFieldsCtrl = overlaysFolder
    .add(config, 'showMagneticFields')
    .name('Magnetic Fields')
    .onChange((val) => {
      if (magneticFieldsGroup) {
        magneticFieldsGroup.visible = val;

        planets.forEach((p) => {
          p.mesh.children.forEach((child) => {
            if (
              child.type === 'Group' &&
              child.children.length > 0 &&
              child.children[0].type === 'Line'
            ) {
              child.visible = val;
            }
          });

          // Also moons
          p.moons.forEach((m) => {
            m.mesh.children.forEach((child) => {
              if (
                child.type === 'Group' &&
                child.children.length > 0 &&
                child.children[0].type === 'Line'
              ) {
                child.visible = val;
              }
            });
          });
        });
      }
      updateCapMagneticFieldsVisibility();
    });
  magneticFieldsCtrl.domElement.classList.add('checkbox-left');

  const capMagneticFieldsCtrl = overlaysFolder
    .add(config, 'capMagneticFields')
    .name('Cap When Scaling')
    .onChange(() => {
      updateMagneticFieldScales(planets);
    });
  capMagneticFieldsCtrl.domElement.classList.add('child-control', 'checkbox-left');

  // Show/hide child control based on parent state
  const updateCapMagneticFieldsVisibility = () => {
    capMagneticFieldsCtrl.domElement.style.display = config.showMagneticFields ? '' : 'none';
  };
  updateCapMagneticFieldsVisibility();

  overlaysFolder.close();
}

/**
 * Updates the scale of magnetic field meshes based on planet scale and capping setting.
 * If capped, fields won't grow beyond 100x planet scale equivalent.
 */
export function updateMagneticFieldScales(planets) {
  const currentScale = config.planetScale * REAL_PLANET_SCALE_FACTOR;
  let magScale = 1.0;

  if (config.capMagneticFields && currentScale > 100) {
    // Cap at 100x equivalent
    magScale = 100 / currentScale;
  }

  planets.forEach((p) => {
    // Planet fields
    const field = p.mesh.getObjectByName('MagneticField');
    if (field) field.scale.setScalar(magScale);

    // Moon fields
    p.moons.forEach((m) => {
      const mField = m.mesh.getObjectByName('MagneticField');
      if (mField) mField.scale.setScalar(magScale);
    });
  });
}

export function setupObjectsFolder(gui, planets, sun) {
  const objectsFolder = gui.addFolder('Objects');

  const sunCtrl = objectsFolder
    .add(config, 'showSun')
    .name('Sun')
    .onChange((val) => {
      sun.visible = val;
    });
  sunCtrl.domElement.classList.add('checkbox-left');

  const updatePlanetVisibility = (val) => {
    planets.forEach((p) => {
      if (p.data.type !== 'dwarf') {
        p.mesh.visible = val;
        if (p.data.cloudMesh) p.data.cloudMesh.visible = val;

        // Toggle planet orbit line
        if (p.orbitLine) p.orbitLine.visible = val;

        // Rings should also be toggled
        p.group.children.forEach((child) => {
          if (child !== p.mesh && child !== p.orbitLinesGroup && child.type === 'Mesh') {
            // This catches rings
            child.visible = val;
          }
        });
      }
    });
  };
  const planetsCtrl = objectsFolder
    .add(config, 'showPlanets')
    .name('Planets')
    .onChange(updatePlanetVisibility);
  planetsCtrl.domElement.classList.add('checkbox-left');
  updatePlanetVisibility(config.showPlanets);

  const updateDwarfVisibility = (val) => {
    planets.forEach((p) => {
      if (p.data.type === 'dwarf') {
        p.group.visible = val;
        if (p.orbitLine) p.orbitLine.visible = val;
      }
    });
  };
  const dwarfCtrl = objectsFolder
    .add(config, 'showDwarfPlanets')
    .name('Dwarf Planets')
    .onChange(updateDwarfVisibility);
  dwarfCtrl.domElement.classList.add('checkbox-left');
  updateDwarfVisibility(config.showDwarfPlanets);

  const updateLargestMoonsVisibility = (val) => {
    planets.forEach((p) => {
      p.moons.forEach((m) => {
        if (m.data.category === 'largest') {
          m.mesh.visible = val;
          if (m.data.orbitLine) m.data.orbitLine.visible = val;
        }
      });
    });
  };
  const largestMoonsCtrl = objectsFolder
    .add(config, 'showLargestMoons')
    .name('Largest Moons')
    .onChange(updateLargestMoonsVisibility);
  largestMoonsCtrl.domElement.classList.add('checkbox-left');
  updateLargestMoonsVisibility(config.showLargestMoons);

  const updateMajorMoonsVisibility = (val) => {
    planets.forEach((p) => {
      p.moons.forEach((m) => {
        if (m.data.category === 'major') {
          m.mesh.visible = val;
          if (m.data.orbitLine) m.data.orbitLine.visible = val;
        }
      });
    });
  };
  const majorMoonsCtrl = objectsFolder
    .add(config, 'showMajorMoons')
    .name('Major Moons')
    .onChange(updateMajorMoonsVisibility);
  majorMoonsCtrl.domElement.classList.add('checkbox-left');
  updateMajorMoonsVisibility(config.showMajorMoons);

  const updateSmallMoonsVisibility = (val) => {
    planets.forEach((p) => {
      p.moons.forEach((m) => {
        if (m.data.category === 'small') {
          m.mesh.visible = val;
          if (m.data.orbitLine) m.data.orbitLine.visible = val;
        }
      });
    });
  };
  const smallMoonsCtrl = objectsFolder
    .add(config, 'showSmallMoons')
    .name('Small Moons')
    .onChange(updateSmallMoonsVisibility);
  smallMoonsCtrl.domElement.classList.add('checkbox-left');
  updateSmallMoonsVisibility(config.showSmallMoons);

  objectsFolder.close();
}
