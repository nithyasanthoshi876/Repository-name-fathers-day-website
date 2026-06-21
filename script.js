function togglePhoto(photoId) {
    const photo = document.getElementById(photoId);

    if (photo.style.display === "block") {
        photo.style.display = "none";
    } else {
        photo.style.display = "block";
    }
}

function playMusic() {
    const music = document.getElementById("bgMusic");

    music.play().catch(function(error) {
        console.log(error);
    });
}

window.onload = function () {
    const photos = document.querySelectorAll(".hidden-photo");

    photos.forEach(function(photo) {
        photo.style.display = "none";
    });

    createPetals();
};

function createPetals() {
    const petals = document.getElementById("petals");

    setInterval(() => {

        const petal = document.createElement("div");

        petal.className = "petal";
        petal.innerHTML = Math.random() > 0.5 ? "🌸" : "❤️";

        petal.style.left = Math.random() * 100 + "vw";
        petal.style.fontSize = (20 + Math.random() * 20) + "px";
        petal.style.animationDuration =
            (5 + Math.random() * 5) + "s";

        petals.appendChild(petal);

        setTimeout(() => {
            petal.remove();
        }, 10000);

    }, 300);
}
