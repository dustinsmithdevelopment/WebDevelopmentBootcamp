

let gameActive = false;
let simonPrompt = [];
let clickAllowed = true;
let currentIndex = 0;
let colorOptions = ["red", "yellow", "green", "blue"];
function startGame(){
    currentIndex = 0;
}
function checkTurn(){

}
function addColor(){
    let colorNumber = Math.floor(Math.random() * 4);
    let colorToAdd = colorOptions[colorNumber];
    simonPrompt.push(colorToAdd);
}
function showPrompt(){
    clickAllowed = false;
    showPrompt.forEach(color => {
        // flash each button and play the associated sound
        $("." + color).css("opacity", "1")
        sleep(1000).then($("." + color).css("opacity", "1"));
    });
    clickAllowed = true;

}
$(".color-section").click(() => {
    if (clickAllowed){
        // start the game if it isn't active
        if (gameActive === false){
        startGame();
        } else {
            checkTurn();
        }
    }
    
});


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }