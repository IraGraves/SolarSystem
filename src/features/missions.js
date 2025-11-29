import * as THREE from 'three';
import { AU_TO_SCENE, config } from '../config.js';

/**
 * Simplified Mission trajectory data
 * Positions are approximate based on known encounter dates and heliocentric orbits
 * Now includes date information for future timeline features
 */

// Helper to create smooth curve through waypoints
function createSmoothPath(waypoints, segments = 100) {
  // Extract positions from the new object structure
  const points = waypoints.map((wp) => wp.pos);
  const curve = new THREE.CatmullRomCurve3(points);
  return curve.getPoints(segments);
}

// Voyager 1 trajectory waypoints
const voyager1Waypoints = [
  { pos: new THREE.Vector3(1.0, 0, 0), date: '1977-09-05' }, // Earth (launch)
  { pos: new THREE.Vector3(4.5, 0.3, 0.5), date: '1979-01-01' }, // Approaching Jupiter
  { pos: new THREE.Vector3(5.2, 0, 0.8), date: '1979-03-05' }, // Jupiter flyby
  { pos: new THREE.Vector3(7.0, -0.5, 1.0), date: '1980-01-01' }, // Between Jupiter and Saturn
  { pos: new THREE.Vector3(9.5, 0, 1.2), date: '1980-11-12' }, // Saturn flyby
  { pos: new THREE.Vector3(15, 1.5, 2.5), date: '1985-01-01' }, // Post-Saturn trajectory
  { pos: new THREE.Vector3(25, 3.5, 5.0), date: '1995-01-01' }, // Heading to interstellar space
  { pos: new THREE.Vector3(40, 6.0, 8.5), date: '2010-01-01' }, // Deep space
  { pos: new THREE.Vector3(160, 24.0, 34.0), date: '2024-01-01' }, // Current approximate position
];

// Voyager 2 trajectory waypoints
const voyager2Waypoints = [
  { pos: new THREE.Vector3(1.0, 0, -0.1), date: '1977-08-20' }, // Earth (launch)
  { pos: new THREE.Vector3(4.2, -0.2, 0.3), date: '1979-04-01' }, // Approaching Jupiter
  { pos: new THREE.Vector3(5.2, 0, 0.5), date: '1979-07-09' }, // Jupiter flyby
  { pos: new THREE.Vector3(7.5, 0.5, 0.7), date: '1980-06-01' }, // Between Jupiter and Saturn
  { pos: new THREE.Vector3(9.5, 0, 0.9), date: '1981-08-25' }, // Saturn flyby
  { pos: new THREE.Vector3(15, -1.0, 0.5), date: '1984-01-01' }, // Between Saturn and Uranus
  { pos: new THREE.Vector3(19.2, 0, 0.3), date: '1986-01-24' }, // Uranus flyby
  { pos: new THREE.Vector3(25, 0.5, -0.5), date: '1988-01-01' }, // Between Uranus and Neptune
  { pos: new THREE.Vector3(30.1, 0, -1.0), date: '1989-08-25' }, // Neptune flyby
  { pos: new THREE.Vector3(40, -2.0, -3.0), date: '2000-01-01' }, // Heading to interstellar space
  { pos: new THREE.Vector3(133, -6.6, -10.0), date: '2024-01-01' }, // Current approximate position
];

// Pioneer 10 trajectory waypoints
const pioneer10Waypoints = [
  { pos: new THREE.Vector3(1.0, 0, 0.05), date: '1972-03-02' }, // Earth (launch)
  { pos: new THREE.Vector3(3.5, 0.2, 0.4), date: '1973-06-01' }, // Approaching Jupiter
  { pos: new THREE.Vector3(5.2, 0, 0.6), date: '1973-12-04' }, // Jupiter flyby
  { pos: new THREE.Vector3(10, 1.0, 1.5), date: '1976-01-01' }, // Continuing outward
  { pos: new THREE.Vector3(20, 2.5, 3.0), date: '1983-01-01' }, // Far outer solar system
  { pos: new THREE.Vector3(35, 4.5, 5.5), date: '1995-01-01' }, // Deep space
  { pos: new THREE.Vector3(130, 16.0, 20.0), date: '2024-01-01' }, // Current approximate position
];

// Pioneer 11 trajectory waypoints
const pioneer11Waypoints = [
  { pos: new THREE.Vector3(1.0, 0, -0.05), date: '1973-04-06' }, // Earth (launch)
  { pos: new THREE.Vector3(4.0, -0.3, 0.3), date: '1974-06-01' }, // Approaching Jupiter
  { pos: new THREE.Vector3(5.2, 0, 0.4), date: '1974-12-02' }, // Jupiter flyby
  { pos: new THREE.Vector3(7.0, 0.4, 0.6), date: '1977-01-01' }, // Between Jupiter and Saturn
  { pos: new THREE.Vector3(9.5, 0, 0.8), date: '1979-09-01' }, // Saturn flyby
  { pos: new THREE.Vector3(15, -1.5, 1.5), date: '1985-01-01' }, // Continuing outward
  { pos: new THREE.Vector3(110, -11.0, 11.0), date: '2024-01-01' }, // Current approximate position
];

// Galileo trajectory waypoints
const galileoWaypoints = [
  { pos: new THREE.Vector3(1.0, 0, 0), date: '1989-10-18' }, // Earth (launch)
  { pos: new THREE.Vector3(0.7, -0.1, -0.05), date: '1990-02-10' }, // Venus flyby
  { pos: new THREE.Vector3(1.0, 0.05, 0.1), date: '1990-12-08' }, // Earth flyby 1
  { pos: new THREE.Vector3(2.0, 0.2, 0.2), date: '1991-10-29' }, // Gaspra flyby
  { pos: new THREE.Vector3(1.0, -0.05, 0.15), date: '1992-12-08' }, // Earth flyby 2
  { pos: new THREE.Vector3(3.5, 0.3, 0.4), date: '1994-01-01' }, // Approaching Jupiter
  { pos: new THREE.Vector3(5.2, 0, 0.5), date: '1995-12-07' }, // Jupiter orbit insertion
  // Orbital phase
  { pos: new THREE.Vector3(5.3, 0.1, 0.5), date: '1996-06-01' },
  { pos: new THREE.Vector3(5.2, 0, 0.6), date: '1997-01-01' },
  { pos: new THREE.Vector3(5.1, -0.1, 0.5), date: '1998-01-01' },
  { pos: new THREE.Vector3(5.2, 0, 0.4), date: '2003-09-21' }, // End of mission
];

// Cassini trajectory waypoints
const cassiniWaypoints = [
  { pos: new THREE.Vector3(1.0, 0, 0), date: '1997-10-15' }, // Earth (launch)
  { pos: new THREE.Vector3(0.7, 0.1, 0), date: '1998-04-26' }, // Venus flyby 1
  { pos: new THREE.Vector3(0.7, -0.1, 0.05), date: '1999-06-24' }, // Venus flyby 2
  { pos: new THREE.Vector3(1.0, -0.2, 0.1), date: '1999-08-18' }, // Earth flyby
  { pos: new THREE.Vector3(5.2, 0, 0.5), date: '2000-12-30' }, // Jupiter flyby
  { pos: new THREE.Vector3(9.5, 0, 1.0), date: '2004-07-01' }, // Saturn orbit insertion
  // Orbital phase
  { pos: new THREE.Vector3(9.6, 0.2, 1.1), date: '2005-01-01' },
  { pos: new THREE.Vector3(9.4, -0.2, 0.9), date: '2008-01-01' },
  { pos: new THREE.Vector3(9.5, 0, 1.0), date: '2017-09-15' }, // End of mission
];

// New Horizons trajectory waypoints
const newHorizonsWaypoints = [
  { pos: new THREE.Vector3(1.0, 0, 0), date: '2006-01-19' }, // Earth (launch)
  { pos: new THREE.Vector3(5.2, 0, 0.2), date: '2007-02-28' }, // Jupiter flyby
  { pos: new THREE.Vector3(20.0, 0.5, 1.0), date: '2011-01-01' }, // Crossing Uranus orbit
  { pos: new THREE.Vector3(30.0, 1.0, 1.5), date: '2014-08-01' }, // Crossing Neptune orbit
  { pos: new THREE.Vector3(32.9, 1.5, 1.8), date: '2015-07-14' }, // Pluto flyby
  { pos: new THREE.Vector3(43.0, 2.0, 2.2), date: '2019-01-01' }, // Arrokoth flyby
  { pos: new THREE.Vector3(58.0, 3.0, 3.0), date: '2024-01-01' }, // Current position
];

// Parker Solar Probe trajectory (simplified)
const parkerWaypoints = [
  { pos: new THREE.Vector3(1.0, 0, 0), date: '2018-08-12' }, // Earth (launch)
  { pos: new THREE.Vector3(0.7, 0, 0), date: '2018-10-03' }, // Venus flyby 1
  { pos: new THREE.Vector3(0.2, 0, 0.05), date: '2018-11-06' }, // Perihelion 1
  { pos: new THREE.Vector3(0.7, 0.1, 0), date: '2019-12-26' }, // Venus flyby 2
  { pos: new THREE.Vector3(0.1, 0, 0.02), date: '2021-01-01' }, // Close approach
  { pos: new THREE.Vector3(0.7, -0.1, 0), date: '2023-08-21' }, // Venus flyby 6
  { pos: new THREE.Vector3(0.04, 0, 0.01), date: '2024-12-24' }, // Closest approach
];

// Juno trajectory
const junoWaypoints = [
  { pos: new THREE.Vector3(1.0, 0, 0), date: '2011-08-05' }, // Earth (launch)
  { pos: new THREE.Vector3(1.5, 0.1, 0), date: '2012-08-01' }, // Deep space maneuver
  { pos: new THREE.Vector3(1.0, 0, 0.1), date: '2013-10-09' }, // Earth flyby
  { pos: new THREE.Vector3(5.2, 0, 0.5), date: '2016-07-04' }, // Jupiter insertion
  // Polar orbit loops (simplified)
  { pos: new THREE.Vector3(5.2, 1.0, 0.5), date: '2017-01-01' },
  { pos: new THREE.Vector3(5.2, -1.0, 0.5), date: '2018-01-01' },
  { pos: new THREE.Vector3(5.2, 0.5, 0.5), date: '2024-01-01' },
];

// Rosetta trajectory
const rosettaWaypoints = [
  { pos: new THREE.Vector3(1.0, 0, 0), date: '2004-03-02' }, // Earth (launch)
  { pos: new THREE.Vector3(1.0, 0.1, 0), date: '2005-03-04' }, // Earth flyby 1
  { pos: new THREE.Vector3(1.5, 0.2, 0.1), date: '2007-02-25' }, // Mars flyby
  { pos: new THREE.Vector3(1.0, -0.1, 0), date: '2007-11-13' }, // Earth flyby 2
  { pos: new THREE.Vector3(2.3, 0.3, 0.2), date: '2008-09-05' }, // Steins flyby
  { pos: new THREE.Vector3(1.0, 0, 0.1), date: '2009-11-13' }, // Earth flyby 3
  { pos: new THREE.Vector3(3.0, 0.5, 0.4), date: '2010-07-10' }, // Lutetia flyby
  { pos: new THREE.Vector3(3.5, 0.8, 0.6), date: '2014-08-06' }, // Comet 67P arrival
  { pos: new THREE.Vector3(1.2, 0.2, 0.1), date: '2015-08-13' }, // Perihelion with comet
  { pos: new THREE.Vector3(5.2, 1.0, 1.0), date: '2016-09-30' }, // End of mission
];

// Ulysses trajectory
const ulyssesWaypoints = [
  { pos: new THREE.Vector3(1.0, 0, 0), date: '1990-10-06' }, // Earth (launch)
  { pos: new THREE.Vector3(5.2, 0, 0.5), date: '1992-02-08' }, // Jupiter flyby
  // Solar polar orbit
  { pos: new THREE.Vector3(2.0, 2.0, 0), date: '1994-06-01' }, // South pole pass
  { pos: new THREE.Vector3(2.0, -2.0, 0), date: '1995-06-01' }, // North pole pass
  { pos: new THREE.Vector3(5.2, 0, 0.5), date: '1998-01-01' }, // Aphelion
  { pos: new THREE.Vector3(2.0, 2.0, 0), date: '2000-09-01' }, // South pole pass 2
  { pos: new THREE.Vector3(2.0, -2.0, 0), date: '2001-09-01' }, // North pole pass 2
  { pos: new THREE.Vector3(5.4, 0, 0.6), date: '2009-06-30' }, // End of mission
];

const missionLines = {};

/**
 * Initialize mission trajectories and add them to the scene
 * @param {THREE.Scene} scene - The Three.js scene
 */
export function initializeMissions(scene) {
  const missions = [
    { id: 'voyager1', waypoints: voyager1Waypoints, color: 0x00ffff }, // Cyan
    { id: 'voyager2', waypoints: voyager2Waypoints, color: 0xff00ff }, // Magenta
    { id: 'pioneer10', waypoints: pioneer10Waypoints, color: 0xffa500 }, // Orange
    { id: 'pioneer11', waypoints: pioneer11Waypoints, color: 0x00ff00 }, // Lime Green
    { id: 'galileo', waypoints: galileoWaypoints, color: 0xffd700 }, // Gold
    { id: 'cassini', waypoints: cassiniWaypoints, color: 0x0088ff }, // Azure
    { id: 'newHorizons', waypoints: newHorizonsWaypoints, color: 0xffffff }, // White
    { id: 'parkerSolarProbe', waypoints: parkerWaypoints, color: 0xff4500 }, // OrangeRed
    { id: 'juno', waypoints: junoWaypoints, color: 0xff69b4 }, // HotPink
    { id: 'rosetta', waypoints: rosettaWaypoints, color: 0x8a2be2 }, // BlueViolet
    { id: 'ulysses', waypoints: ulyssesWaypoints, color: 0xffff00 }, // Yellow
  ];

  missions.forEach((mission) => {
    const points = createSmoothPath(mission.waypoints, 200);
    const geometry = new THREE.BufferGeometry().setFromPoints(
      points.map((p) => p.multiplyScalar(AU_TO_SCENE))
    );
    const material = new THREE.LineBasicMaterial({
      color: mission.color,
      linewidth: 2,
      transparent: true,
      opacity: 0.8,
    });
    const line = new THREE.Line(geometry, material);
    line.visible = config.showMissions[mission.id];
    scene.add(line);
    missionLines[mission.id] = line;
  });

  return missionLines;
}

/**
 * Update mission visibility based on config
 */
export function updateMissions() {
  Object.keys(missionLines).forEach((id) => {
    if (missionLines[id]) {
      missionLines[id].visible = config.showMissions[id];
    }
  });
}
