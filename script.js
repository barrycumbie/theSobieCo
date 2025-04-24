// script.js

/* =========================================================================
   1. Load Shared Components
   -------------------------------------------------------------------------
   We fetch and inject `sidebar.html` and `footer.html` into the placeholders
   on every page. This keeps navigation and footer consistent.
   ======================================================================== */
   document.addEventListener('DOMContentLoaded', () => {
    // Sidebar
    fetch('sidebar.html')
      .then(response => response.text())
      .then(html => {
        const placeholder = document.getElementById('sidebar-placeholder') 
                         || document.getElementById('sidebar');
        if (placeholder) placeholder.innerHTML = html;
      })
      .catch(err => console.error('Error loading sidebar:', err));
  
    // Footer
    fetch('footer.html')
      .then(response => response.text())
      .then(html => {
        const placeholder = document.getElementById('footer-placeholder') 
                         || document.getElementById('footer');
        if (placeholder) placeholder.innerHTML = html;
      })
      .catch(err => console.error('Error loading footer:', err));
  
 /* search bar */
   const searchInput = document.getElementById('search-input');

if (searchInput) {
  searchInput.addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const content = document.querySelectorAll('main, .main, .card');

    content.forEach(section => {
      const text = section.textContent.toLowerCase();
      section.style.display = text.includes(query) ? '' : 'none';
    });
  });
}

      
    /* =========================================================================
       2. Countdown Timer
       -------------------------------------------------------------------------
       Finds an element with id="countdown" and updates it every second with the
       time remaining until April 9, 2025 00:00:00.
       ======================================================================== */
    const countdownEl = document.getElementById('countdown');
    if (countdownEl) {
      const targetDate = new Date('April 9, 2026 00:00:00').getTime();
  
      function updateCountdown() {
        const now = Date.now();
        const distance = targetDate - now;
  
        if (distance <= 0) {
          countdownEl.textContent = 'The conference has started!';
          clearInterval(timerInterval);
          return;
        }
  
        const days    = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours   = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
        countdownEl.textContent = 
          `${days}d ${hours}h ${minutes}m ${seconds}s`;
      }
  
      // Initial call and then update every second
      updateCountdown();
      const timerInterval = setInterval(updateCountdown, 1000);
    }
  });
  