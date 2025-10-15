// Ensure this file is saved as js/home.js
const cities = [
  { name: "Karachi", image: "images/karachi.jpg" },
  { name: "Lahore", image: "images/lahore.jpeg" },
  { name: "Islamabad", image: "images/islamabad.jpg" },
  { name: "Multan", image: "images/multan.jpeg" },
  { name: "Muree", image: "images/muree.jpg" },
  { name: "Faisalabad", image: "images/faisalabad.jpg" },
  { name: "Peshawar", image: "images/peshawar.jpg" },
  { name: "Quetta", image: "images/quetta.jpg" },
  { name: "Gilgit", image: "images/gilgit.jpg" }
];

function renderCities() {
  const container = document.getElementById('citiesContainer');
  if(!container) return;
  container.innerHTML = '';
  cities.forEach(c=>{
    const col = document.createElement('div');
    col.className = 'col-md-4 mb-3';
    col.innerHTML = `
      <div class="card">
        <a href="${c.image}" target="_blank" rel="noopener">
          <img src="${c.image}" class="card-img-top" alt="${c.name}">
        </a>
        <div class="card-body text-center">
          <h5 class="card-title">${c.name}</h5>
        </div>
      </div>`;
    container.appendChild(col);
  });
}
document.addEventListener('DOMContentLoaded', renderCities);


// sidebar

const sidebar = document.getElementById('sidebar');
    const toggle = document.getElementById('sidebarToggle');
    const overlay = document.getElementById('overlay');

    toggle.addEventListener('click', () => {
      sidebar.classList.toggle('active');
      overlay.classList.toggle('active');
    });

    overlay.addEventListener('click', () => {
      sidebar.classList.remove('active');
      overlay.classList.remove('active');
    });