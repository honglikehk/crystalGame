// 1. problem: when user clicks the game will start
// solution; when the user clicks, there will be an event handler to start the game

// the function does not run until the HTML is done loading
$(document).ready(function() {
  // VARIABLES: to track, wins and loses, valuation and total score of the user

  let valuation = [];
  let totalScore = 0;

  let wins = 0;
  let loses = 0;

  let randomNumbers = document.getElementById("randomNumber");
  let scoreWins = document.getElementById("wins");
  let scoreLoses = document.getElementById("loses");
  // let totalScores = document.getElementById("totalScore");

  const numberGenerator = function() {
    // generate random number when game is started = in valuation from 19-120
    valuation = Math.floor(Math.random() * 102) + 19;
    randomNumbers.textContent = valuation;
  };

  // function gemScoreGenerator() {
  //   let randomNumber = Math.floor(Math.random() * 12) + 1;
  //   return randomNumber;
  // }

  // console.log(gemScoreGenerator());
  //start game function

  const randNum = function() {
    return Math.floor(Math.random() * 12) + 1;
  };

  function startGame() {
    // create a variable that creates a random number generated from 1-12
    let gemScore1 = randNum();
    let gemScore2 = randNum();
    let gemScore3 = randNum();
    let gemScore4 = randNum();

    numberGenerator();
    // when gem 1-4 is clicked then something will happen
    $(".gem").on("click", function() {
      console.log(this.dataset.gemnumber);
      if (this.dataset.gemnumber === "1") {
        $("#totalScore").text((totalScore += gemScore1));
      } else if (this.dataset.gemnumber === "2") {
        $("#totalScore").text((totalScore += gemScore2));
      } else if (this.dataset.gemnumber === "3") {
        $("#totalScore").text((totalScore += gemScore3));
      } else if (this.dataset.gemnumber === "4") {
        $("#totalScore").text((totalScore += gemScore4));
      }

      // totalScores.textContent += this.alt;
      // console.log(this.alt);
    });

    // when a crystal is clicked, then add the value to the total score
  }

  startGame();
});
