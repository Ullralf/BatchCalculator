// Load the shared header
document.addEventListener("DOMContentLoaded", () => {
  fetch("header.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("header-container").innerHTML = html;
      setupHeader();
    });
});

function setupHeader() {
  const toggleBtn = document.getElementById('darkToggle');
  const lockBtn = document.getElementById("lockBtn");

  // Dark mode setup
  const savedMode = localStorage.getItem('darkMode');
  if (savedMode === 'enabled') {
    document.body.classList.add('dark-mode');
    if (toggleBtn) toggleBtn.textContent = '☀️';
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const enabled = document.body.classList.contains('dark-mode');
      toggleBtn.textContent = enabled ? '☀️' : '🌙';
      localStorage.setItem('darkMode', enabled ? 'enabled' : 'disabled');
    });
  }

  // Optional: lock button behavior
  if (lockBtn) {
    lockBtn.addEventListener('click', toggleLock);
  }
}

