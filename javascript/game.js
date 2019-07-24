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
  let totalScores = document.getElementById("totalScore");

  function numberGenerator() {
    // generate random number when game is started = in valuation from 19-120
    valuation = Math.floor(Math.random() * 102) + 19;
    randomNumbers.textContent = valuation;
  }

  // function gemScoreGenerator() {
  //   let randomNumber = Math.floor(Math.random() * 12) + 1;
  //   return randomNumber;
  // }

  // console.log(gemScoreGenerator());
  //start game function
  function startGame() {
    // create a variable that creates a random number generated from 1-12
    let gemScore1 = Math.floor(Math.random() * 12) + 1;
    let gemScore2 = Math.floor(Math.random() * 12) + 1;
    let gemScore3 = Math.floor(Math.random() * 12) + 1;
    let gemScore4 = Math.floor(Math.random() * 12) + 1;

    numberGenerator();
    // when gem 1-4 is clicked then something will happen
    $(".gem1").on("click", function() {
      $(this).attr("alt", gemScore1);
      totalScores.textContent = this.alt;
      console.log(this.alt);
    });

    $(".gem2").on("click", function() {
      $(this).attr("alt", gemScore2);
      totalScores.textContent = this.alt;
      console.log(this.alt);
    });

    $(".gem3").on("click", function() {
      $(this).attr("alt", gemScore3);
      totalScores.textContent = this.alt;
      console.log(this.alt);
    });

    $(".gem4").on("click", function() {
      $(this).attr("alt", gemScore4);
      totalScores.textContent = this.alt;
      console.log(this.alt);
    });

    // when a crystal is clicked, then add the value to the total score
    $(".diamond").on("click", function() {
      // dont know yet
      // problem: we need to add the scores in textContent so that whenever, someone clicks the button, the score is added.
    });
  }

  startGame();
});
