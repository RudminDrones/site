// This function can be called at any time to apply the theme
function applyTheme(theme) {
    const root = document.documentElement;
    const toggleIcon = document.querySelector('#theme-toggle .material-symbols-outlined');
    const taglineLogo = document.getElementById('tagline-logo'); // Only exists on homepage

    // Set the correct theme class on the body
    if (theme === 'light') {
        root.classList.add('light-mode');
    } else {
        root.classList.remove('light-mode');
    }

    // Update the toggle icon
    if (toggleIcon) {
        toggleIcon.innerText = theme === 'light' ? 'dark_mode' : 'light_mode';
    }

    // Update the homepage tagline logo if it exists
    if (taglineLogo) {
        taglineLogo.src = theme === 'light' ? 'logo_black.png' : 'logo_white.png';
    }
}

// --- SCRIPT EXECUTION STARTS HERE ---

// 1. Immediately apply the theme when the script is loaded
// This ensures there's no "flash" of the wrong theme on page load.
const savedTheme = localStorage.getItem('theme') || 'dark';
applyTheme(savedTheme);


// 2. Wait for the full DOM to be ready before attaching event listeners and doing complex DOM manipulation
document.addEventListener("DOMContentLoaded", function() {

    // --- Theme Toggler Click Listener ---
    const themeToggleButton = document.getElementById('theme-toggle');
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            // Check the current theme from the root element and toggle it
            const newTheme = document.documentElement.classList.contains('light-mode') ? 'dark' : 'light';
            // Apply the new theme visually
            applyTheme(newTheme);
            // Save the new theme preference for other pages
            localStorage.setItem('theme', newTheme);
        });
    }

    // --- Reusable 3D Model Embed Loader ---
    const embedTemplate = (id, posterUrl, viewerUrl) => `
      <div style="position:relative;width:100%;height:100%;border:1px solid var(--surface-color);background:#111;overflow:hidden;box-sizing:border-box;">
        <div id="cover-${id}" style="position:absolute;top:0;left:0;width:100%;height:100%;background:#111;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:2;">
          <img src="${posterUrl}" alt="Cover Image" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;opacity:0.25;z-index:-1;">
          <div style="z-index:3;text-align:center;">
            <button class="embed-load-btn" style="margin:6px;padding:10px 20px;font-size:1rem;border:none;background:#0d6efd;color:#fff;border-radius:10px;box-shadow:0 4px 12px rgba(0,0,0,0.5);cursor:pointer;">
              ▶ Load 3D model
            </button><br>
            <a href="${viewerUrl}" target="_blank" class="embed-newtab-btn" style="display:inline-block;margin:6px;padding:10px 20px;font-size:1rem;background:#444;color:#eee;border-radius:10px;text-decoration:none;box-shadow:0 4px 12px rgba(0,0,0,0.5);">
              ↗ Open in New Tab
            </a>
            <div style="margin-top:20px;padding:0 20px;display:flex;justify-content:center;">
              <svg viewBox="0 0 300 80" style="width:100%;max-width:450px;height:auto;">
                <defs>
                  <symbol id="mouse" viewBox="0 0 24 36">
                    <path d="M12 0C5.4 0 0 5.4 0 12v12c0 6.6 5.4 12 12 12s12-5.4 12-12V12c0-6.6-5.4-12-12-12zm8 24c0 4.4-3.6 8-8 8s-8-3.6-8-8V12c0-4.4 3.6-8 8-8s8 3.6 8 8v12z" fill="#999"/>
                    <circle cx="12" cy="10" r="2" fill="#999"/>
                  </symbol>
                  <symbol id="hand" viewBox="0 0 30 30">
                    <path d="M15 3c-1.1 0-2 .9-2 2v8l-1.5-1.5c-.8-.8-2-.8-2.8 0s-.8 2 0 2.8l5.7 5.7c.4.4.9.6 1.4.6h7.7c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2h-1V7c0-1.1-.9-2-2-2s-2 .9-2 2v2h-1V5c0-1.1-.9-2-2-2z" fill="#999"/>
                  </symbol>
                  <symbol id="hand-pan" viewBox="0 0 36 36">
                    <path d="M18 4c-1.1 0-2 .9-2 2v7l-2-2V6c0-1.1-.9-2-2-2s-2 .9-2 2v8l-1.3-1.3c-.8-.8-2-.8-2.8 0s-.8 2 0 2.8l7.5 7.5c.4.4.9.6 1.4.6h9.7c1.1 0 2-.9 2-2V12c0-1.1-.9-2-2-2h-1V8c0-1.1-.9-2-2-2s-2 .9-2 2v2h-1V6c0-1.1-.9-2-2-2z" fill="#999"/>
                    <path d="M20 14l4 4m-4 0l4-4" stroke="#999" stroke-width="2" fill="none"/>
                  </symbol>
                </defs>
                
                <!-- Orbit Section -->
                <g transform="translate(35, 40)">
                  <!-- Red highlight behind mouse -->
                  <path d="M-8 -8 L-2 -8 L0 -4 L2 -8 L8 -8 L8 8 L-8 8 Z" fill="#ff1414" opacity="0.3"/>
                  <!-- Mouse -->
                  <use href="#mouse" x="-12" y="-18" width="24" height="36"/>
                  <!-- Home icon -->
                  <path d="M-8 12 L0 4 L8 12 M-6 12 V18 H6 V12" stroke="#999" stroke-width="2" fill="none"/>
                  <!-- Orbit arrows -->
                  <path d="M-4 -25 Q-15 -25 -15 -15 Q-15 -5 -5 -5 M4 -25 Q15 -25 15 -15 Q15 -5 5 -5" stroke="#999" stroke-width="2" fill="none" marker-end="url(#arrowhead)"/>
                </g>
                
                <!-- Divider line -->
                <line x1="85" y1="10" x2="85" y2="70" stroke="#666" stroke-width="1"/>
                
                <!-- Zoom Section -->
                <g transform="translate(135, 40)">
                  <!-- Mouse -->
                  <use href="#mouse" x="-12" y="-18" width="24" height="36"/>
                  <!-- Red wheel highlight -->
                  <rect x="-4" y="-10" width="8" height="6" fill="#ff1414" rx="3"/>
                  <!-- Home icon -->
                  <path d="M-8 12 L0 4 L8 12 M-6 12 V18 H6 V12" stroke="#999" stroke-width="2" fill="none"/>
                  <!-- Zoom arrows -->
                  <path d="M-20 0 L-14 0 M-17 -3 L-17 3 M14 0 L20 0" stroke="#999" stroke-width="3"/>
                </g>
                
                <!-- Divider line -->
                <line x1="185" y1="10" x2="185" y2="70" stroke="#666" stroke-width="1"/>
                
                <!-- Pan Section -->
                <g transform="translate(235, 40)">
                  <!-- Red highlight behind mouse -->
                  <path d="M-8 -8 L8 -8 L8 8 L2 8 L0 4 L-2 8 L-8 8 Z" fill="#ff1414" opacity="0.3"/>
                  <!-- Mouse -->
                  <use href="#mouse" x="-12" y="-18" width="24" height="36"/>
                  <!-- Two-finger hand with pan arrows -->
                  <use href="#hand-pan" x="-18" y="-18" width="36" height="36"/>
                  <!-- Home icon -->
                  <path d="M-8 12 L0 4 L8 12 M-6 12 V18 H6 V12" stroke="#999" stroke-width="2" fill="none"/>
                  <!-- Zoom in icon -->
                  <circle cx="20" cy="-8" r="8" stroke="#999" stroke-width="2" fill="none"/>
                  <path d="M16 -8 L24 -8 M20 -12 L20 -4" stroke="#999" stroke-width="2"/>
                  <path d="M26 -2 L30 2" stroke="#999" stroke-width="2"/>
                </g>
                
                <!-- Arrow marker -->
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#999"/>
                  </marker>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <iframe id="iframe-${id}" style="width:100%;height:100%;border:none;background:#111;display:block;" loading="lazy" allow="fullscreen"></iframe>
      </div>
    `;

    const embedPlaceholders = document.querySelectorAll('.model-embed-placeholder');
    embedPlaceholders.forEach(placeholder => {
        const id = placeholder.dataset.id;
        const poster = placeholder.dataset.poster;
        const viewer = placeholder.dataset.viewer;
        placeholder.innerHTML = embedTemplate(id, poster, viewer);

        const loadBtn = placeholder.querySelector('.embed-load-btn');
        const newTabBtn = placeholder.querySelector('.embed-newtab-btn');
        if (window.innerWidth <= 768) {
            if (loadBtn) loadBtn.style.display = 'none';
            if (newTabBtn) newTabBtn.innerHTML = '▶ Open';
        } else {
            if (loadBtn) {
                loadBtn.addEventListener('click', () => {
                    document.getElementById(`cover-${id}`).style.display = 'none';
                    document.getElementById(`iframe-${id}`).src = viewer;
                });
            }
        }
    });

    // --- Google Form Iframe Resizer ---
    const googleFormFrame = document.getElementById('google-form-iframe');
    if (googleFormFrame) {
        googleFormFrame.onload = function() {
            setTimeout(() => {
                try {
                    const body = googleFormFrame.contentWindow.document.body;
                    const html = googleFormFrame.contentWindow.document.documentElement;
                    const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
                    googleFormFrame.style.height = height + 'px';
                } catch (e) {
                    console.error("Could not resize Google Form iframe due to cross-origin restrictions.", e);
                }
            }, 500);
        };
    }

    // --- Hamburger Menu Toggle ---
    const hamburger = document.getElementById('hamburger-menu');
    const mainNav = document.querySelector('.main-nav');

    function handleResize() {
      if (window.innerWidth > 900) {
        mainNav.classList.remove('open');
        if (hamburger) {
          hamburger.classList.remove('active');
        }
      }
    }

    if (hamburger && mainNav) {
      hamburger.addEventListener('click', () => {
        const isOpen = mainNav.classList.toggle('open');
        hamburger.classList.toggle('active', isOpen);
      });

      mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          if (window.innerWidth <= 900) {
            mainNav.classList.remove('open');
            hamburger.classList.remove('active');
          }
        });
      });

      window.addEventListener('resize', handleResize);
      handleResize();
    }
      // On small screens the dropdown links are always visible, so the
      // "3D Visualization" link should simply navigate without any extra
      // toggle behavior. The previous handler intercepted the click and
      // prevented navigation which broke the link on mobile.
});