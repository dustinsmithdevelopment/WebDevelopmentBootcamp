let buttonList = document.querySelectorAll("button.drum");


let drumNames = ["crash", "kick-bass", "snare", "tom-1", "tom-2", "tom-3", "tom-4"];

let sounds =[];

// generate Audio
drumNames.forEach(element => {
    let soundLocation = ("./sounds/" + element + ".mp3");
    sounds.push(new Audio(soundLocation));
});

for (let i=0; i<drumNames.length; i++) {
    // set the image of each button from the file list
    buttonList[i].addEventListener("click", function() {
    sounds[i].play();
    indicateClick(this.innerText);
    });
};
let keys = ["w", "a", "s", "d", "j", "k", "l"];
document.addEventListener("keydown", (ev)=>{
    let keyIndex = keys.findIndex((item)=>{
        return ev.key === item;
    });
    if (keyIndex === -1){
        console.log("Invalid Key");
    } else {
        sounds[keyIndex].play();
        indicateClick(ev.key);
    }
});
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function indicateClick(keyID) {
    let chosenButton = document.querySelector("." + keyID);
    chosenButton.classList.add("pressed");
    sleep(100).then(()=>{
        chosenButton.classList.remove("pressed");
    });
}
