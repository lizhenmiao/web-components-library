class ModalBox extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.isOpen = false;

    // Default configuration
    this._config = {
      showHeader: true,
      showFooter: true,
      showDefaultFooter: true,
      showCancelButton: true,
      showConfirmButton: true,
      closeOnEsc: true,
      closeOnOverlay: true,
      showCloseButton: true,
      animation: 'fade', // Default animation type
      confirmText: 'Confirm',
      cancelText: 'Cancel'
    };

    this.render();
    this.setupEvents();
  }

  connectedCallback() {
    this._updateConfigFromAttributes();

    if (this.getAttribute('title')) {
      this.setTitle(this.getAttribute('title'));
    }

    if (this.hasAttribute('open')) {
      this.open();
    }

    // Check if footer slot has content
    this._checkFooterSlot();

    this._applyConfig();
  }

  static get observedAttributes() {
    return [
      'title',
      'open',
      'show-header',
      'show-footer',
      'show-default-footer',
      'show-cancel-button',
      'show-confirm-button',
      'close-on-esc',
      'close-on-overlay',
      'show-close-button',
      'animation',
      'confirm-text',
      'cancel-text'
    ];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'title') {
      this.setTitle(newValue);
    } else if (name === 'open') {
      if (newValue !== null) {
        this.open();
      } else {
        this.close();
      }
    } else {
      this._updateConfigFromAttributes();
      this._applyConfig();
    }
  }

  _updateConfigFromAttributes() {
    // Update configuration from attributes
    this._config.showHeader = this.hasAttribute('show-header')
      ? this.getAttribute('show-header') !== 'false'
      : this._config.showHeader;

    this._config.showFooter = this.hasAttribute('show-footer')
      ? this.getAttribute('show-footer') !== 'false'
      : this._config.showFooter;

    this._config.showDefaultFooter = this.hasAttribute('show-default-footer')
      ? this.getAttribute('show-default-footer') !== 'false'
      : this._config.showDefaultFooter;

    this._config.showCancelButton = this.hasAttribute('show-cancel-button')
      ? this.getAttribute('show-cancel-button') !== 'false'
      : this._config.showCancelButton;

    this._config.showConfirmButton = this.hasAttribute('show-confirm-button')
      ? this.getAttribute('show-confirm-button') !== 'false'
      : this._config.showConfirmButton;

    this._config.closeOnEsc = this.hasAttribute('close-on-esc')
      ? this.getAttribute('close-on-esc') !== 'false'
      : this._config.closeOnEsc;

    this._config.closeOnOverlay = this.hasAttribute('close-on-overlay')
      ? this.getAttribute('close-on-overlay') !== 'false'
      : this._config.closeOnOverlay;

    this._config.showCloseButton = this.hasAttribute('show-close-button')
      ? this.getAttribute('show-close-button') !== 'false'
      : this._config.showCloseButton;

    if (this.hasAttribute('animation')) {
      this._config.animation = this.getAttribute('animation');
    }

    if (this.hasAttribute('confirm-text')) {
      this._config.confirmText = this.getAttribute('confirm-text');
    }

    if (this.hasAttribute('cancel-text')) {
      this._config.cancelText = this.getAttribute('cancel-text');
    }
  }

  _checkFooterSlot() {
    // Check if footer slot has content
    const footerSlot = this.shadowRoot.querySelector('slot[name="footer"]');

    footerSlot.addEventListener('slotchange', () => {
      const hasFooterContent = footerSlot.assignedNodes().length > 0;

      if (hasFooterContent) {
        // If custom footer exists, hide default footer
        const defaultFooterContent = this.shadowRoot.querySelector('.default-footer-content');
        if (defaultFooterContent) {
          defaultFooterContent.style.display = 'none';
        }
      } else {
        // If no custom footer, show default footer (if enabled)
        const defaultFooterContent = this.shadowRoot.querySelector('.default-footer-content');
        if (defaultFooterContent) {
          defaultFooterContent.style.display = this._config.showDefaultFooter ? 'flex' : 'none';
        }
      }
    });
  }

  _applyConfig() {
    // Apply configuration to DOM
    const header = this.shadowRoot.querySelector('.modal-header');
    const footer = this.shadowRoot.querySelector('.modal-footer');
    const closeButton = this.shadowRoot.querySelector('.modal-close');
    const defaultFooterContent = this.shadowRoot.querySelector('.default-footer-content');
    const cancelButton = this.shadowRoot.querySelector('.cancel-button');
    const confirmButton = this.shadowRoot.querySelector('.confirm-button');
    const container = this.shadowRoot.querySelector('.modal-container');

    if (header) {
      header.style.display = this._config.showHeader ? 'flex' : 'none';
    }

    if (footer) {
      // Show footer if showFooter is true AND (using custom footer OR showDefaultFooter is true AND at least one button is shown)
      const showDefaultFooter = this._config.showDefaultFooter &&
                               (this._config.showCancelButton || this._config.showConfirmButton);

      // Check if custom footer exists
      const footerSlot = this.shadowRoot.querySelector('slot[name="footer"]');
      const hasCustomFooter = footerSlot && footerSlot.assignedNodes().length > 0;

      // Show footer if either default footer or custom footer should be shown
      footer.style.display = this._config.showFooter && (hasCustomFooter || showDefaultFooter) ? 'flex' : 'none';
    }

    if (closeButton) {
      closeButton.style.display = this._config.showCloseButton ? 'flex' : 'none';
    }

    if (defaultFooterContent) {
      // Show default footer content if showDefaultFooter is true AND no custom footer
      const footerSlot = this.shadowRoot.querySelector('slot[name="footer"]');
      const hasCustomFooter = footerSlot && footerSlot.assignedNodes().length > 0;

      defaultFooterContent.style.display = this._config.showDefaultFooter && !hasCustomFooter ? 'flex' : 'none';
    }

    if (cancelButton) {
      cancelButton.style.display = this._config.showCancelButton ? 'inline-block' : 'none';
      cancelButton.textContent = this._config.cancelText;
    }

    if (confirmButton) {
      confirmButton.style.display = this._config.showConfirmButton ? 'inline-block' : 'none';
      confirmButton.textContent = this._config.confirmText;
    }

    // Set animation class
    if (container) {
      // Remove all animation classes first
      container.classList.remove('animation-fade', 'animation-scale', 'animation-slide-down',
                              'animation-slide-up', 'animation-slide-left', 'animation-slide-right',
                              'animation-rotate', 'animation-bounce');

      // Add the selected animation class
      container.classList.add(`animation-${this._config.animation}`);
    }
  }

  render() {
    const style = document.createElement('style');
    style.textContent = `
      :host {
        --primary-color: #5c3197;
        --background-color: #f4f4f5;
        --text-color: #2a2a2a;
        --border-color: #e4e4e7;
        --button-hover: #ebebf0;
        --primary-button-hover: #4a2578;
        --animation-duration: 0.3s;
      }

      .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        opacity: 0;
        visibility: hidden;
        transition: opacity var(--animation-duration), visibility var(--animation-duration);
      }

      .modal-overlay.active {
        opacity: 1;
        visibility: visible;
      }

      .modal-container {
        background-color: var(--background-color);
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        display: flex;
        flex-direction: column;
        max-width: 90vw;
        max-height: 90vh;
        width: 500px;
        color: var(--text-color);
        transform-origin: center center;
        position: relative;
      }

      /* Animation: Fade */
      .animation-fade {
        opacity: 0;
        transition: opacity var(--animation-duration);
      }
      .modal-overlay.active .animation-fade {
        opacity: 1;
      }

      /* Animation: Scale */
      .animation-scale {
        transform: scale(0.7);
        opacity: 0;
        transition: transform var(--animation-duration), opacity var(--animation-duration);
      }
      .modal-overlay.active .animation-scale {
        transform: scale(1);
        opacity: 1;
      }

      /* Animation: Slide Down */
      .animation-slide-down {
        transform: translateY(-50px);
        opacity: 0;
        transition: transform var(--animation-duration), opacity var(--animation-duration);
      }
      .modal-overlay.active .animation-slide-down {
        transform: translateY(0);
        opacity: 1;
      }

      /* Animation: Slide Up */
      .animation-slide-up {
        transform: translateY(50px);
        opacity: 0;
        transition: transform var(--animation-duration), opacity var(--animation-duration);
      }
      .modal-overlay.active .animation-slide-up {
        transform: translateY(0);
        opacity: 1;
      }

      /* Animation: Slide Right */
      .animation-slide-right {
        transform: translateX(-50px);
        opacity: 0;
        transition: transform var(--animation-duration), opacity var(--animation-duration);
      }
      .modal-overlay.active .animation-slide-right {
        transform: translateX(0);
        opacity: 1;
      }

      /* Animation: Slide Left */
      .animation-slide-left {
        transform: translateX(50px);
        opacity: 0;
        transition: transform var(--animation-duration), opacity var(--animation-duration);
      }
      .modal-overlay.active .animation-slide-left {
        transform: translateX(0);
        opacity: 1;
      }

      /* Animation: Rotate */
      .animation-rotate {
        transform: rotate(-10deg) scale(0.7);
        opacity: 0;
        transition: transform var(--animation-duration), opacity var(--animation-duration);
      }
      .modal-overlay.active .animation-rotate {
        transform: rotate(0deg) scale(1);
        opacity: 1;
      }

      /* Animation: Bounce */
      .animation-bounce {
        transform: scale(0.4);
        opacity: 0;
        transition: transform var(--animation-duration) cubic-bezier(0.175, 0.885, 0.32, 1.275),
                    opacity var(--animation-duration);
      }
      .modal-overlay.active .animation-bounce {
        transform: scale(1);
        opacity: 1;
      }

      .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 20px;
        border-bottom: 1px solid var(--border-color);
      }

      .modal-title {
        margin: 0;
        font-size: 18px;
        font-weight: 600;
      }

      .modal-close {
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        color: var(--text-color);
        padding: 0;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: background-color 0.2s;
      }

      .modal-close:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }

      .modal-content {
        padding: 20px;
        overflow-y: auto;
        flex: 1;
        min-height: 50px;
        max-height: calc(90vh - 120px);
      }

      .modal-footer {
        padding: 15px 20px;
        border-top: 1px solid var(--border-color);
        display: flex;
        justify-content: flex-end;
      }

      .default-footer-content {
        display: flex;
        justify-content: flex-end;
        width: 100%;
      }

      .modal-button {
        padding: 8px 16px;
        border-radius: 4px;
        font-size: 14px;
        cursor: pointer;
        transition: background-color 0.2s;
        border: none;
      }

      .cancel-button {
        background-color: var(--background-color);
        color: var(--text-color);
        border: 1px solid var(--border-color);
        margin-right: 10px;
      }

      .cancel-button:hover {
        background-color: var(--button-hover);
      }

      .confirm-button {
        background-color: var(--primary-color);
        color: white;
      }

      .confirm-button:hover {
        background-color: var(--primary-button-hover);
      }

      /* Style adjustments when header is hidden */
      .modal-header[style*="none"] + .modal-content {
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
      }

      /* Style adjustments when footer is hidden */
      .modal-content + .modal-footer[style*="none"] {
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
      }

      @media (max-width: 768px) {
        .modal-container {
          width: 95vw;
          max-height: 95vh;
        }

        .modal-content {
          max-height: calc(95vh - 120px);
        }
      }
    `;

    this.shadowRoot.innerHTML = `
      ${style.outerHTML}
      <div class="modal-overlay">
        <div class="modal-container">
          <div class="modal-header">
            <h2 class="modal-title"></h2>
            <button class="modal-close">&times;</button>
          </div>
          <div class="modal-content">
            <slot></slot>
          </div>
          <div class="modal-footer">
            <div class="default-footer-content">
              <button class="modal-button cancel-button">Cancel</button>
              <button class="modal-button confirm-button">Confirm</button>
            </div>
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    `;
  }

  setupEvents() {
    const closeButton = this.shadowRoot.querySelector('.modal-close');
    closeButton.addEventListener('click', () => this.close());

    const overlay = this.shadowRoot.querySelector('.modal-overlay');
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay && this._config.closeOnOverlay) {
        this.close();
      }
    });

    const cancelButton = this.shadowRoot.querySelector('.cancel-button');
    cancelButton.addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('cancel'));
      this.close();
    });

    const confirmButton = this.shadowRoot.querySelector('.confirm-button');
    confirmButton.addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('confirm'));
      this.close();
    });

    // Use arrow function to maintain 'this' reference
    this._handleKeyDown = (e) => {
      if (e.key === 'Escape' && this.isOpen && this._config.closeOnEsc) {
        this.close();
      }
    };

    document.addEventListener('keydown', this._handleKeyDown);
  }

  disconnectedCallback() {
    // Remove event listeners to prevent memory leaks
    document.removeEventListener('keydown', this._handleKeyDown);
  }

  open() {
    const overlay = this.shadowRoot.querySelector('.modal-overlay');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    this.isOpen = true;
    this.dispatchEvent(new CustomEvent('modal-open'));
  }

  close() {
    const overlay = this.shadowRoot.querySelector('.modal-overlay');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    this.isOpen = false;
    this.dispatchEvent(new CustomEvent('modal-close'));
  }

  setTitle(title) {
    const titleElement = this.shadowRoot.querySelector('.modal-title');
    titleElement.textContent = title;
  }

  // Configuration API
  configure(options) {
    if (options) {
      if (typeof options.showHeader !== 'undefined') {
        this._config.showHeader = Boolean(options.showHeader);
      }
      if (typeof options.showFooter !== 'undefined') {
        this._config.showFooter = Boolean(options.showFooter);
      }
      if (typeof options.showDefaultFooter !== 'undefined') {
        this._config.showDefaultFooter = Boolean(options.showDefaultFooter);
      }
      if (typeof options.showCancelButton !== 'undefined') {
        this._config.showCancelButton = Boolean(options.showCancelButton);
      }
      if (typeof options.showConfirmButton !== 'undefined') {
        this._config.showConfirmButton = Boolean(options.showConfirmButton);
      }
      if (typeof options.closeOnEsc !== 'undefined') {
        this._config.closeOnEsc = Boolean(options.closeOnEsc);
      }
      if (typeof options.closeOnOverlay !== 'undefined') {
        this._config.closeOnOverlay = Boolean(options.closeOnOverlay);
      }
      if (typeof options.showCloseButton !== 'undefined') {
        this._config.showCloseButton = Boolean(options.showCloseButton);
      }
      if (typeof options.animation !== 'undefined') {
        this._config.animation = options.animation;
      }
      if (typeof options.confirmText !== 'undefined') {
        this._config.confirmText = options.confirmText;
      }
      if (typeof options.cancelText !== 'undefined') {
        this._config.cancelText = options.cancelText;
      }
      this._applyConfig();
    }
    return this;
  }
}

customElements.define('modal-box', ModalBox);