import { addValueDisplay } from './utils.js';

export function setupTimeFolder(gui, uiState, config) {
    const timeFolder = gui.addFolder('Time');
    timeFolder.domElement.classList.add('time-folder');

    const dateCtrl = timeFolder.add(uiState, 'date').name('Date').onChange(val => {
        const [year, month, day] = val.split('-').map(Number);
        // Create new date from selected YYYY-MM-DD
        // Maintain current time of day
        const current = config.date;
        config.date = new Date(year, month - 1, day, current.getHours(), current.getMinutes(), current.getSeconds());
    });
    dateCtrl.domElement.classList.add('compact-ctrl');

    // Hack to make it a date input
    const dateInput = dateCtrl.domElement.querySelector('input');
    dateInput.type = 'date';
    const timeCtrl = timeFolder.add(uiState, 'time').name('Time');
    timeCtrl.disable();
    timeCtrl.domElement.classList.add('compact-ctrl');

    const stardateCtrl = timeFolder.add(uiState, 'stardate').name('Stardate');
    stardateCtrl.disable();

    uiState.setNow = () => {
        config.date = new Date();
    };
    const setNowCtrl = timeFolder.add(uiState, 'setNow').name('NOW');
    setNowCtrl.domElement.classList.add('set-now-btn');

    const speedSlider = timeFolder.add(uiState, 'speedExponent', -11, 11).name('Speed').onChange(val => {
        const speed = (val >= 0 ? 1 : -1) * Math.pow(10, Math.abs(val));
        config.simulationSpeed = speed;
        uiState.speedFactor = Math.round(speed).toLocaleString() + 'x';
    });
    speedSlider.domElement.classList.add('hide-value');
    const speedDisplay = addValueDisplay(speedSlider, () => uiState.speedFactor);

    // Add Speed Control Buttons
    const speedControls = document.createElement('div');
    speedControls.className = 'speed-controls';

    const speeds = [
        { label: '-1000x', val: -3 },
        { label: '-100x', val: -2 },
        { label: '-10x', val: -1 },
        { label: '-1x', val: 0, real: -1 }, // Special case for 1x
        { label: '0x', val: null, pause: true },
        { label: '1x', val: 0, real: 1 },   // Special case for 1x
        { label: '10x', val: 1 },
        { label: '100x', val: 2 },
        { label: '1000x', val: 3 }
    ];

    speeds.forEach(s => {
        const btn = document.createElement('div');
        btn.className = 'speed-btn' + (s.pause ? ' pause' : '');
        btn.textContent = s.label;
        btn.onclick = () => {
            if (s.pause) {
                config.simulationSpeed = 0;
                // Update slider to 0 visual but keep internal state if needed
                // For pause we don't necessarily move the slider, or we could move it to 0
                // But slider is logarithmic. Let's just update speed.
                uiState.speedFactor = '0x';
                speedDisplay.update();
            } else {
                let exponent = s.val;
                if (s.real !== undefined) {
                    // 1x or -1x
                    speedSlider.setValue(s.val); // Set slider to 0 (10^0 = 1)
                    config.simulationSpeed = s.real; // Force exact 1 or -1
                } else {
                    speedSlider.setValue(exponent);
                }
            }

            // Update active state
            speedControls.querySelectorAll('.speed-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        };
        speedControls.appendChild(btn);
    });

    // Insert buttons AFTER the slider
    // speedSlider.domElement is the controller row
    const childrenContainer = timeFolder.domElement.querySelector('.children');
    // To insert after, we insert before the next sibling, or append if it's the last one
    if (speedSlider.domElement.nextSibling) {
        childrenContainer.insertBefore(speedControls, speedSlider.domElement.nextSibling);
    } else {
        childrenContainer.appendChild(speedControls);
    }

    timeFolder.close(); // Close Time folder by default

    return { dateCtrl, timeCtrl, stardateCtrl, speedDisplay };
}
