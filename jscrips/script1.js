const fSharp = document.getElementById("set5");
let audio;
let pressed = false;
fSharp.addEventListener("click", function () {
    console.log("F# note is pressed!");
    if (!pressed) {
        audio = new Audio('../sounds/screen2/piano.wav');
        audio.play().catch((error) => console.error('Error playing audio:', error));
    }
    else{
        audio.pause();
    }
    pressed = !pressed;
})
