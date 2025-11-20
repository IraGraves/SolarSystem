import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import GUI from 'lil-gui';
import * as Astronomy from 'astronomy-engine';

// --- Configuration ---
const config = {
    speedExponent: 0,
    simulationSpeed: 0,
    planetScale: 1,
    sunScale: 1,
    showOrbits: true,
    showZodiacs: false,
    date: new Date(),
    stop: false
};

// --- Scene Setup ---
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100000);
camera.position.set(0, 200, 400);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// --- Lighting ---
const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight);

const sunLight = new THREE.PointLight(0xffffff, 2, 0, 0);
scene.add(sunLight);

// --- Starfield ---
const STAR_DISTANCE = 10000;

function raDecToVector(ra, dec, radius) {
    const phi = (90 - dec) * (Math.PI / 180);
    const theta = (ra) * (Math.PI / 180);
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.cos(phi);
    const z = radius * Math.sin(phi) * Math.sin(theta);
    return new THREE.Vector3(x, y, z);
}

async function createStarfield() {
    try {
        const response = await fetch('/assets/stars.json');
        const data = await response.json();
        const geometry = new THREE.BufferGeometry();
        const positions = [];
        const colors = [];
        const sizes = [];
        const color = new THREE.Color();

        data.features.forEach(feature => {
            const [ra, dec] = feature.geometry.coordinates;
            const mag = feature.properties.mag;
            const pos = raDecToVector(ra, dec, STAR_DISTANCE);
            positions.push(pos.x, pos.y, pos.z);
            const intensity = Math.max(0.1, 1 - (mag + 1.5) / 8);
            color.setHSL(0.6, 0.2, intensity);
            colors.push(color.r, color.g, color.b);
            const size = Math.max(0.5, (6 - mag) * 1.5);
            sizes.push(size);
        });

        geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
        geometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));

        const material = new THREE.PointsMaterial({
            vertexColors: true,
            size: 2,
            sizeAttenuation: false
        });

        const stars = new THREE.Points(geometry, material);
        scene.add(stars);
    } catch (error) {
        console.error("Error loading stars:", error);
    }
}

// --- Constellations (Zodiacs) ---
const zodiacGroup = new THREE.Group();
scene.add(zodiacGroup);
zodiacGroup.visible = config.showZodiacs;

const ZODIAC_IDS = ['Ari', 'Tau', 'Gem', 'Cnc', 'Leo', 'Vir', 'Lib', 'Sco', 'Sgr', 'Cap', 'Aqr', 'Psc'];

async function createConstellations() {
    try {
        const response = await fetch('/assets/constellations.json');
        const data = await response.json();
        const material = new THREE.LineBasicMaterial({ color: 0x446688, transparent: true, opacity: 0.6 });

        data.features.forEach(feature => {
            if (ZODIAC_IDS.includes(feature.id)) {
                feature.geometry.coordinates.forEach(lineString => {
                    const stripPoints = [];
                    lineString.forEach(coord => {
                        const [ra, dec] = coord;
                        stripPoints.push(raDecToVector(ra, dec, STAR_DISTANCE));
                    });
                    const stripGeometry = new THREE.BufferGeometry().setFromPoints(stripPoints);
                    const line = new THREE.Line(stripGeometry, material);
                    zodiacGroup.add(line);
                });
            }
        });
    } catch (error) {
        console.error("Error loading constellations:", error);
    }
}

// --- Sun ---
const sunGeometry = new THREE.SphereGeometry(5, 32, 32);
const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);

// --- Planets Data ---
const AU_TO_SCENE = 50;
const MOON_DISTANCE_SCALE = 50;
const JOVIAN_MOON_SCALE = 100;

const planetData = [
    { name: "Mercury", body: "Mercury", radius: 0.38, color: 0xaaaaaa, period: 88 },
    { name: "Venus", body: "Venus", radius: 0.95, color: 0xffcc00, period: 225 },
    {
        name: "Earth", body: "Earth", radius: 1, color: 0x2233ff, period: 365.25, moons: [
            { name: "Moon", body: "Moon", radius: 0.27, color: 0x888888, type: "real", period: 27.3 }
        ]
    },
    { name: "Mars", body: "Mars", radius: 0.53, color: 0xff4400, period: 687 },
    {
        name: "Jupiter", body: "Jupiter", radius: 11, color: 0xd2b48c, period: 4333, moons: [
            { name: "Io", radius: 0.28, color: 0xffff00, type: "jovian", moonIndex: 0, period: 1.77 },
            { name: "Europa", radius: 0.24, color: 0xffffff, type: "jovian", moonIndex: 1, period: 3.55 },
            { name: "Ganymede", radius: 0.41, color: 0xdddddd, type: "jovian", moonIndex: 2, period: 7.15 },
            { name: "Callisto", radius: 0.37, color: 0xaaaaaa, type: "jovian", moonIndex: 3, period: 16.7 }
        ]
    },
    {
        name: "Saturn", body: "Saturn", radius: 9, color: 0xeebb88, period: 10759, ring: { inner: 11, outer: 18, color: 0xaa8866 }, moons: [
            { name: "Titan", radius: 0.4, distance: 20, color: 0xffaa00, type: "simple", period: 15.95 }
        ]
    },
    { name: "Uranus", body: "Uranus", radius: 4, color: 0x88ffff, period: 30687 },
    { name: "Neptune", body: "Neptune", radius: 3.8, color: 0x4444ff, period: 60190 }
];

const planets = [];
const orbitGroup = new THREE.Group();
scene.add(orbitGroup);

function createPlanets() {
    planetData.forEach(data => {
        const planetGroup = new THREE.Group();
        scene.add(planetGroup);

        const geometry = new THREE.SphereGeometry(data.radius, 32, 32);
        const material = new THREE.MeshStandardMaterial({ color: data.color });
        const mesh = new THREE.Mesh(geometry, material);
        planetGroup.add(mesh);

        // Create a non-rotating group for moon orbit lines
        const orbitLinesGroup = new THREE.Group();
        planetGroup.add(orbitLinesGroup);

        if (data.ring) {
            const ringGeo = new THREE.RingGeometry(data.ring.inner, data.ring.outer, 64);
            const ringMat = new THREE.MeshStandardMaterial({ color: data.ring.color, side: THREE.DoubleSide, transparent: true, opacity: 0.8 });
            const ring = new THREE.Mesh(ringGeo, ringMat);
            ring.rotation.x = Math.PI / 2;
            mesh.add(ring);
        }

        if (data.body) {
            const points = [];
            const steps = 360;
            const startTime = new Date();
            const periodDays = data.period || 365;

            for (let i = 0; i <= steps; i++) {
                const t = new Date(startTime.getTime() + (i / steps) * periodDays * 24 * 60 * 60 * 1000);
                const vec = Astronomy.HelioVector(Astronomy.Body[data.body], t);
                points.push(new THREE.Vector3(vec.x * AU_TO_SCENE, vec.z * AU_TO_SCENE, -vec.y * AU_TO_SCENE));
            }

            const orbitGeo = new THREE.BufferGeometry().setFromPoints(points);
            const orbitMat = new THREE.LineBasicMaterial({ color: 0x444444, transparent: true, opacity: 0.5 });
            const orbitLine = new THREE.Line(orbitGeo, orbitMat);
            orbitGroup.add(orbitLine);
        }

        const moons = [];
        if (data.moons) {
            data.moons.forEach(moonData => {
                const moonGeo = new THREE.SphereGeometry(moonData.radius, 16, 16);
                const moonMat = new THREE.MeshStandardMaterial({ color: moonData.color });
                const moonMesh = new THREE.Mesh(moonGeo, moonMat);

                if (moonData.type === "jovian") {
                    // Jupiter's Galilean moons - add to planetGroup to avoid rotation
                    planetGroup.add(moonMesh);

                    const orbitPoints = [];
                    const steps = 90;
                    const startTime = new Date();
                    const periodDays = moonData.period;

                    for (let i = 0; i <= steps; i++) {
                        const t = new Date(startTime.getTime() + (i / steps) * periodDays * 24 * 60 * 60 * 1000);
                        const jm = Astronomy.JupiterMoons(t);
                        const moonState = [jm.io, jm.europa, jm.ganymede, jm.callisto][moonData.moonIndex];
                        orbitPoints.push(new THREE.Vector3(
                            moonState.x * AU_TO_SCENE * JOVIAN_MOON_SCALE,
                            moonState.z * AU_TO_SCENE * JOVIAN_MOON_SCALE,
                            -moonState.y * AU_TO_SCENE * JOVIAN_MOON_SCALE
                        ));
                    }
                    const orbitGeo = new THREE.BufferGeometry().setFromPoints(orbitPoints);
                    const orbitMat = new THREE.LineBasicMaterial({ color: 0x666666, transparent: true, opacity: 0.3 });
                    const orbitLine = new THREE.Line(orbitGeo, orbitMat);
                    orbitLinesGroup.add(orbitLine);
                    moonData.orbitLine = orbitLine;
                } else if (moonData.type === "simple") {
                    // Simple circular orbit - add to planetGroup to avoid rotation
                    planetGroup.add(moonMesh);

                    const orbitPoints = [];
                    for (let i = 0; i <= 64; i++) {
                        const angle = (i / 64) * Math.PI * 2;
                        orbitPoints.push(new THREE.Vector3(Math.cos(angle) * moonData.distance, 0, Math.sin(angle) * moonData.distance));
                    }
                    const orbitGeo = new THREE.BufferGeometry().setFromPoints(orbitPoints);
                    const orbitMat = new THREE.LineBasicMaterial({ color: 0x666666, transparent: true, opacity: 0.3 });
                    const orbitLine = new THREE.Line(orbitGeo, orbitMat);
                    orbitLinesGroup.add(orbitLine);
                    moonData.orbitLine = orbitLine;
                } else {
                    // Earth's Moon - add to planetGroup to avoid rotation
                    planetGroup.add(moonMesh);

                    const points = [];
                    const steps = 90;
                    const startTime = new Date();
                    const periodDays = moonData.period || 27.3;

                    for (let i = 0; i <= steps; i++) {
                        const t = new Date(startTime.getTime() + (i / steps) * periodDays * 24 * 60 * 60 * 1000);
                        const vec = Astronomy.GeoVector(Astronomy.Body[moonData.body], t, true);
                        points.push(new THREE.Vector3(
                            vec.x * AU_TO_SCENE * MOON_DISTANCE_SCALE,
                            vec.z * AU_TO_SCENE * MOON_DISTANCE_SCALE,
                            -vec.y * AU_TO_SCENE * MOON_DISTANCE_SCALE
                        ));
                    }
                    const orbitGeo = new THREE.BufferGeometry().setFromPoints(points);
                    const orbitMat = new THREE.LineBasicMaterial({ color: 0x888888, transparent: true, opacity: 0.5 });
                    const orbitLine = new THREE.Line(orbitGeo, orbitMat);
                    orbitLinesGroup.add(orbitLine);
                    moonData.orbitLine = orbitLine;
                }

                moons.push({ mesh: moonMesh, data: moonData });
            });
        }

        planets.push({ group: planetGroup, mesh: mesh, data: data, moons: moons, orbitLinesGroup: orbitLinesGroup });
    });
}

createPlanets();

// --- GUI ---
const gui = new GUI({ title: 'Solar System' });

const uiState = {
    speedExponent: 0,
    date: '',
    time: '',
    stardate: '',
    speedFactor: '0x',
    planetScaleDisplay: '1.00x',
    sunScaleDisplay: '1.00x',
    rotate: 'Left Click + Drag',
    pan: 'Right Click + Drag',
    zoom: 'Scroll'
};

const controlsFolder = gui.addFolder('Controls');

controlsFolder.add(uiState, 'speedExponent', 0, 6).name('Speed (Log)').onChange(val => {
    if (val <= 0.1) {
        config.simulationSpeed = 0;
        uiState.speedFactor = '0x';
    } else {
        const speed = Math.pow(10, val);
        config.simulationSpeed = speed;
        uiState.speedFactor = Math.round(speed).toLocaleString() + 'x';
    }
});

controlsFolder.add(config, 'planetScale', 0.1, 5).name('Planet Scale').onChange(val => {
    planets.forEach(p => p.mesh.scale.setScalar(val));
    uiState.planetScaleDisplay = val.toFixed(2) + 'x';
});

controlsFolder.add(config, 'sunScale', 0.1, 5).name('Sun Scale').onChange(val => {
    sun.scale.setScalar(val);
    uiState.sunScaleDisplay = val.toFixed(2) + 'x';
});

controlsFolder.add(config, 'showOrbits').name('Show Orbits').onChange(val => {
    orbitGroup.visible = val;
    planets.forEach(p => {
        p.moons.forEach(m => {
            if (m.data.orbitLine) m.data.orbitLine.visible = val;
        });
    });
});

controlsFolder.add(config, 'showZodiacs').name('Show Zodiacs').onChange(val => {
    zodiacGroup.visible = val;
});

controlsFolder.add(config, 'stop').name('Pause Simulation');

const infoFolder = gui.addFolder('Info');
const dateCtrl = infoFolder.add(uiState, 'date').name('Date');
dateCtrl.disable();
const timeCtrl = infoFolder.add(uiState, 'time').name('Time');
timeCtrl.disable();
const stardateCtrl = infoFolder.add(uiState, 'stardate').name('Stardate');
stardateCtrl.disable();
const speedCtrl = infoFolder.add(uiState, 'speedFactor').name('Speed Factor');
speedCtrl.disable();
const pScaleCtrl = infoFolder.add(uiState, 'planetScaleDisplay').name('Planet Scale');
pScaleCtrl.disable();
const sScaleCtrl = infoFolder.add(uiState, 'sunScaleDisplay').name('Sun Scale');
sScaleCtrl.disable();

const navFolder = gui.addFolder('Navigation');
const rotateCtrl = navFolder.add(uiState, 'rotate').name('Rotate');
rotateCtrl.disable();
const panCtrl = navFolder.add(uiState, 'pan').name('Pan');
panCtrl.disable();
const zoomCtrl = navFolder.add(uiState, 'zoom').name('Zoom');
zoomCtrl.disable();

function updateInfoPanel() {
    uiState.date = config.date.toLocaleDateString();
    uiState.time = config.date.toLocaleTimeString();

    const startOfYear = new Date(config.date.getFullYear(), 0, 0);
    const diff = config.date - startOfYear;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    uiState.stardate = (config.date.getFullYear() + (dayOfYear / 365)).toFixed(2);

    if (config.simulationSpeed === 0) {
        uiState.speedFactor = '0x (Paused)';
    } else {
        uiState.speedFactor = Math.round(config.simulationSpeed).toLocaleString() + 'x';
    }

    dateCtrl.updateDisplay();
    timeCtrl.updateDisplay();
    stardateCtrl.updateDisplay();
    speedCtrl.updateDisplay();
    pScaleCtrl.updateDisplay();
    sScaleCtrl.updateDisplay();
}

function animate() {
    requestAnimationFrame(animate);

    if (!config.stop) {
        const daysPerFrame = config.simulationSpeed / 60;
        config.date.setTime(config.date.getTime() + daysPerFrame * 24 * 60 * 60 * 1000);
    }

    updateInfoPanel();

    planets.forEach(p => {
        if (p.data.body) {
            const vector = Astronomy.HelioVector(Astronomy.Body[p.data.body], config.date);
            p.mesh.position.x = vector.x * AU_TO_SCENE;
            p.mesh.position.z = -vector.y * AU_TO_SCENE;
            p.mesh.position.y = vector.z * AU_TO_SCENE;

            // Only rotate planet if not paused
            if (!config.stop) {
                p.mesh.rotation.y += 0.01;
            }

            // Position orbit lines group to match planet (no rotation)
            if (p.orbitLinesGroup) {
                p.orbitLinesGroup.position.copy(p.mesh.position);
            }
        }

        p.moons.forEach(m => {
            if (m.data.type === "jovian") {
                // Jupiter's Galilean moons - world position (planet pos + moon offset)
                const jm = Astronomy.JupiterMoons(config.date);
                const moonState = [jm.io, jm.europa, jm.ganymede, jm.callisto][m.data.moonIndex];

                m.mesh.position.x = p.mesh.position.x + (moonState.x * AU_TO_SCENE * JOVIAN_MOON_SCALE);
                m.mesh.position.z = p.mesh.position.z + (-moonState.y * AU_TO_SCENE * JOVIAN_MOON_SCALE);
                m.mesh.position.y = p.mesh.position.y + (moonState.z * AU_TO_SCENE * JOVIAN_MOON_SCALE);
            } else if (m.data.type === "real") {
                // Earth's Moon - world position (planet pos + moon offset)
                const moonVector = Astronomy.GeoVector(Astronomy.Body[m.data.body], config.date, true);
                m.mesh.position.x = p.mesh.position.x + (moonVector.x * AU_TO_SCENE * MOON_DISTANCE_SCALE);
                m.mesh.position.z = p.mesh.position.z + (-moonVector.y * AU_TO_SCENE * MOON_DISTANCE_SCALE);
                m.mesh.position.y = p.mesh.position.y + (moonVector.z * AU_TO_SCENE * MOON_DISTANCE_SCALE);
            } else {
                // Simple moons (Titan) - world position (planet pos + moon offset)
                const epoch = new Date(2000, 0, 1).getTime();
                const currentTime = config.date.getTime();
                const daysSinceEpoch = (currentTime - epoch) / (24 * 60 * 60 * 1000);
                const angle = (daysSinceEpoch * 2 * Math.PI) / m.data.period;

                m.mesh.position.x = p.mesh.position.x + (Math.cos(angle) * m.data.distance);
                m.mesh.position.z = p.mesh.position.z + (Math.sin(angle) * m.data.distance);
                m.mesh.position.y = p.mesh.position.y;
            }
        });
    });

    controls.update();
    renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

//  --- Init ---
(async () => {
    try {
        await createStarfield();
        await createConstellations();
        document.getElementById('loading').style.opacity = 0;
        animate();
    } catch (error) {
        console.error('Initialization error:', error);
        document.getElementById('loading').textContent = 'Error loading simulation: ' + error.message;
        document.getElementById('loading').style.color = 'red';
    }
})();
