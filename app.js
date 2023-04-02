document.addEventListener("keydown", (event) => {
    const keyCode = event.key.toLowerCase();  // keyCode not used as it has been deprecated
    const audio = document.querySelector(`audio[id="${keyCode}"]`);
    const key = document.querySelector(`.key.${keyCode}`)
    if (!audio) return;
    audio.currentTime = 0; // Rewinds to the start
    audio.play();
    key.classList.add("playing");
}
);


const keys = document.querySelectorAll(".key");

function playSound(event) {
    const keyCode = event.currentTarget.getAttribute("data-key");
    const key = document.querySelector(`.key[data-key="${keyCode}"]`)
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0; // Rewinds to the start
    audio.play();
    key.classList.add("playing");
}

keys.forEach(key => key.addEventListener("click", playSound));

function removeTransition(event) {    // This overcomes clashing that using setTimeout would cause with CSS key transition timing
    event.srcElement.classList.remove("playing");  
}

const allKeys = document.querySelectorAll(".key");
allKeys.forEach(key => key.addEventListener("transitionend", removeTransition));







