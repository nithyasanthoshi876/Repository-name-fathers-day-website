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
    setInterval(() => {

        const petal = document.createElement("div");

        petal.innerHTML = Math.random() > 0.5 ? "❤️" : "🌸";

        petal.style.position = "fixed";
        petal.style.left = Math.random() * window.innerWidth + "px";
        petal.style.top = "-50px";

        petal.style.fontSize =
            (20 + Math.random() * 25) + "px";

        petal.style.zIndex = "9999";
        petal.style.pointerEvents = "none";

        petal.style.animation =
            "fall " + (5 + Math.random() * 5) + "s linear forwards";

        document.body.appendChild(petal);

        setTimeout(() => {
            petal.remove();
        }, 10000);

    }, 200);
}
