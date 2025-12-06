/**
 * @file WindowManager.js
 * @description Central window management system for creating and controlling floating UI windows.
 *
 * This singleton class manages all floating windows in the application, providing a unified API for
 * window creation, visibility toggling, z-index ordering, and drag behavior. Windows snap to screen edges
 * for better organization and can be dragged from anywhere except interactive controls.
 *
 * Key features:
 * - Window creation with customizable position, size, and callbacks
 * - Z-index management for focus and layering (auto-incrementing from 1000)
 * - Drag-to-move with 20px snap zones at screen edges
 * - Smart drag detection: Excludes buttons, inputs, and time controls
 * - Visibility management (show/hide/toggle)
 * - Close button with optional onClose callback
 * - transform3d positioning for GPU acceleration
 *
 * Used by Time & Speed window, Info Window, and tabbed Visual Tools window.
 * The system maintains a Map of all windows for efficient lookups and state management.
 */
export class WindowManager {
  constructor() {
    this.windows = new Map();
    this.zIndexCounter = 1000;
    this.container = document.body; // Or a specific UI container
  }

  /**
   * Creates or returns an existing window
   * @param {string} id - Unique ID for the window
   * @param {string} title - Window title
   * @param {object} options - Options: { x, y, width, height, onClose }
   */
  createWindow(id, _title, options = {}) {
    if (this.windows.has(id)) {
      return this.windows.get(id);
    }

    const win = document.createElement('div');
    win.id = id;
    win.className = 'ui-window';
    win.style.zIndex = this.zIndexCounter++;

    // Default position/size
    const x = options.x || 100;
    const y = options.y || 100;
    win.style.transform = `translate3d(${x}px, ${y}px, 0)`;

    if (options.width) win.style.width = options.width;
    if (options.height) win.style.height = options.height;

    win.innerHTML = `
      <div class="window-close">×</div>
      <div class="window-content"></div>
    `;

    this.container.appendChild(win);

    // Store reference
    const windowObj = {
      id,
      element: win,
      content: win.querySelector('.window-content'),
      closeBtn: win.querySelector('.window-close'),
      x,
      y,
      onClose: options.onClose,
    };

    this.windows.set(id, windowObj);
    this._setupInteractions(windowObj);

    return windowObj;
  }

  getWindow(id) {
    return this.windows.get(id);
  }

  toggleWindow(id) {
    const win = this.windows.get(id);
    if (win) {
      if (win.element.style.display === 'none') {
        this.showWindow(id);
      } else {
        this.hideWindow(id);
      }
    }
  }

  showWindow(id) {
    const win = this.windows.get(id);
    if (win) {
      win.element.style.display = 'flex';
      this.bringToFront(id);
    }
  }

  hideWindow(id) {
    const win = this.windows.get(id);
    if (win) {
      win.element.style.display = 'none';
      if (win.onClose) win.onClose();
    }
  }

  bringToFront(id) {
    const win = this.windows.get(id);
    if (win) {
      win.element.style.zIndex = ++this.zIndexCounter;
    }
  }

  _setupInteractions(winObj) {
    // Dragging
    let isDragging = false;
    let startX, startY;
    let initialWinX, initialWinY;

    const onMouseDown = (e) => {
      // Allow dragging from anywhere in the window EXCEPT interactive elements
      // like buttons, inputs, or the close button itself.
      if (
        e.target.closest('button') ||
        e.target.closest('input') ||
        e.target.closest('.control-btn') || // Time controls
        e.target.closest('.speedometer-interaction') || // Speedometer
        e.target === winObj.closeBtn
      ) {
        return;
      }

      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      initialWinX = winObj.x;
      initialWinY = winObj.y;
      this.bringToFront(winObj.id);
      // e.preventDefault(); // Don't prevent default globally, might block text selection if we want that?
      // But for dragging, usually we want to prevent selection.
      // Let's prevent default only if we are actually dragging?
      // Or just on mousedown to be safe.
      // e.preventDefault();
    };

    const onMouseMove = (e) => {
      if (isDragging) {
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;

        let newX = initialWinX + dx;
        let newY = initialWinY + dy;

        // Snapping Logic
        const SNAP_THRESHOLD = 20;
        const SNAP_PADDING = 20;
        const winWidth = winObj.element.offsetWidth;
        const winHeight = winObj.element.offsetHeight;
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        // Snap Left
        if (Math.abs(newX - SNAP_PADDING) < SNAP_THRESHOLD) {
          newX = SNAP_PADDING;
        }
        // Snap Right
        else if (Math.abs(newX - (screenWidth - winWidth - SNAP_PADDING)) < SNAP_THRESHOLD) {
          newX = screenWidth - winWidth - SNAP_PADDING;
        }

        // Snap Top
        if (Math.abs(newY - SNAP_PADDING) < SNAP_THRESHOLD) {
          newY = SNAP_PADDING;
        }
        // Snap Bottom
        else if (Math.abs(newY - (screenHeight - winHeight - SNAP_PADDING)) < SNAP_THRESHOLD) {
          newY = screenHeight - winHeight - SNAP_PADDING;
        }

        winObj.x = newX;
        winObj.y = newY;

        winObj.element.style.transform = `translate3d(${winObj.x}px, ${winObj.y}px, 0)`;
        e.preventDefault(); // Prevent selection while dragging
      }
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    winObj.element.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    // Close Button
    winObj.closeBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent drag start if clicking close
      this.hideWindow(winObj.id);
    });

    // Focus on click (already handled by mousedown above essentially, but let's keep explicit bringToFront)
    winObj.element.addEventListener('mousedown', () => {
      this.bringToFront(winObj.id);
    });
  }
}

export const windowManager = new WindowManager();
