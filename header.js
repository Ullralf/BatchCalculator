// header.js (Optional, if you want to keep your JS separate)
document.addEventListener('DOMContentLoaded', function() {
  fetch('header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header-container').innerHTML = data;
    })
    .catch(error => console.error("Error loading header:", error));
});
