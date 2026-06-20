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

    music.currentTime = 0;

    music.play()
        .then(() => {
            console.log("Music started");
        })
        .catch(err => {
            console.error("Audio error:", err);
            alert("Music could not start. Press F12 and check Console.");
        });
}


window.onload = function () {
    const photos = document.querySelectorAll(".hidden-photo");

    photos.forEach(function(photo) {
        photo.style.display = "none";
    });
};