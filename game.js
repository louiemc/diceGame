// Start the Dice Game
document.getElementById("diceStartBtn").onclick = function diceGame() {
  // Computer Dice
  let computerDie1 = Math.floor(Math.random() * 7);
  let computerDie2 = Math.floor(Math.random() * 7);
  // Computer dice Total
  let computerDiceTotal = computerDie1 + computerDie2;

  // Player Dice
  let playerDie1 = Math.floor(Math.random() * 7);
  let playerDie2 = Math.floor(Math.random() * 7);
  // Player Dice Total
  let playerDiceTotal = playerDie1 + playerDie2;

  if (playerDiceTotal > computerDiceTotal) {
    document.getElementById("diceWinner").innerHTML = "You won!";
    document.getElementById("computerDiceTotal").innerHTML = computerDiceTotal;
    document.getElementById("playerDiceTotal").innerHTML = playerDiceTotal;
  } else if (playerDiceTotal < computerDiceTotal) {
    document.getElementById("diceWinner").innerHTML = "You lost!";
    document.getElementById("computerDiceTotal").innerHTML = computerDiceTotal;
    document.getElementById("playerDiceTotal").innerHTML = playerDiceTotal;
  } else {
    document.getElementById("diceWinner").innerHTML = "It was a tie";
    document.getElementById("computerDiceTotal").innerHTML = computerDiceTotal;
    document.getElementById("playerDiceTotal").innerHTML = playerDiceTotal;
  }
};
