function togglePhoto(id) {

    const photo = document.getElementById(id);

    if (photo.style.display === "block") {

        photo.style.display = "none";

    } else {

        photo.style.display = "block";

    }

}



/* Floating Flowers */

const petals = document.getElementById("petals");

for (let i = 0; i < 20; i++) {


const flower = document.createElement("div");

flower.innerHTML = "🌸";

flower.style.position = "fixed";
flower.style.left = Math.random() * 100 + "vw";
flower.style.top = "-50px";
flower.style.fontSize = (18 + Math.random() * 12) + "px";
flower.style.pointerEvents = "none";
flower.style.zIndex = "999";

flower.style.animation =
    `fall ${4 + Math.random() * 4}s linear infinite`;

flower.style.animationDelay =
    Math.random() * 5 + "s";

petals.appendChild(flower);


}

/* Floating Hearts */

for (let i = 0; i < 15; i++) {


const heart = document.createElement("div");

heart.innerHTML = "❤️";

heart.style.position = "fixed";
heart.style.left = Math.random() * 100 + "vw";
heart.style.top = Math.random() * 100 + "vh";
heart.style.fontSize = (20 + Math.random() * 12) + "px";
heart.style.pointerEvents = "none";
heart.style.zIndex = "998";

heart.style.animation =
    `floatHeart ${1.5 + Math.random() * 1.5}s linear infinite`;

heart.style.animationDelay =
    Math.random() * 2 + "s";

petals.appendChild(heart);
function playMusic() {

    const music = document.getElementById("bgMusic");

    music.play();

    const button = document.getElementById("startMusic");

    button.innerHTML = "🎵 Our Song Is Playing ❤️";

    button.disabled = true;
}

}
