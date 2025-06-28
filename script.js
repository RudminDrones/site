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
            <div style="margin-top:20px;padding:0 10px;display:flex;justify-content:center;">
              <svg width="560" height="244" viewBox="0 0 80 35" style="max-width:100%;height:auto;opacity:0.65;">
                <g style="fill:#cccccc;stroke:#cccccc;stroke-opacity:0.83536583;fill-opacity:0.83529413" transform="matrix(0.00661458,0,0,0.00661458,17.437486,25.97529)">
                  <path d="m 473,-80 c -16,0 -31.33333,-3 -46,-9 -14.66667,-6 -27.66667,-14.66667 -39,-26 l -204,-205 30,-31 c 10.66667,-10.66667 23.16667,-17.83333 37.5,-21.5 14.33333,-3.66667 28.5,-3.5 42.5,0.5 l 66,19 v -327 c 0,-11.33333 3.83333,-20.83333 11.5,-28.5 7.66667,-7.66667 17.16667,-11.5 28.5,-11.5 11.33333,0 20.83333,3.83333 28.5,11.5 7.66667,7.66667 11.5,17.16667 11.5,28.5 v 433 l -97,-27 102,102 c 3.33333,3.33333 7.5,6.16667 12.5,8.5 5,2.33333 10.16667,3.5 15.5,3.5 h 167 c 22,0 40.83333,-7.83333 56.5,-23.5 15.66667,-15.66667 23.5,-34.5 23.5,-56.5 v -160 c 0,-11.33333 3.83333,-20.83333 11.5,-28.5 7.66667,-7.66667 17.16667,-11.5 28.5,-11.5 11.33333,0 20.83333,3.83333 28.5,11.5 7.66667,7.66667 11.5,17.16667 11.5,28.5 v 160 c 0,44 -15.66667,81.66667 -47,113 -31.33333,31.333333 -69,47 -113,47 z m 7,-280 v -160 c 0,-11.33333 3.83333,-20.83333 11.5,-28.5 7.66667,-7.66667 17.16667,-11.5 28.5,-11.5 11.33333,0 20.83333,3.83333 28.5,11.5 7.66667,7.66667 11.5,17.16667 11.5,28.5 v 160 z m 120,0 v -120 c 0,-11.33333 3.83333,-20.83333 11.5,-28.5 7.66667,-7.66667 17.16667,-11.5 28.5,-11.5 11.33333,0 20.83333,3.83333 28.5,11.5 7.66667,7.66667 11.5,17.16667 11.5,28.5 v 120 z M 80,-680 v -200 h 60 v 81 c 48,-39.33333 101,-69.33333 159,-90 58,-20.66667 118.33333,-31 181,-31 97.33333,0 183.33333,22.33333 258,67 74.66667,44.66667 122,102.33333 142,173 h -63 c -25.33333,-56 -68.16667,-100 -128.5,-132 -60.33333,-32 -129.83333,-48 -208.5,-48 -58.66667,0 -115,10.33333 -169,31 -54,20.66667 -103,50.33333 -147,89 h 116 v 60 z" style="stroke:#cccccc;stroke-opacity:0.83536583;fill:#cccccc;fill-opacity:0.83529413"/>
                </g>
                <g style="fill:#cccccc;stroke:#cccccc;stroke-opacity:0.83536583;fill-opacity:0.83529413" transform="matrix(0.00661458,0,0,0.00661458,26.745136,0.53899013)">
                  <path d="m 2696.5162,3186.1957 v -200 h 60 v 81 c 48,-39.3334 101,-69.3334 159,-90 58,-20.6667 118.3333,-31 181,-31 97.3334,0 183.3334,22.3333 258.0001,67 74.6667,44.6666 122,102.3333 142,173 h -63 c -25.3333,-56 -68.1667,-100 -128.5,-132 -60.3333,-32 -129.8333,-48 -208.5001,-48 -58.6667,0 -115,10.3333 -169,31 -54,20.6666 -103,50.3333 -147,89 h 116 v 60 z" style="stroke:#cccccc;stroke-opacity:0.83536583;fill:#cccccc;fill-opacity:0.83529413"/>
                </g>
                <path d="m 47.16078,25.35077 c -0.10583,0 -0.20726,-0.0198 -0.30427,-0.0595 -0.097,-0.0397 -0.183,-0.097 -0.25797,-0.17198 l -1.34937,-1.35599 0.21828,-0.22489 c 0.0617,-0.0617 0.1367,-0.10363 0.22489,-0.12568 0.0882,-0.0221 0.17639,-0.0221 0.26459,0 l 0.4564,0.13229 v -1.89838 c 0,-0.075 0.0254,-0.13781 0.0761,-0.18852 0.0507,-0.0507 0.11355,-0.0761 0.18852,-0.0761 0.075,0 0.1378,0.0254 0.18851,0.0761 0.0507,0.0507 0.0761,0.11357 0.0761,0.18852 v 2.59953 l -0.64823,-0.18521 0.68131,0.6813 c 0.0265,0.0265 0.0551,0.0463 0.086,0.0595 0.0309,0.0133 0.0639,0.0199 0.0992,0.0199 h 1.10463 c 0.14552,0 0.2701,-0.0518 0.37372,-0.15545 0.10363,-0.10363 0.15545,-0.2282 0.15545,-0.37372 v -1.05833 c 0,-0.075 0.0254,-0.13781 0.0761,-0.18852 0.0507,-0.0507 0.11355,-0.0761 0.18851,-0.0761 0.075,0 0.1378,0.0254 0.18852,0.0761 0.0507,0.0507 0.0761,0.11357 0.0761,0.18852 v 1.05833 c 0,0.29104 -0.10363,0.54019 -0.31089,0.74745 -0.20726,0.20725 -0.4564,0.31088 -0.74745,0.31088 z m 0.0463,-1.85208 v -2.11666 c 0,-0.075 0.0254,-0.13781 0.0761,-0.18852 0.0507,-0.0507 0.11355,-0.0761 0.18851,-0.0761 0.075,0 0.13781,0.0254 0.18852,0.0761 0.0507,0.0507 0.0761,0.11357 0.0761,0.18852 v 2.11666 z m 0.79375,0 v -0.79375 c 0,-0.075 0.0254,-0.1378 0.0761,-0.18851 0.0507,-0.0507 0.11355,-0.0761 0.18852,-0.0761 0.075,0 0.1378,0.0254 0.18851,0.0761 0.0507,0.0507 0.0761,0.11357 0.0761,0.18851 v 0.79375 z m 0.26458,1.32292 h -1.28984 z m -0.99525,-1.13435 v -0.009 h 0.003 v 0.004 c 0.002,-0.002 0.004,-0.003 0.007,-0.004 0.002,-9.1e-4 0.005,-0.001 0.008,-0.001 0.004,0 0.008,9.8e-4 0.0113,0.003 0.003,0.002 0.005,0.004 0.006,0.008 h -0.003 c -0.001,-0.002 -0.003,-0.004 -0.006,-0.006 -0.003,-10e-4 -0.006,-0.002 -0.009,-0.002 -0.003,0 -0.005,4.5e-4 -0.007,0.001 -0.002,9.1e-4 -0.005,0.002 -0.006,0.004 h 0.005 v 0.003 z" style="fill:#cccccc;stroke-width:0.00661458;stroke:#cccccc;stroke-opacity:0.83536583;fill-opacity:0.83529413"/>
                <path d="m 74.618298,25.611087 c -0.10584,0 -0.20726,-0.01984 -0.30428,-0.05953 -0.097,-0.03969 -0.183,-0.09701 -0.25796,-0.17198 l -1.34938,-1.355989 0.19844,-0.205052 c 0.0706,-0.07056 0.15324,-0.11796 0.24805,-0.142214 0.0948,-0.02425 0.18851,-0.02315 0.28112,0.0033 l 0.43656,0.125677 v -2.162967 c 0,-0.07497 0.0254,-0.137804 0.0761,-0.188516 0.0507,-0.05071 0.11355,-0.07607 0.18851,-0.07607 0.075,0 0.13781,0.02536 0.18852,0.07607 0.0507,0.05071 0.0761,0.113551 0.0761,0.188516 v 2.864113 l -0.64162,-0.178594 0.67469,0.674687 c 0.0221,0.02205 0.0496,0.04079 0.0827,0.05622 0.0331,0.01543 0.0673,0.02315 0.10253,0.02315 h 1.10463 c 0.14552,0 0.2701,-0.05181 0.37373,-0.155442 0.10362,-0.103629 0.15544,-0.228203 0.15544,-0.373724 v -1.058333 c 0,-0.07496 0.0254,-0.137804 0.0761,-0.188515 0.0507,-0.05071 0.11355,-0.07607 0.18851,-0.07607 0.075,0 0.13781,0.02536 0.18852,0.07607 0.0507,0.05071 0.0761,0.11355 0.0761,0.188515 v 1.058333 c 0,0.291042 -0.10363,0.540191 -0.31089,0.747448 -0.20725,0.207256 -0.4564,0.310885 -0.74744,0.310885 z m 0.0463,-1.852083 v -1.058332 c 0,-0.07497 0.0254,-0.137804 0.0761,-0.188516 0.0507,-0.05071 0.11355,-0.07607 0.18851,-0.07607 0.075,0 0.1378,0.02536 0.18852,0.07607 0.0507,0.05071 0.0761,0.11355 0.0761,0.188516 v 1.058332 z m 0.79375,0 v -0.793749 c 0,-0.07496 0.0254,-0.137804 0.0761,-0.188516 0.0507,-0.05071 0.11355,-0.07607 0.18851,-0.07607 0.075,0 0.13781,0.02535 0.18852,0.07607 0.0507,0.05071 0.0761,0.113551 0.0761,0.188516 v 0.793749 z" style="fill:#cccccc;stroke-width:0.00661458;stroke:#cccccc;stroke-opacity:0.83536583;fill-opacity:0.83529413"/>
                <path d="m 73.224228,21.848464 -0.25976,-0.593903 -0.81147,2.073204 0.5939,-0.259769 0.15904,0.363614 -1.21204,0.530141 -0.53014,-1.212046 0.36361,-0.159043 0.25977,0.593903 0.81147,-2.073204 -0.59391,0.25977 -0.15904,-0.363614 1.21205,-0.530142 0.53014,1.212047 z" style="fill:#cccccc;stroke-width:0.00661458;stroke:#cccccc;stroke-opacity:0.83536583;fill-opacity:0.83529413"/>
                <path d="m 59.394237,20.680207 -0.45754,-0.459188 -0.004,2.22635 0.45919,-0.457543 0.280126,0.281135 -0.937114,0.933763 -0.933768,-0.937117 0.281137,-0.28013 0.45754,0.459188 0.004,-2.22635 -0.45918,0.457545 -0.280136,-0.281136 0.937124,-0.933764 0.933758,0.937118 z" style="fill:#cccccc;fill-opacity:0.835294;stroke:#cccccc;stroke-width:0.00661458;stroke-opacity:0.835366"/>
                <g style="fill:#cccccc;stroke:#cccccc;stroke-opacity:0.83536583;fill-opacity:0.83529413" transform="matrix(0.00661458,0,0,0.00661458,10.750095,18.2856)">
                  <path d="m 360,-160 -56,-56 70,-72 Q 246,-305 163,-358 80,-411 80,-480 80,-563 195.5,-621.5 311,-680 480,-680 q 169,0 284.5,58.5 Q 880,-563 880,-480 q 0,62 -66.5,111 -66.5,49 -173.5,73 v -82 q 77,-20 118.5,-49.5 41.5,-29.5 41.5,-52.5 0,-32 -85.5,-76 -85.5,-44 -234.5,-44 -149,0 -234.5,44 -85.5,44 -85.5,76 0,24 51,57.5 51,33.5 145,50.5 l -52,-52 56,-56 160,160 z" style="stroke:#cccccc;stroke-opacity:0.83536583;fill:#cccccc;fill-opacity:0.83529413"/>
                </g>
                <path d="m 12.340355,11.94523 h 0.79375 v -1.5875 h 1.5875 v 1.5875 h 0.79375 V 9.5639901 l -1.5875,-1.19063 -1.5875,1.19063 z m -0.52917,0.52917 V 9.2994001 l 2.11667,-1.5875 2.11666,1.5875 V 12.4744 h -1.85208 v -1.5875 h -0.52916 v 1.5875 z m 2.11667,-2.3151 z" style="fill:#cccccc;stroke:#cccccc;stroke-width:0.00661458;stroke-opacity:0.83536583;fill-opacity:0.83529413"/>
                <path d="m 38.615425,11.95391 h 0.79375 v -1.5875 h 1.5875 v 1.5875 h 0.79375 V 9.5726701 l -1.5875,-1.19063 -1.5875,1.19063 z m -0.52917,0.52917 V 9.3080801 l 2.11667,-1.5875 2.116655,1.5875 V 12.48308 h -1.852075 v -1.5875 h -0.52916 v 1.5875 z m 2.11667,-2.3151 z" style="fill:#cccccc;stroke:#cccccc;stroke-width:0.00661458;stroke-opacity:0.83536583;fill-opacity:0.83529413"/>
                <path d="m 64.875962,11.93264 h 0.79375 v -1.5875 h 1.5875 v 1.5875 h 0.79375 V 9.5514001 l -1.5875,-1.19063 -1.5875,1.19063 z m -0.52917,0.52917 V 9.2868101 l 2.11667,-1.5875 2.11666,1.5875 V 12.46181 h -1.85208 v -1.5875 h -0.52916 v 1.5875 z m 2.11667,-2.3151 z" style="fill:#cccccc;stroke:#cccccc;stroke-width:0.00661458;stroke-opacity:0.83536583;fill-opacity:0.83529413"/>
                <g style="fill:#cccccc;stroke:#cccccc;stroke-opacity:0.83536583;fill-opacity:0.83529413" transform="matrix(0.00661458,0,0,0.00661458,3.7560972,27.506674)">
                  <path d="m 480,-80 q -116,0 -198,-82 -82,-82 -82,-198 v -240 q 0,-116 82,-198 82,-82 198,-82 116,0 198,82 82,82 82,198 v 240 q 0,116 -82,198 -82,82 -198,82 z m 40,-520 h 160 q 0,-72 -45.5,-127 Q 589,-782 520,-796 Z m -240,0 h 160 v -196 q -69,14 -114.5,69 -45.5,55 -45.5,127 z m 200,440 q 83,0 141.5,-58.5 Q 680,-277 680,-360 V -520 H 280 v 160 q 0,83 58.5,141.5 Q 397,-160 480,-160 Z m 0,-360 z m 40,-80 z m -80,0 z m 40,80 z" style="stroke:#cccccc;stroke-opacity:0.83536583;fill:#cccccc;fill-opacity:0.83529413"/>
                </g>
                <g style="fill:#cccccc;stroke:#cccccc;stroke-opacity:0.83536583;fill-opacity:0.83529413" transform="matrix(0.00661458,0,0,0.00661458,30.717404,27.545374)">
                  <path d="m 480,-80 q -116,0 -198,-82 -82,-82 -82,-198 v -240 q 0,-116 82,-198 82,-82 198,-82 116,0 198,82 82,82 82,198 v 240 q 0,116 -82,198 -82,82 -198,82 z m 40,-520 h 160 q 0,-72 -45.5,-127 Q 589,-782 520,-796 Z m -240,0 h 160 v -196 q -69,14 -114.5,69 -45.5,55 -45.5,127 z m 200,440 q 83,0 141.5,-58.5 Q 680,-277 680,-360 V -520 H 280 v 160 q 0,83 58.5,141.5 Q 397,-160 480,-160 Z m 0,-360 z m 40,-80 z m -80,0 z m 40,80 z" style="stroke:#cccccc;stroke-opacity:0.83536583;fill:#cccccc;fill-opacity:0.83529413"/>
                </g>
                <g style="fill:#cccccc;stroke:#cccccc;stroke-opacity:0.83536583;fill-opacity:0.83529413" transform="matrix(0.00661458,0,0,0.00661458,58.33222,27.782602)">
                  <path d="m 480,-80 q -116,0 -198,-82 -82,-82 -82,-198 v -240 q 0,-116 82,-198 82,-82 198,-82 116,0 198,82 82,82 82,198 v 240 q 0,116 -82,198 -82,82 -198,82 z m 40,-520 h 160 q 0,-72 -45.5,-127 Q 589,-782 520,-796 Z m -240,0 h 160 v -196 q -69,14 -114.5,69 -45.5,55 -45.5,127 z m 200,440 q 83,0 141.5,-58.5 Q 680,-277 680,-360 V -520 H 280 v 160 q 0,83 58.5,141.5 Q 397,-160 480,-160 Z m 0,-360 z m 40,-80 z m -80,0 z m 40,80 z" style="stroke:#cccccc;stroke-opacity:0.83536583;fill:#cccccc;fill-opacity:0.83529413"/>
                </g>
                <path style="fill:#cccccc;fill-opacity:0.83529413;stroke:#cccccc;stroke-width:0.465;stroke-opacity:0.83536583;stroke-dasharray:none" d="M 26.918865,6.1436917 V 28.884461"/>
                <path style="fill:#cccccc;fill-opacity:0.83529413;stroke:#cccccc;stroke-width:0.465;stroke-opacity:0.83536583;stroke-dasharray:none" d="M 53.023059,6.0279317 V 28.768701"/>
                <g style="fill:#cccccc;stroke:#cccccc;stroke-opacity:0.83536583;fill-opacity:0.83529413" transform="matrix(0.00661458,0,0,0.00661458,37.000951,18.34004)">
                  <path d="m 680,-280 -56,-56 103,-104 H 520 v -80 h 207 l -103,-104 56,-56 200,200 z m -400,0 -200,-200 200,-200 56,56 -103,104 h 207 v 80 H 233 l 103,104 z" style="stroke:#cccccc;stroke-opacity:0.83536583;fill:#cccccc;fill-opacity:0.83529413"/>
                </g>
                <path style="fill:#ea0000;fill-opacity:1;stroke:#d21e07;stroke-width:0.765;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1" d="m 61.50871,22.708452 v 0.98132"/>
                <g style="fill:#cccccc;stroke:#cccccc;stroke-opacity:0.83536583;fill-opacity:0.83529413" transform="matrix(0.00661458,0,0,0.00661458,63.936187,18.95997)">
                  <path d="M 784,-120 532,-372 q -30,24 -69,38 -39,14 -83,14 -109,0 -184.5,-75.5 Q 120,-471 120,-580 120,-689 195.5,-764.5 271,-840 380,-840 q 109,0 184.5,75.5 75.5,75.5 75.5,184.5 0,44 -14,83 -14,39 -38,69 l 252,252 z M 380,-400 q 75,0 127.5,-52.5 Q 560,-505 560,-580 560,-655 507.5,-707.5 455,-760 380,-760 305,-760 252.5,-707.5 200,-655 200,-580 q 0,75 52.5,127.5 Q 305,-400 380,-400 Z m -40,-60 v -80 h -80 v -80 h 80 v -80 h 80 v 80 h 80 v 80 h -80 v 80 z" style="stroke:#cccccc;stroke-opacity:0.83536583;fill:#cccccc;fill-opacity:0.83529413"/>
                </g>
                <g style="fill:#cccccc;stroke:#cccccc;stroke-opacity:0.83536583;fill-opacity:0.83529413" transform="matrix(0.00497755,0,0,0.00497755,31.498193,29.08816)">
                  <path d="m 680,-1510.3664 -56,-56 103,-104 H 520 v -80 h 207 l -103,-104 56,-56 200,200 z m -400,0 -200,-200 200,-200 56,56 -103,104 h 207 v 80 H 233 l 103,104 z" style="stroke:#cccccc;stroke-opacity:0.83536583;fill:#cccccc;fill-opacity:0.83529413"/>
                </g>
                <g style="fill:#cccccc;stroke:#cccccc;stroke-opacity:0.83536583;fill-opacity:0.83529413" transform="matrix(0.00497755,0,0,0.00497755,4.5627339,29.154256)">
                  <path d="m 680,-1510.3664 -56,-56 103,-104 H 520 v -80 h 207 l -103,-104 56,-56 200,200 z m -400,0 -200,-200 200,-200 56,56 -103,104 h 207 v 80 H 233 l 103,104 z" style="stroke:#cccccc;stroke-opacity:0.83536583;fill:#cccccc;fill-opacity:0.83529413"/>
                </g>
                <path style="fill:#ea0000;fill-opacity:1;stroke:none;stroke-width:0.00795553;stroke-opacity:1" d="m 5.6092737,23.513495 c 0,-0.120721 0.024586,-0.268221 0.065516,-0.39306 0.1024048,-0.31234 0.3782695,-0.690846 0.8416974,-0.846942 0.061543,-0.02073 0.1573473,-0.04516 0.1590907,-0.04055 5.866e-4,0.0014 5.866e-4,0.295551 3.908e-4,0.653856 l -5.857e-4,0.651467 -0.5330649,5.86e-4 -0.5330668,5.87e-4 z"/>
                <path style="fill:#ea0000;fill-opacity:1;stroke:none;stroke-width:0.00795002;stroke-opacity:1" d="m 35.221602,23.55113 c 0,-0.120638 -0.02456,-0.268035 -0.06546,-0.392788 -0.102333,-0.312124 -0.378007,-0.690368 -0.841114,-0.846354 -0.06151,-0.02071 -0.157238,-0.04512 -0.158981,-0.04053 -5.86e-4,0.0014 -5.86e-4,0.295345 -3.9e-4,0.653402 l 5.85e-4,0.651015 0.532696,5.87e-4 0.532697,5.86e-4 z"/>
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