// Start the Dice Game
document.getElementById("diceStartBtn").onclick = function diceGame() {
  // Computer Dice
  let computerDie1 = Math.floor(Math.random() * 7);
  console.log("computerDie1:", computerDie1);
  let computerDie2 = Math.floor(Math.random() * 7);
  console.log("computerDie2:", computerDie2);
  // Computer dice Total
  let computerDiceTotal = computerDie1 + computerDie2;
  console.log(computerDiceTotal);

  // Player Dice
  let playerDie1 = Math.floor(Math.random() * 7);
  console.log("playerDie1:", playerDie1);
  let playerDie2 = Math.floor(Math.random() * 7);
  console.log("playerDie2:", playerDie2);
  // Player Dice Total
  let playerDiceTotal = playerDie1 + playerDie2;
  console.log(playerDiceTotal);

  if (playerDiceTotal > computerDiceTotal) {
    document.getElementById("diceWinner").innerHTML = "You won!";
    document.getElementById("computerDiceTotal").innerHTML = computerDiceTotal;
    document.getElementById("playerDiceTotal").innerHTML = playerDiceTotal;

    console.log(
      "You won! Your dice total was",
      playerDiceTotal,
      "\n",
      "The computer's dice total was",
      computerDiceTotal
    );
  } else if (playerDiceTotal < computerDiceTotal) {
    document.getElementById("diceWinner").innerHTML = "You lost!";
    document.getElementById("computerDiceTotal").innerHTML = computerDiceTotal;
    document.getElementById("playerDiceTotal").innerHTML = playerDiceTotal;

    console.log(
      "You lost! The computer won! Your dice total was",
      playerDiceTotal,
      "\n",
      "The computer's dice total was ",
      computerDiceTotal
    );
  } else {
    document.getElementById("diceWinner").innerHTML = "It was a tie";
    document.getElementById("computerDiceTotal").innerHTML = computerDiceTotal;
    document.getElementById("playerDiceTotal").innerHTML = playerDiceTotal;

    console.log(
      "The game was a tie. So sad. Your dice total was",
      playerDiceTotal,
      "\n",
      "And the computer's dice total was",
      computerDiceTotal
    );
  }
};
diceGame();
