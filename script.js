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
        petal.style.left = Math.random() * 100 + "vw";
        petal.style.top = "-50px";

        petal.style.fontSize = (20 + Math.random() * 30) + "px";

        petal.style.pointerEvents = "none";
        petal.style.zIndex = "9999";

        const drift = (Math.random() - 0.5) * 400;

        petal.animate(
            [
                {
                    transform: "translate(0px,-50px) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform: `translate(${drift}px,110vh) rotate(720deg)`,
                    opacity: 0
                }
            ],
            {
                duration: 6000 + Math.random() * 4000,
                easing: "linear"
            }
        );

        document.body.appendChild(petal);

        setTimeout(() => {
            petal.remove();
        }, 10000);

    }, 150);
}