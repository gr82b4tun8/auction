const artworks = [
  { id: 1, artist: "Jane Doe", image: "https://via.placeholder.com/400", currentBid: "$350" },
  { id: 2, artist: "John Smith", image: "https://via.placeholder.com/400", currentBid: "$220" },
  { id: 3, artist: "Alice Brown", image: "https://via.placeholder.com/400", currentBid: "$500" },
  { id: 4, artist: "Michael Lee", image: "https://via.placeholder.com/400", currentBid: "$180" },
  { id: 5, artist: "Emily White", image: "https://via.placeholder.com/400", currentBid: "$420" },
  { id: 6, artist: "David Green", image: "https://via.placeholder.com/400", currentBid: "$300" },
];

const container = document.getElementById("artworks-container");

artworks.forEach((art) => {
  const card = document.createElement("div");
  card.classList.add("artwork-card");

  // Image
  const img = document.createElement("img");
  img.src = art.image;
  img.alt = `Art by ${art.artist}`;
  card.appendChild(img);

  // Details
  const details = document.createElement("div");
  details.classList.add("artwork-details");

  const artist = document.createElement("p");
  artist.classList.add("artist-name");
  artist.textContent = art.artist;

  const bid = document.createElement("p");
  bid.classList.add("current-bid");
  bid.textContent = `Current Bid: ${art.currentBid}`;

  details.appendChild(artist);
  details.appendChild(bid);

  // Bid Button
  const bidButton = document.createElement("button");
  bidButton.classList.add("button");
  bidButton.innerHTML = `<i data-lucide="gavel"></i> Bid`;
  details.appendChild(bidButton);

  card.appendChild(details);

  // Absolute Buttons (Heart and Message)
  const absoluteButtons = document.createElement("div");
  absoluteButtons.classList.add("absolute-buttons");

  const heartButton = document.createElement("button");
  heartButton.classList.add("icon-button");
  heartButton.innerHTML = `<i data-lucide="heart"></i>`;
  absoluteButtons.appendChild(heartButton);

  const messageButton = document.createElement("button");
  messageButton.classList.add("icon-button");
  messageButton.innerHTML = `<i data-lucide="message-circle"></i>`;
  absoluteButtons.appendChild(messageButton);

  card.appendChild(absoluteButtons);

  // Add animation
  gsap.from(card, { opacity: 0, y: 20, duration: 0.5, delay: 0.2 });

  container.appendChild(card);
});

// Initialize Lucide Icons
lucide.createIcons();

// Sample auction data
const auctions = [
  {
    id: 1,
    title: "2020 Tesla Model 3",
    image: "https://via.placeholder.com/300",
    description: "Low mileage, excellent condition.",
    price: "$35,000",
  },
  {
    id: 2,
    title: "2018 Porsche 911",
    image: "https://via.placeholder.com/300",
    description: "Fully loaded, pristine condition.",
    price: "$85,000",
  },
  {
    id: 3,
    title: "2022 Ford Mustang GT",
    image: "https://via.placeholder.com/300",
    description: "Brand new, never driven.",
    price: "$45,000",
  },
  {
    id: 4,
    title: "2019 BMW M5",
    image: "https://via.placeholder.com/300",
    description: "High performance, luxury sedan.",
    price: "$70,000",
  },
];

// Function to create auction cards
function createAuctionCard(auction) {
  const card = document.createElement("div");
  card.classList.add("listing-card");

  card.innerHTML = `
    <img src="${auction.image}" alt="${auction.title}">
    <div class="details">
      <h3>${auction.title}</h3>
      <p>${auction.description}</p>
      <p class="price">${auction.price}</p>
    </div>
  `;

  return card;
}

// Function to render auction listings
function renderAuctionListings() {
  const listingsGrid = document.getElementById("listings-grid");
  auctions.forEach((auction) => {
    const card = createAuctionCard(auction);
    listingsGrid.appendChild(card);
  });
}

// Render auction listings on page load
document.addEventListener("DOMContentLoaded", renderAuctionListings);
