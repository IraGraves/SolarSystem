export function setupMissionsFolder(gui, config) {
  const missionsFolder = gui.addFolder('Missions');

  // Pioneer 10 (1972)
  const p10Ctrl = missionsFolder
    .add(config.showMissions, 'pioneer10')
    .name('Pioneer 10 (1972)')
    .onChange(() => {
      if (window.updateMissions) window.updateMissions();
    });
  p10Ctrl.domElement.classList.add('pioneer10-checkbox');

  // Pioneer 11 (1973)
  const p11Ctrl = missionsFolder
    .add(config.showMissions, 'pioneer11')
    .name('Pioneer 11 (1973)')
    .onChange(() => {
      if (window.updateMissions) window.updateMissions();
    });
  p11Ctrl.domElement.classList.add('pioneer11-checkbox');

  // Voyager 2 (1977)
  const v2Ctrl = missionsFolder
    .add(config.showMissions, 'voyager2')
    .name('Voyager 2 (1977)')
    .onChange(() => {
      if (window.updateMissions) window.updateMissions();
    });
  v2Ctrl.domElement.classList.add('voyager2-checkbox');

  // Voyager 1 (1977)
  const v1Ctrl = missionsFolder
    .add(config.showMissions, 'voyager1')
    .name('Voyager 1 (1977)')
    .onChange(() => {
      if (window.updateMissions) window.updateMissions();
    });
  v1Ctrl.domElement.classList.add('voyager1-checkbox');

  // Galileo (1989)
  const galCtrl = missionsFolder
    .add(config.showMissions, 'galileo')
    .name('Galileo (1989)')
    .onChange(() => {
      if (window.updateMissions) window.updateMissions();
    });
  galCtrl.domElement.classList.add('galileo-checkbox');

  // Ulysses (1990)
  const ulyssesCtrl = missionsFolder
    .add(config.showMissions, 'ulysses')
    .name('Ulysses (1990)')
    .onChange(() => {
      if (window.updateMissions) window.updateMissions();
    });
  ulyssesCtrl.domElement.classList.add('ulysses-checkbox');

  // Cassini (1997)
  const cassiniCtrl = missionsFolder
    .add(config.showMissions, 'cassini')
    .name('Cassini (1997)')
    .onChange(() => {
      if (window.updateMissions) window.updateMissions();
    });
  cassiniCtrl.domElement.classList.add('cassini-checkbox');

  // Rosetta (2004)
  const rosettaCtrl = missionsFolder
    .add(config.showMissions, 'rosetta')
    .name('Rosetta (2004)')
    .onChange(() => {
      if (window.updateMissions) window.updateMissions();
    });
  rosettaCtrl.domElement.classList.add('rosetta-checkbox');

  // New Horizons (2006)
  const nhCtrl = missionsFolder
    .add(config.showMissions, 'newHorizons')
    .name('New Horizons (2006)')
    .onChange(() => {
      if (window.updateMissions) window.updateMissions();
    });
  nhCtrl.domElement.classList.add('new-horizons-checkbox');

  // Juno (2011)
  const junoCtrl = missionsFolder
    .add(config.showMissions, 'juno')
    .name('Juno (2011)')
    .onChange(() => {
      if (window.updateMissions) window.updateMissions();
    });
  junoCtrl.domElement.classList.add('juno-checkbox');

  // Parker Solar Probe (2018)
  const parkerCtrl = missionsFolder
    .add(config.showMissions, 'parkerSolarProbe')
    .name('Parker Solar Probe (2018)')
    .onChange(() => {
      if (window.updateMissions) window.updateMissions();
    });
  parkerCtrl.domElement.classList.add('parker-checkbox');

  missionsFolder.close(); // Close Missions subfolder by default
}
