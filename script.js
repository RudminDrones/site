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
              <svg viewBox="0 0 85 35" style="width:100%;max-width:450px;height:auto;">
                <g>
                  <!-- Left section - Orbit -->
                  <g transform="translate(0, -5)">
                    <!-- Red highlight behind mouse (moved up and made bigger) -->
                    <path style="fill:#ff1414;fill-opacity:0.3;stroke:none" d="m 9.5,22.5 v -2.5 l 1.5,-2 2,-1.5 3,-0.5 -0.5,7.5 z"/>
                    <!-- Mouse for left click -->
                    <g style="fill:#999999" transform="matrix(0.00661458,0,0,0.00661458,9.3150192,27.610484)">
                      <path d="m 480,-80 q -116,0 -198,-82 -82,-82 -82,-198 v -240 q 0,-116 82,-198 82,-82 198,-82 116,0 198,82 82,82 82,198 v 240 q 0,116 -82,198 -82,82 -198,82 z m 40,-520 h 160 q 0,-72 -45.5,-127 Q 589,-782 520,-796 Z m -240,0 h 160 v -196 q -69,14 -114.5,69 -45.5,55 -45.5,127 z m 200,440 q 83,0 141.5,-58.5 Q 680,-277 680,-360 V -520 H 280 v 160 q 0,83 58.5,141.5 Q 397,-160 480,-160 Z"/>
                    </g>
                    <!-- Hand/finger icon -->
                    <g style="fill:#999999" transform="matrix(0.00661458,0,0,0.00661458,21.499699,27.669354)">
                      <path d="m 473,-80 c -16,0 -31.33333,-3 -46,-9 -14.66667,-6 -27.66667,-14.66667 -39,-26 l -204,-205 30,-31 c 10.66667,-10.66667 23.16667,-17.83333 37.5,-21.5 14.33333,-3.66667 28.5,-3.5 42.5,0.5 l 66,19 v -327 c 0,-11.33333 3.83333,-20.83333 11.5,-28.5 7.66667,-7.66667 17.16667,-11.5 28.5,-11.5 11.33333,0 20.83333,3.83333 28.5,11.5 7.66667,7.66667 11.5,17.16667 11.5,28.5 v 433 l -97,-27 102,102 c 3.33333,3.33333 7.5,6.16667 12.5,8.5 5,2.33333 10.16667,3.5 15.5,3.5 h 167 c 22,0 40.83333,-7.83333 56.5,-23.5 15.66667,-15.66667 23.5,-34.5 23.5,-56.5 v -160 c 0,-11.33333 3.83333,-20.83333 11.5,-28.5 7.66667,-7.66667 17.16667,-11.5 28.5,-11.5 11.33333,0 20.83333,3.83333 28.5,11.5 7.66667,7.66667 11.5,17.16667 11.5,28.5 v 160 c 0,44 -15.66667,81.66667 -47,113 -31.33333,31.333333 -69,47 -113,47 z m 7,-280 v -160 c 0,-11.33333 3.83333,-20.83333 11.5,-28.5 7.66667,-7.66667 17.16667,-11.5 28.5,-11.5 11.33333,0 20.83333,3.83333 28.5,11.5 7.66667,7.66667 11.5,17.16667 11.5,28.5 v 160 z m 120,0 v -120 c 0,-11.33333 3.83333,-20.83333 11.5,-28.5 7.66667,-7.66667 17.16667,-11.5 28.5,-11.5 11.33333,0 20.83333,3.83333 28.5,11.5 7.66667,7.66667 11.5,17.16667 11.5,28.5 v 120 z"/>
                    </g>
                    <!-- Orbit arrows -->
                    <g style="fill:#999999" transform="matrix(0.00661458,0,0,0.00661458,14.251042,19.979664)">
                      <path d="m 360,-160 -56,-56 70,-72 Q 246,-305 163,-358 80,-411 80,-480 80,-563 195.5,-621.5 311,-680 480,-680 q 169,0 284.5,58.5 Q 880,-563 880,-480 q 0,62 -66.5,111 -66.5,49 -173.5,73 v -82 q 77,-20 118.5,-49.5 41.5,-29.5 41.5,-52.5 0,-32 -85.5,-76 -85.5,-44 -234.5,-44 -149,0 -234.5,44 -85.5,44 -85.5,76 0,24 51,57.5 51,33.5 145,50.5 l -52,-52 56,-56 160,160 z"/>
                    </g>
                    <!-- Home icon -->
                    <path d="m 15.841302,13.639294 h 0.79375 v -1.5875 h 1.5875 v 1.5875 h 0.79375 v -2.38124 l -1.5875,-1.19063 -1.5875,1.19063 z m -0.52917,0.52917 v -3.175 l 2.11667,-1.5875 2.11666,1.5875 v 3.175 h -1.85208 v -1.5875 h -0.52916 v 1.5875 z" style="fill:#999999"/>
                    <!-- Arrows -->
                    <g style="fill:#999999" transform="matrix(0.00661458,0,0,0.00661458,6.7626642,27.557544)">
                      <path d="M 400,-80 0,-480 l 400,-400 71,71 -329,329 329,329 z"/>
                    </g>
                    <g style="fill:#999999" transform="matrix(0.00661458,0,0,0.00661458,13.116808,27.557544)">
                      <path d="m 321,-80 -71,-71 329,-329 -329,-329 71,-71 400,400 z"/>
                    </g>
                  </g>
                  
                  <!-- Divider line 1 -->
                  <line x1="31.5" y1="2" x2="31.5" y2="30" stroke="#666" stroke-width="0.5"/>
                  
                  <!-- Middle section - Zoom -->
                  <g transform="translate(31, -5)">
                    <!-- Mouse with scroll wheel highlight -->
                    <g style="fill:#999999" transform="matrix(0.00661458,0,0,0.00661458,6.679492,27.649184)">
                      <path d="m 480,-80 q -116,0 -198,-82 -82,-82 -82,-198 v -240 q 0,-116 82,-198 82,-82 198,-82 116,0 198,82 82,82 82,198 v 240 q 0,116 -82,198 -82,82 -198,82 z m 40,-520 h 160 q 0,-72 -45.5,-127 Q 589,-782 520,-796 Z m -240,0 h 160 v -196 q -69,14 -114.5,69 -45.5,55 -45.5,127 z m 200,440 q 83,0 141.5,-58.5 Q 680,-277 680,-360 V -520 H 280 v 160 q 0,83 58.5,141.5 Q 397,-160 480,-160 Z"/>
                    </g>
                    <!-- Red scroll wheel -->
                    <circle cx="11.5" cy="22.3" r="1" fill="#ff1414" stroke="#d21e07" stroke-width="0.2"/>
                    <!-- Home icon -->
                    <path d="m 12.425993,13.647974 h 0.79375 v -1.5875 h 1.5875 v 1.5875 h 0.79375 v -2.38124 l -1.5875,-1.19063 -1.5875,1.19063 z m -0.52917,0.52917 v -3.175 l 2.11667,-1.5875 2.11666,1.5875 v 3.175 h -1.85208 v -1.5875 h -0.52916 v 1.5875 z" style="fill:#999999"/>
                    <!-- Zoom arrows -->
                    <g style="fill:#999999" transform="matrix(0.00661458,0,0,0.00661458,10.811519,20.034104)">
                      <path d="m 680,-280 -56,-56 103,-104 H 520 v -80 h 207 l -103,-104 56,-56 200,200 z m -400,0 -200,-200 200,-200 56,56 -103,104 h 207 v 80 H 233 l 103,104 z"/>
                    </g>
                    <!-- Navigation arrows -->
                    <g style="fill:#999999" transform="matrix(0.00661458,0,0,0.00661458,4.127137,27.596244)">
                      <path d="M 400,-80 0,-480 l 400,-400 71,71 -329,329 329,329 z"/>
                    </g>
                    <g style="fill:#999999" transform="matrix(0.00661458,0,0,0.00661458,10.481281,27.596244)">
                      <path d="m 321,-80 -71,-71 329,-329 -329,-329 71,-71 400,400 z"/>
                    </g>
                  </g>
                  
                  <!-- Divider line 2 -->
                  <line x1="58.5" y1="2" x2="58.5" y2="30" stroke="#666" stroke-width="0.5"/>
                  
                  <!-- Right section - Pan -->
                  <g transform="translate(58, -5)">
                    <!-- Red highlight behind mouse (positioned first so it's behind) -->
                    <path style="fill:#ff1414;fill-opacity:0.3;stroke:none" d="m 6,23.5 v -2.5 l -1,-2 -1.5,-1.5 -2,-0.5 0.5,7 z" transform="translate(37,-0.5)"/>
                    <!-- Mouse for right click -->
                    <g style="fill:#999999" transform="matrix(0.00661458,0,0,0.00661458,5.14279,27.699324)">
                      <path d="m 480,-80 q -116,0 -198,-82 -82,-82 -82,-198 v -240 q 0,-116 82,-198 82,-82 198,-82 116,0 198,82 82,82 82,198 v 240 q 0,116 -82,198 -82,82 -198,82 z m 40,-520 h 160 q 0,-72 -45.5,-127 Q 589,-782 520,-796 Z m -240,0 h 160 v -196 q -69,14 -114.5,69 -45.5,55 -45.5,127 z m 200,440 q 83,0 141.5,-58.5 Q 680,-277 680,-360 V -520 H 280 v 160 q 0,83 58.5,141.5 Q 397,-160 480,-160 Z"/>
                    </g>
                    <!-- Two-finger hand -->
                    <g style="fill:#999999" transform="matrix(0.00661458,0,0,0.00661458,14.13882,27.569734)">
                      <path d="m 593,-40 c -16,0 -31.33333,-3 -46,-9 -14.66667,-6 -27.66667,-14.666667 -39,-26 l -204,-205 30,-31 c 10.66667,-10.66667 23.16667,-17.83333 37.5,-21.5 14.33333,-3.66667 28.5,-3.5 42.5,0.5 l 66,19 v -327 c 0,-11.33333 3.83333,-20.83333 11.5,-28.5 7.66667,-7.66667 17.16667,-11.5 28.5,-11.5 11.33333,0 20.83333,3.83333 28.5,11.5 7.66667,7.66667 11.5,17.16667 11.5,28.5 v 433 l -97,-27 102,102 c 3.33333,3.33333 7.5,6.16667 12.5,8.5 5,2.33333 10.16667,3.5 15.5,3.5 h 167 c 22,0 40.83333,-7.83333 56.5,-23.5 15.66667,-15.66667 23.5,-34.5 23.5,-56.5 v -160 c 0,-11.33333 3.83333,-20.83333 11.5,-28.5 7.66667,-7.66667 17.16667,-11.5 28.5,-11.5 11.33333,0 20.83333,3.83333 28.5,11.5 7.66667,7.66667 11.5,17.16667 11.5,28.5 v 160 c 0,44 -15.66667,81.66667 -47,113 -31.33333,31.333333 -69,47 -113,47 z m 7,-280 v -160 c 0,-11.33333 3.83333,-20.83333 11.5,-28.5 7.66667,-7.66667 17.16667,-11.5 28.5,-11.5 11.33333,0 20.83333,3.83333 28.5,11.5 7.66667,7.66667 11.5,17.16667 11.5,28.5 v 160 z m 120,0 v -120 c 0,-11.33333 3.83333,-20.83333 11.5,-28.5 7.66667,-7.66667 17.16667,-11.5 28.5,-11.5 11.33333,0 20.83333,3.83333 28.5,11.5 7.66667,7.66667 11.5,17.16667 11.5,28.5 v 120 z"/>
                      <path d="m 382.2442,-608.83772 -39.2722,-89.78691 -122.6784,313.42937 89.7869,-39.27226 24.0443,54.97158 -183.2386,80.14746 -80.147498,-183.2386 54.971598,-24.04424 39.2722,89.78691 122.6784,-313.42937 -89.7868,39.27222 -24.0443,-54.97158 183.2385,-80.14741 80.1475,183.23859 z"/>
                    </g>
                    <!-- Home icon -->
                    <path d="m 11.21881,13.626704 h 0.79375 v -1.5875 h 1.5875 v 1.5875 h 0.79375 v -2.38124 l -1.5875,-1.19063 -1.5875,1.19063 z m -0.52917,0.52917 v -3.175 l 2.11667,-1.5875 2.11666,1.5875 v 3.175 h -1.85208 v -1.5875 h -0.52916 v 1.5875 z" style="fill:#999999"/>
                    <!-- Zoom icon -->
                    <g style="fill:#999999" transform="matrix(0.00661458,0,0,0.00661458,9.88216,20.654034)">
                      <path d="M 784,-120 532,-372 q -30,24 -69,38 -39,14 -83,14 -109,0 -184.5,-75.5 Q 120,-471 120,-580 120,-689 195.5,-764.5 271,-840 380,-840 q 109,0 184.5,75.5 75.5,75.5 75.5,184.5 0,44 -14,83 -14,39 -38,69 l 252,252 z M 380,-400 q 75,0 127.5,-52.5 Q 560,-505 560,-580 560,-655 507.5,-707.5 455,-760 380,-760 305,-760 252.5,-707.5 200,-655 200,-580 q 0,75 52.5,127.5 Q 305,-400 380,-400 Z m -40,-60 v -80 h -80 v -80 h 80 v -80 h 80 v 80 h 80 v 80 h -80 v 80 z"/>
                    </g>
                  </g>
                </g>
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