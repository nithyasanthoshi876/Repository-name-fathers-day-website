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
};