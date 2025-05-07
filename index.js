var buttons = document.querySelectorAll("button");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        var key = this.innerText.trim(); 
        playSound(key);
    });
}

document.addEventListener("keydown", function(event) {
    playSound(event.key);
});

function playSound(key) {
    switch (key) {
        case "w":
            new Audio("./music/joke-drums-242242.mp3").play();
            break;
        case "a":
            new Audio("./music/mixkit-cool-guitar-riff-2321.wav").play();
            break;
        case "s":
            new Audio("./music/piano-g-6200.mp3").play();
            break;
        case "d":
            new Audio("./music/hf-jazz-instrument-108147.mp3").play();
            break;
        case "r":
            new Audio("./music/hello-91045.mp3").play();
            break;
        default:
            console.log("No sound mapped for: " + key);
    }
}