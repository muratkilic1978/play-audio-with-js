const button = document.querySelector("button");
const bark = new Audio('mp3/bark.mp3');

button.addEventListener('click', function(){
    let duration = bark.duration;
    let muted = bark.muted;
    bark.play();
    console.log(muted);
})