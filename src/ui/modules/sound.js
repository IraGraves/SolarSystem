/**
 * @file sound.js
 * @description UI module for sound and music controls.
 */

import { config } from '../../config.js';
import { musicSystem } from '../../systems/music.js';

/**
 * Setup the Sound section of the GUI.
 * @param {GUI} gui - The lil-gui instance.
 */
export function setupSoundUI(gui) {
  const soundFolder = gui.addFolder('Sound');

  // Volume Control (Music Volume)
  // This controls both volume and enabled state (0 volume = disabled)
  const volCtrl = soundFolder
    .add(config.music, 'volume', 0, 1)
    .name('Music Volume')
    .onChange((value) => {
      musicSystem.setVolume(value);
    });

  // Hide the number display for volume and expand slider
  if (volCtrl) {
    volCtrl.domElement.classList.add('hide-value');
    volCtrl.domElement.classList.add('full-width');
  }

  // Currently Playing Display
  const currentTrackCtrl = soundFolder
    .add(config.music, 'currentTrackName')
    .name('Currently Playing')
    .listen() // Listen for changes in config
    .disable(); // Make it read-only

  if (currentTrackCtrl) {
    currentTrackCtrl.domElement.classList.add('full-width');
    // Optional: Add a specific class if we want to style the text differently
    // currentTrackCtrl.domElement.classList.add('track-display');
  }

  // Playback Controls (Previous, Play/Pause, Next, Shuffle)
  const controlsContainer = document.createElement('div');
  controlsContainer.className = 'control-buttons';
  controlsContainer.style.marginTop = '4px'; // Add a little spacing

  // Previous button
  const prevBtn = document.createElement('div');
  prevBtn.className = 'control-btn';
  prevBtn.textContent = '⏮'; // Previous
  prevBtn.title = 'Previous Track';
  prevBtn.onclick = () => {
    musicSystem.playPrevious();
  };

  // Play/Pause toggle button
  const playPauseBtn = document.createElement('div');
  playPauseBtn.className = 'control-btn';
  // Initialize based on volume (if volume > 0, music will auto-start)
  const initiallyPlaying = config.music.volume > 0;
  playPauseBtn.textContent = initiallyPlaying ? '⏸' : '▶'; // Dynamic icon
  playPauseBtn.title = initiallyPlaying ? 'Pause' : 'Play';
  playPauseBtn.onclick = () => {
    const newState = !config.music.enabled;
    musicSystem.setEnabled(newState);
    // Update button icon and title
    playPauseBtn.textContent = newState ? '⏸' : '▶';
    playPauseBtn.title = newState ? 'Pause' : 'Play';
  };

  // Next button
  const nextBtn = document.createElement('div');
  nextBtn.className = 'control-btn';
  nextBtn.textContent = '⏭'; // Next
  nextBtn.title = 'Next Track';
  nextBtn.onclick = () => {
    musicSystem.playNext();
  };

  // Shuffle button with enhanced visual state
  const shuffleBtn = document.createElement('div');
  shuffleBtn.className = 'control-btn';
  shuffleBtn.textContent = config.music.shuffle ? '🔀' : '🔀'; // Same icon, but styled differently
  shuffleBtn.title = config.music.shuffle ? 'Shuffle: ON' : 'Shuffle: OFF';
  if (config.music.shuffle) {
    shuffleBtn.classList.add('active');
  } else {
    shuffleBtn.style.opacity = '0.4'; // Make it visually "off"
  }
  shuffleBtn.onclick = () => {
    config.music.shuffle = !config.music.shuffle;
    if (config.music.shuffle) {
      shuffleBtn.classList.add('active');
      shuffleBtn.style.opacity = '1';
      shuffleBtn.title = 'Shuffle: ON';
    } else {
      shuffleBtn.classList.remove('active');
      shuffleBtn.style.opacity = '0.4';
      shuffleBtn.title = 'Shuffle: OFF';
    }
  };

  // Edit Playlist Button
  const playlistBtn = document.createElement('div');
  playlistBtn.className = 'control-btn';
  playlistBtn.textContent = 'Edit Playlist...';
  playlistBtn.title = 'Open Playlist';
  playlistBtn.style.maxWidth = 'none'; // Allow it to be wider
  playlistBtn.style.flex = '3'; // Take up more space
  playlistBtn.style.fontSize = '0.75em'; // Slightly smaller text to fit
  playlistBtn.style.whiteSpace = 'nowrap'; // Prevent wrapping
  playlistBtn.style.padding = '0 4px'; // Reduce padding
  playlistBtn.onclick = () => {
    openPlaylistModal();
  };

  // Reduce width of icon buttons to make room
  [prevBtn, playPauseBtn, nextBtn, shuffleBtn].forEach((btn) => {
    btn.style.maxWidth = '32px';
    btn.style.flex = '0 0 32px'; // Fixed width
  });

  controlsContainer.appendChild(prevBtn);
  controlsContainer.appendChild(playPauseBtn);
  controlsContainer.appendChild(nextBtn);
  controlsContainer.appendChild(shuffleBtn);
  controlsContainer.appendChild(playlistBtn);

  // Add to GUI
  // lil-gui doesn't have a direct "add DOM element" method, so we append to the folder's DOM
  // But we want it *inside* the list.
  // The standard way is to add a dummy controller and replace its DOM, or append to the container.
  // Let's try appending to the folder's widget list container.
  // soundFolder.domElement.querySelector('ul').appendChild(controlsContainer);
  // Actually, let's use a dummy object to create a slot, then replace it.
  const dummyObj = { controls: '' };
  const dummyCtrl = soundFolder.add(dummyObj, 'controls').name(' ');
  dummyCtrl.domElement.classList.add('full-width');
  // Replace the widget content
  const widget = dummyCtrl.domElement.querySelector('.widget');
  widget.innerHTML = '';
  widget.appendChild(controlsContainer);
  // Hide the name label to give full width to buttons?
  // .full-width hides the display, but we want to hide the label too or use it?
  // If we use .name(' '), it takes up space.
  // Let's try to make the controller container just hold our buttons.
  dummyCtrl.domElement.style.gridTemplateColumns = '1fr';
  dummyCtrl.domElement.querySelector('.name').style.display = 'none';

  soundFolder.close(); // Close folder by default
}

/**
 * Opens the playlist modal.
 */
function openPlaylistModal() {
  let overlay = document.querySelector('.playlist-modal-overlay');

  if (!overlay) {
    createPlaylistModal();
    overlay = document.querySelector('.playlist-modal-overlay');
  }

  // Refresh state
  updateModalState();

  overlay.classList.add('active');
}

/**
 * Creates the DOM elements for the playlist modal.
 */
function createPlaylistModal() {
  const overlay = document.createElement('div');
  overlay.className = 'playlist-modal-overlay';

  const modal = document.createElement('div');
  modal.className = 'playlist-modal';

  // Header
  const header = document.createElement('div');
  header.className = 'playlist-header';
  header.innerHTML = '<h2>Playlist</h2>';

  // Controls
  const controls = document.createElement('div');
  controls.className = 'playlist-controls';

  const selectAllBtn = document.createElement('button');
  selectAllBtn.className = 'playlist-btn';
  selectAllBtn.textContent = 'All';
  selectAllBtn.onclick = () => setAllTracks(true);

  const selectNoneBtn = document.createElement('button');
  selectNoneBtn.className = 'playlist-btn';
  selectNoneBtn.textContent = 'None';
  selectNoneBtn.onclick = () => setAllTracks(false);

  const selectLyricsBtn = document.createElement('button');
  selectLyricsBtn.className = 'playlist-btn';
  selectLyricsBtn.textContent = 'Lyrics';
  selectLyricsBtn.onclick = () => setCategoryTracks('Lyrics');

  const selectInstBtn = document.createElement('button');
  selectInstBtn.className = 'playlist-btn';
  selectInstBtn.textContent = 'Instrumental';
  selectInstBtn.onclick = () => setCategoryTracks('Instrumental');

  controls.appendChild(selectAllBtn);
  controls.appendChild(selectNoneBtn);
  controls.appendChild(selectLyricsBtn);
  controls.appendChild(selectInstBtn);

  // Tracks List
  const tracksContainer = document.createElement('div');
  tracksContainer.className = 'playlist-tracks';
  tracksContainer.id = 'playlist-tracks-container';

  // Footer
  const footer = document.createElement('div');
  footer.className = 'playlist-footer';

  const closeBtn = document.createElement('button');
  closeBtn.className = 'playlist-close-btn';
  closeBtn.textContent = 'Close';
  closeBtn.onclick = () => {
    overlay.classList.remove('active');
  };

  footer.appendChild(closeBtn);

  // Assemble
  modal.appendChild(header);
  modal.appendChild(controls);
  modal.appendChild(tracksContainer);
  modal.appendChild(footer);
  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  // Close on click outside
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('active');
    }
  });
}

/**
 * Updates the modal content with current tracks and selection state.
 */
function updateModalState() {
  const container = document.getElementById('playlist-tracks-container');
  if (!container) return;

  container.innerHTML = '';

  // Wait for tracks if not loaded
  if (!musicSystem.tracks || musicSystem.tracks.length === 0) {
    container.innerHTML = '<div style="padding:10px; color:#aaa;">Loading tracks...</div>';
    // Try to init if not already
    musicSystem.init().then(() => updateModalState());
    return;
  }

  musicSystem.tracks.forEach((track) => {
    const item = document.createElement('div');
    item.className = 'track-item';
    if (config.music.playlist.includes(track.id)) {
      item.classList.add('selected');
    }

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = config.music.playlist.includes(track.id);
    checkbox.onchange = (e) => {
      toggleTrack(track.id, e.target.checked);
      if (e.target.checked) item.classList.add('selected');
      else item.classList.remove('selected');
    };

    const label = document.createElement('span');
    label.className = 'track-label';
    // Remove [Lyrics] and [Instrumental] from display title
    label.textContent = track.title.replace(/ \[(Lyrics|Instrumental)\]/g, '');

    // Allow clicking row to toggle
    item.onclick = (e) => {
      if (e.target !== checkbox) {
        checkbox.checked = !checkbox.checked;
        checkbox.dispatchEvent(new Event('change'));
      }
    };

    item.appendChild(checkbox);
    item.appendChild(label);
    container.appendChild(item);
  });
}

/**
 * Toggles a single track's selection.
 */
function toggleTrack(trackId, selected) {
  if (selected) {
    if (!config.music.playlist.includes(trackId)) {
      config.music.playlist.push(trackId);
    }
  } else {
    config.music.playlist = config.music.playlist.filter((id) => id !== trackId);
  }
  musicSystem.setPlaylist(config.music.playlist);
}

/**
 * Selects or deselects all tracks.
 */
function setAllTracks(selected) {
  if (selected) {
    config.music.playlist = musicSystem.tracks.map((t) => t.id);
  } else {
    config.music.playlist = [];
  }
  musicSystem.setPlaylist(config.music.playlist);
  updateModalState();
}

/**
 * Selects tracks by category (Lyrics or Instrumental).
 * This is a toggle: if all in category are selected, deselect them. Otherwise select all in category.
 */
function setCategoryTracks(category) {
  const categoryTracks = musicSystem.tracks.filter((t) => t.title.includes(`[${category}]`));
  const categoryIds = categoryTracks.map((t) => t.id);

  // Check if all are currently selected
  const allSelected = categoryIds.every((id) => config.music.playlist.includes(id));

  if (allSelected) {
    // Deselect all in category
    config.music.playlist = config.music.playlist.filter((id) => !categoryIds.includes(id));
  } else {
    // Select all in category
    categoryIds.forEach((id) => {
      if (!config.music.playlist.includes(id)) {
        config.music.playlist.push(id);
      }
    });
  }

  musicSystem.setPlaylist(config.music.playlist);
  updateModalState();
}
