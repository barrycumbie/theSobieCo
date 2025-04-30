// 🌵 Nevaeh & Marvin 4.30.2025 iss#26 LAYOUT#2

document.addEventListener('DOMContentLoaded', () => {
    // `window.CONF_LOCATION` is injected by the template
    const { lat, lng } = window.CONF_LOCATION;
    const map = L.map('map').setView([lat, lng], 13);
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
  
    L.marker([lat, lng])
      .addTo(map)
      .bindPopup('Conference Venue')
      .openPopup();
  });
  