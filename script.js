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
            <div style="color:#ccc;font-size:0.9rem;margin-top:12px;padding:0 10px;">
              Controls: Orbit — click and drag | Zoom — scroll wheel | Pan — right click + drag
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
          hamburger.style.display = 'none';
        }
      } else {
        if (hamburger) hamburger.style.display = 'flex';
      }
    }

    if (hamburger && mainNav) {
      hamburger.addEventListener('click', () => {
        const isOpen = mainNav.classList.toggle('open');
        hamburger.classList.toggle('active', isOpen);
      });

      const navDropdownLink = mainNav.querySelector('.nav-dropdown > a');
      const dropdownContainer = mainNav.querySelector('.nav-dropdown');

      mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          if (window.innerWidth <= 900 && link !== navDropdownLink) {
            mainNav.classList.remove('open');
            hamburger.classList.remove('active');
          }
        });
      });

      if (navDropdownLink && dropdownContainer) {
        navDropdownLink.addEventListener('click', e => {
          if (window.innerWidth <= 900 && !dropdownContainer.classList.contains('open')) {
            e.preventDefault();
            dropdownContainer.classList.add('open');
          }
        });
      }

      window.addEventListener('resize', handleResize);
      handleResize();
    }
});
