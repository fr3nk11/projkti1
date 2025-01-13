const photoGrid = document.getElementById("photoGrid");
const grayscaleToggle = document.getElementById("grayscaleToggle");
const fetchPhotosButton = document.getElementById("fetchPhotos");
const loadMorePhotosButton = document.getElementById("loadMorePhotos");

async function fetchRandomPhotos(count = 4) {
  const photos = [];
  for (let i = 0; i < count; i++) {
    const photoId = Math.floor(Math.random() * 1000);
    photos.push({
      imageUrl: `https://picsum.photos/id/${photoId}/300/200`,
      photographer: "Lukas Budimaier",
      photoUrl: "https://unsplash.com/photos/pwaaqfoMib1",
    });
  }
  return photos;
}

async function renderPhotos(count = 4) {
  const photos = await fetchRandomPhotos(count);
  photos.forEach((photo) => {
    const tile = document.createElement("div");
    tile.className = "photo-tile";
    tile.innerHTML = `
      <img src="${photo.imageUrl}" alt="Random Image">
      <div class="overlay">
        <p>Photo by ${photo.photographer}</p>
        <a href="${photo.photoUrl}" target="_blank">${photo.photoUrl}</a>
      </div>
    `;
    photoGrid.appendChild(tile);
  });
  applyGrayscale();
}

function applyGrayscale() {
  if (grayscaleToggle.checked) {
    photoGrid.classList.add("grayscale");
  } else {
    photoGrid.classList.remove("grayscale");
  }
}

grayscaleToggle.addEventListener("change", applyGrayscale);

fetchPhotosButton.addEventListener("click", () => {
  photoGrid.innerHTML = "";
  renderPhotos();
});

loadMorePhotosButton.addEventListener("click", () => {
  renderPhotos(4);
});

renderPhotos();
