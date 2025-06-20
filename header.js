document.getElementById('header-container').innerHTML = `
  <header>
    <button class="lock-btn" id="lockBtn" onclick="toggleLock()">🔓</button>
    BatchCalculator
    <span class="recipes-icon" onclick="window.location.href='recipes.html'">🍳</span>
    <span class="log-icon" onclick="window.location.href='cost-log.html'">📜</span>
    <span class="settings-icon" onclick="window.location.href='settings.html'">⚙️</span>
  </header>
`;
