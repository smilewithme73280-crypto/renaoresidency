const formatCurrency = (value) => `₹${value.toLocaleString("en-IN")}`;

const renderEligibility = (eligibility) => {
  const container = document.getElementById("eligibility");
  container.innerHTML = eligibility
    .map((item) => `<span>${item}</span>`)
    .join("");

  const list = document.getElementById("eligibility-list");
  list.innerHTML = eligibility.map((item) => `<li>${item}</li>`).join("");
};

const renderRooms = (rooms) => {
  const cards = document.getElementById("room-cards");
  cards.innerHTML = rooms
    .map(
      (room) => `
      <article class="card">
        <img src="${room.image}" alt="${room.name}" />
        <div>
          <h3>${room.name}</h3>
          <p class="muted">${room.sizeNote}</p>
        </div>
        <div>
          <div class="price">${formatCurrency(room.rentPerMonth)}<span>/month</span></div>
          <p class="muted">Maintenance: ${formatCurrency(room.maintenanceCharge)}</p>
        </div>
      </article>
    `
    )
    .join("");
};

const renderAmenities = (amenities) => {
  const list = document.getElementById("amenities-list");
  list.innerHTML = amenities.map((item) => `<div class="amenity">${item}</div>`).join("");
};

const renderBilling = (data) => {
  const billing = document.getElementById("billing");
  billing.innerHTML = `
    <div>
      <strong>Electricity: ${data.billingNote}</strong>
      <p>Rate: ₹${data.electricityRatePerUnit.toFixed(2)} per unit</p>
    </div>
    <div>
      <strong>Maintenance excluded from rent</strong>
      <p>Small 1RK: ${formatCurrency(data.rooms[0].maintenanceCharge)} | Big 1RK: ${formatCurrency(
    data.rooms[1].maintenanceCharge
  )}</p>
    </div>
  `;
};

const renderVisitingCard = (card) => {
  const visiting = document.getElementById("visiting");
  visiting.innerHTML = `
    <h3>${card.title}</h3>
    <p><strong>${card.contactName}</strong></p>
    <p>${card.phone}</p>
    <p>${card.email}</p>
    <p>${card.hours}</p>
    <p>${card.notes}</p>
  `;
};

const loadContent = async () => {
  const response = await fetch("/api/pg");
  const data = await response.json();

  renderEligibility(data.eligibility);
  renderRooms(data.rooms);
  renderAmenities(data.amenities);
  renderBilling(data);
  renderVisitingCard(data.visitingCard);
};

loadContent();
