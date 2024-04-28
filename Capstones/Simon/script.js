

let gameActive = false;
let simonPrompt = [];
let clickAllowed = true;
let currentIndex = 0;
let colorOptions = ["red", "yellow", "green", "blue"];
let currentLevel = 0;

//make sound objects
let soundList = {
    "red": new Audio("./sounds/" + "red" + ".mp3"),
    "yellow": new Audio("./sounds/" + "yellow" + ".mp3"),
    "green": new Audio("./sounds/" + "green" + ".mp3"),
    "blue": new Audio("./sounds/" + "blue" + ".mp3"),
    "wrong": new Audio("./sounds/" + "wrong" + ".mp3")
};


function resetGame(){
    currentIndex = 0;
    currentLevel = 1;
    simonPrompt = [];
    addColor();
    showPrompt();
    gameActive = true;
}
function showLevel(){
    $("h1").text("Level " + currentLevel);
}
function checkTurn(clickedButton){
    if (clickedButton === simonPrompt[currentIndex]){
        if (currentIndex === simonPrompt.length - 1){
            nextLevel();
        } else {
            // move the index forward to check the next button press
            currentIndex++;
        }
    }else {
        soundList["wrong"].play();
        gameOver();
    }
}
function addColor(){
    let colorNumber = Math.floor(Math.random() * 4);
    let colorToAdd = colorOptions[colorNumber];
    simonPrompt.push(colorToAdd);
}
function showPrompt(){
    showLevel();
    clickAllowed = false;
    async function triggerColors() {
        for (const color of simonPrompt) {
            await alertColor(color, 500);
        }
        clickAllowed = true;
    }

    setTimeout(triggerColors, 500);
}

function alertColor(color, time) {
    return new Promise(resolve => {
        $("#" + color).css("opacity", 1);
        $("#" + color).css("box-shadow", "0 0 4px 4px white");
        soundList[color].play();
        setTimeout(() => {
            $("#" + color).css("opacity", 0.7);
            $("#" + color).css("box-shadow", "unset");
            setTimeout(() => {
                resolve(); 
            }, time);
        }, time);
    });
}

function nextLevel(){
    currentIndex = 0;
    currentLevel++;
    addColor();
    showPrompt();
}
function gameOver(){
    $("h1").text('Game Over! Press "r" button to restart.');
    gameActive = false;
}
$(".color-section").on("click",function() {
    if (clickAllowed && gameActive){
        alertColor($(this).attr("id"), 100);
        let clickedButton = $(this).attr("id");
        checkTurn(clickedButton);     
    }   
});
$(document).on("keydown", function(evnt){
    if (evnt.key.toLowerCase() === 'r'){
        resetGame();
    }
})
  