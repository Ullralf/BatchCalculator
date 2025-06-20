document.addEventListener("DOMContentLoaded", () => {
  fetch('header.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById("header-container").innerHTML = data;

      const lockBtn = document.getElementById("lockBtn");
      const darkToggle = document.querySelector(".dark-toggle");

      let isLocked = false;
      lockBtn?.addEventListener("click", () => {
        isLocked = !isLocked;
        lockBtn.textContent = isLocked ? "🔒" : "🔓";
        alert(isLocked ? "Dial is now locked." : "Dial is now unlocked.");
      });

      darkToggle?.addEventListener("click", () => {
        const html = document.documentElement;
        const newTheme = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
        html.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
      });

      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) document.documentElement.setAttribute("data-theme", savedTheme);
    });
});
 
