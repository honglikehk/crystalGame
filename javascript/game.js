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
  let scores = document.getElementById("totalScore");
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

  function reset() {
    totalScore = 0;
    scores.innerText = 0;
    startGame();
  }

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

      // select the appropriate gem stone and add it on a random number each time.
      if (this.dataset.gemnumber === "1") {
        $("#totalScore").text((totalScore += gemScore1));
      } else if (this.dataset.gemnumber === "2") {
        $("#totalScore").text((totalScore += gemScore2));
      } else if (this.dataset.gemnumber === "3") {
        $("#totalScore").text((totalScore += gemScore3));
      } else if (this.dataset.gemnumber === "4") {
        $("#totalScore").text((totalScore += gemScore4));
      }

      console.log(totalScore);
      console.log(valuation);
      // if totalScore = valuation then, reset the game and add 1 point to the wins
      if (totalScore === valuation) {
        wins++;
        scoreWins.innerText = wins;
        scores.innerText = totalScore;
        reset();

        // if total score exceeds valuation then, reset the game and add 1 point to the loses
      } else if (totalScore >= valuation) {
        loses++;
        scoreLoses.innerText = loses;
        scores.innerText = totalScore;
        reset();
      }

      // totalScores.textContent += this.alt;
      // console.log(this.alt);
    });

    // when a crystal is clicked, then add the value to the total score
  }

  startGame();
});
