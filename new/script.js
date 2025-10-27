const image = document.getElementById("imageContainer");
const hoverSound = document.getElementById("hoverSound");

let audioUnlocked = false;

// Unlock audio after first click anywhere
document.addEventListener("click", () => {
  if (!audioUnlocked) {
    hoverSound.play().then(() => {
      hoverSound.pause();
      hoverSound.currentTime = 0;
      audioUnlocked = true;
    }).catch(err => console.log("Audio unlock failed:", err));
  }
});

// Play sound on hover
image.addEventListener("mouseenter", () => {
  if (audioUnlocked) {
    hoverSound.currentTime = 0;
    hoverSound.play();
  }
});

// Stop sound when leaving hover
image.addEventListener("mouseleave", () => {
  if (audioUnlocked) {
    hoverSound.pause();
    hoverSound.currentTime = 0;
  }
});

// Click alert
image.addEventListener("click", () => {
  alert("Image clicked!");
});
