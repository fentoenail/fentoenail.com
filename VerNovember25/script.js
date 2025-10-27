const image = document.getElementById("imageContainer");
const hoverSound = document.getElementById("hoverSound");

let audioUnlocked = false;

document.addEventListener("click", () => {
  if (!audioUnlocked) {
    hoverSound.play().then(() => {
      hoverSound.pause();
      hoverSound.currentTime = 0;
      audioUnlocked = true;
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

// Make an animation of a computer and on the screen, it shows the website. When user clicks on the computer, the computer zooms in to fill the screen and reveals the website fully.
// Make the disc do something instead of just sending a warning.
// 10 days before december 1st, make a count down appear on the screen.
// When the user goes to the website on their phone, make an image with a computer and in the computer screen, there will be a link of the website. When user clicks on the computer, it prints "Visit this website on your computer"