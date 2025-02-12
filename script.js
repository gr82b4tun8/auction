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
