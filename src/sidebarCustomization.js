// Client-side customization for sidebar footer

const createSidebarFooter = () => {
  const footer = document.createElement('div');
  footer.className = 'qb-sidebar-footer';
  footer.innerHTML = `
    <a href="https://app.qback.au" class="qb-footer-link" target="_blank" rel="noopener noreferrer">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <line x1="3" y1="9" x2="21" y2="9"/>
        <line x1="9" y1="21" x2="9" y2="9"/>
      </svg>
      <span>Quarterback</span>
      <svg class="qb-external-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
        <polyline points="15 3 21 3 21 9"/>
        <line x1="10" y1="14" x2="21" y2="3"/>
      </svg>
    </a>
    <button type="button" class="qb-footer-link submit-help-request">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"/>
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
        <line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
      <span>Support</span>
    </button>
  `;
  return footer;
};

const initSidebar = () => {
  const sidebar = document.querySelector('.theme-doc-sidebar-container');
  if (!sidebar) {
    return false;
  }

  // Find the inner wrapper div
  const innerWrapper = sidebar.querySelector(':scope > div');
  if (!innerWrapper) {
    return false;
  }

  // Add footer if not exists
  if (!innerWrapper.querySelector('.qb-sidebar-footer')) {
    const footer = createSidebarFooter();
    innerWrapper.appendChild(footer);
  }

  return true;
};

// Run initialization with retries
const runWithRetries = () => {
  let attempts = 0;
  const maxAttempts = 20;

  const tryInit = () => {
    attempts++;
    const sidebarSuccess = initSidebar();
    if (!sidebarSuccess && attempts < maxAttempts) {
      setTimeout(tryInit, 250);
    }
  };

  tryInit();
};

// Initialize on module load
if (typeof window !== 'undefined') {
  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runWithRetries);
  } else {
    runWithRetries();
  }

  // Also run on history changes (SPA navigation)
  let lastPath = window.location.pathname;

  const checkForNavigation = () => {
    if (window.location.pathname !== lastPath) {
      lastPath = window.location.pathname;
      runWithRetries();
    }
  };

  // Use MutationObserver to detect DOM changes
  const observer = new MutationObserver((mutations) => {
    checkForNavigation();
    // Also check if sidebar exists but doesn't have our elements
    const sidebar = document.querySelector('.theme-doc-sidebar-container');
    const innerWrapper = sidebar?.querySelector(':scope > div');
    if (innerWrapper && !innerWrapper.querySelector('.qb-sidebar-footer')) {
      initSidebar();
    }
  });

  // Start observing when DOM is ready
  const startObserver = () => {
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startObserver);
  } else {
    startObserver();
  }
}

// Export empty default for Docusaurus
export default function onClientEntry() {}
