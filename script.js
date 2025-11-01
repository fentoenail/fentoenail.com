const image = document.getElementById("imageContainer");
const hoverSound = document.getElementById("hoverSound");
const overlay = document.getElementById("overlay");
const timerDisplay = document.getElementById("timer");

let audioUnlocked = false;
let manualUnlock = false;
let typedKeys = "";

document.addEventListener("click", () => {
  if (!audioUnlocked) {
    hoverSound.play().then(() => {
      hoverSound.pause();
      hoverSound.currentTime = 0;
      audioUnlocked = true;
    }).catch(() => {});
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

function updateTimer() {
  const targetDate = new Date("November 1, 2025 00:00:00").getTime();
  const now = new Date().getTime();
  const diff = targetDate - now;
  const daysLeft = diff / (1000 * 60 * 60 * 24);

  if (manualUnlock) {
    fadeOutOverlay();
    return;
  }

  if (daysLeft > 10) {
    overlay.style.display = "none";
    return;
  }

  if (diff <= 0) {
    clearInterval(timerInterval);
    fadeOutOverlay();
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  timerDisplay.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function fadeOutOverlay() {
  overlay.style.opacity = "0";
  setTimeout(() => {
    overlay.style.display = "none";
  }, 1500);
}

document.addEventListener("keydown", (event) => {
  typedKeys += event.key.toLowerCase();
  if (typedKeys.endsWith("unlock")) {
    manualUnlock = true;
    clearInterval(timerInterval);
    fadeOutOverlay();
    console.log("Debug unlock activated");
  }
  if (typedKeys.length > 10) typedKeys = typedKeys.slice(-10);
});

const timerInterval = setInterval(updateTimer, 1000);
updateTimer();


// Make an animation of a computer and on the screen, it shows the website. When user clicks on the computer, the computer zooms in to fill the screen and reveals the website fully.
// Make the disc do something instead of just sending a warning. Make it visit a random website from a list of the sub websites of the main website. 
// 10 days before december 1st, make a count down appear on the screen.
// When the user goes to the website on their phone, make an image with a computer and in the computer screen, there will be a link of the website. When user clicks on the computer, it prints "Visit this website on your computer"
