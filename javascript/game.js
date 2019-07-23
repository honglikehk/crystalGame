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

    // from one to 12 ===
    //  totalScore = Math.floor(Math.random() * 12) + 1;
  }

  //start game function
  function startGame() {
    numberGenerator();
    // when gem 1 is clicked then something will happen
    $(".gem1").on("click", function() {
      alert("you clicked me!!");
      // $(".captain-planet").animate({ height: "300px" });
    });

    $(".gem2").on("click", function() {
      alert("BAH!!");
      // $(".captain-planet").animate({ height: "300px" });
    });

    $(".gem3").on("click", function() {
      alert("BOO!");
      // $(".captain-planet").animate({ height: "300px" });
    });

    $(".gem4").on("click", function() {
      alert("DOH!!");
      // $(".captain-planet").animate({ height: "300px" });
    });
  }

  startGame();
});
