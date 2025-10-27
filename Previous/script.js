const image = document.getElementById("mainImage");
const hoverSound = document.getElementById("hoverSound");

let audioUnlocked = false;

// Unlock audio on first click
document.addEventListener("click", () => {
  if (!audioUnlocked) {
    hoverSound.play().then(() => {
      hoverSound.pause();
      hoverSound.currentTime = 0;
      audioUnlocked = true;
      console.log("Audio unlocked");
    }).catch(err => console.log("Audio unlock failed:", err));
  }
});

image.addEventListener("mouseenter", () => {
  if (audioUnlocked) {
    hoverSound.currentTime = 0;
    hoverSound.play();
  }
});

image.addEventListener("mouseleave", () => {
  if (audioUnlocked) {
    hoverSound.pause();
    hoverSound.currentTime = 0;
  }
});

image.addEventListener("click", () => {
  alert("Image clicked!");
});
