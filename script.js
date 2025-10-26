const image = document.getElementById('mainImage');
const hoverSound = document.getElementById("hoverSound");

image.addEventListener("mouseEnter", () => {
    hoverSound.currentTime = 0;
    hoverSound.onplay();
});

image.addEventListener("mouseLeave", () => {
    hoverSound.pause();
    hoverSound.currentTime = 0;
});

image.addEventListener('click', () => {
    alert('Image clicked!');
});