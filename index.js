// alert('loaded')
var video = document.getElementById("bg-video");

// Get the button
var btn = document.getElementById("myBtn");
btn.addEventListener('click', () => actionVideo());

const actionVideo = () => {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}

const isScrolledIntoView = (element) => {
    var elementTop = element.getBoundingClientRect().top;
    var elementBottom = element.getBoundingClientRect().bottom;

    return elementTop >= 0 && elementBottom <= window.innerHeight;
}

window.addEventListener("scroll", () => {
    if (isScrolledIntoView(video)) {
        video.play();
    }
    else {
        video.pause()
    }
})