let diceLocations = [
    "./images/dice1.png",
    "./images/dice2.png",
    "./images/dice3.png",
    "./images/dice4.png",
    "./images/dice5.png",
    "./images/dice6.png"];

function rollDice(){
    let temp = Math.random() * 6;
    temp = Math.floor(temp);
    return temp;
}
function nameWinner(p1, p2){
    if (player1 > player2){
        return "Player 1 Wins!"
    } else if (player2 > player1){
        return "Player 2 Wins!"
    }else {
        return "Tie!"
    }
}

let player1 = rollDice();
let player2 = rollDice();

// set the images for each player's dice
document.querySelector("#player1 img").setAttribute("src", diceLocations[player1]);
document.querySelector("#player2 img").setAttribute("src", diceLocations[player2]);
// add alt text for both images
document.querySelector("#player1 img").setAttribute("alt",(player1+1));
document.querySelector("#player2 img").setAttribute("alt",(player2+1));
// Change the main header to the winner
document.getElementsByTagName("h1")[0].textContent = nameWinner(player1, player2);