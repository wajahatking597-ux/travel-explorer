const destListEl = document.getElementById("destinationList");
const addBtn = document.getElementById("addBtn");
const searchInput = document.getElementById("searchInput");

// City images
const cityImages = {
  lahore: "images/lahore.jpeg",
  karachi: "images/karachi.jpg",
  islamabad: "images/islamabad.jpg",
  multan: "images/multan.jpeg",
  faisalabad: "images/faisalabad.jpg",
  quetta: "images/quetta.jpg",
  murree: "images/muree.jpg",
  peshawar: "images/peshawar.jpg",
  gilgit: "images/gilgit.jpg"
};

// Get & Save from localStorage
function getDestinations() {
  return JSON.parse(localStorage.getItem("destinations")) || [];
}
function saveDestinations(list) {
  localStorage.setItem("destinations", JSON.stringify(list));
}

// Render cards
function renderDestinations(list) {
  destListEl.innerHTML = "";
  if (list.length === 0) {
    destListEl.innerHTML =
      '<div class="col-12"><p class="text-center text-muted">No destinations yet.</p></div>';
    return;
  }

  list.forEach((d, index) => {
    const card = document.createElement("div");
    card.className = "col-md-4";
    card.innerHTML = `
      <div class="card shadow-sm mb-3">
        <img src="${d.image}" class="card-img-top" alt="${d.name}">
        <div class="card-body text-center">
          <h5 class="card-title">${d.name}</h5>
          <div class="d-flex justify-content-center gap-2">
            <button class="btn btn-orange btn-sm" onclick="editDestination(${index})">Edit</button>
            <button class="btn btn-dark btn-sm" onclick="deleteDestination(${index})">Delete</button>
          </div>
        </div>
      </div>`;
    destListEl.appendChild(card);
  });
}

// Add new city
function addDestination() {
  const name = searchInput.value.trim();
  if (!name) return alert("Type a city name first!");

  const list = getDestinations();
  const exists = list.some(d => d.name.toLowerCase() === name.toLowerCase());
  if (exists) return alert("This city already exists!");

  const img = cityImages[name.toLowerCase()] || "images/default.jpg";

  list.push({ name, image: img });
  saveDestinations(list);
  renderDestinations(list);
  searchInput.value = "";
}

// Delete city
function deleteDestination(index) {
  const list = getDestinations();
  if (!confirm("Delete this destination?")) return;
  list.splice(index, 1);
  saveDestinations(list);
  renderDestinations(list);
}

// Edit city
function editDestination(index) {
  const list = getDestinations();
  const city = list[index];
  const newName = prompt("Enter new name:", city.name);
  if (newName) {
    city.name = newName;
    city.image = cityImages[newName.toLowerCase()] || city.image;
    saveDestinations(list);
    renderDestinations(list);
  }
}

// Filter (Search)
function filterDestinations() {
  const query = searchInput.value.toLowerCase();
  const all = getDestinations();
  const filtered = all.filter(d => d.name.toLowerCase().includes(query));
  renderDestinations(filtered);
}

// Events
document.addEventListener("DOMContentLoaded", () => {
  renderDestinations(getDestinations());
  addBtn.addEventListener("click", addDestination);
  searchInput.addEventListener("input", filterDestinations);
});
