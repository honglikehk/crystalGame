var name = "Nick";

for (var i = 0; i < name.length; i++) {
  console.log("My name contains the letter " + name[i] + ".");
}

//other ways to use loops

for (var x = 2; x < 10000; x = x * 2) {
  console.log(x);
}

// powers of 3

for (var x = 3; x < 10000; x = x * 3) {
  console.log(x);
}

// rewrite using while loop

var x = 3;
while (x < 10000) {
  console.log(x);
  x = x * 3;
}

//awesome animals

var animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"];
for (var i = 0; i < animals.length; i++) {
  animals[i] = "Awesome " + animals[i];
}

// scorekeeper

var scores = { christine: 5, lily: 4, sam: 3 };

//random string generator
var alphabet = "abcdefghijklmnpqrstuvwxyz";
var randomString = "";

// while the random string length is less than 7 - than it will keep logging

while (randomString.length < 7) {
  // generate the random letter
  var randomNumber = alphabet[Math.floor(Math.random() * alphabet.length)];
  // to add a number to the randomString
  randomString += randomNumber;
}

// to console log the whole equation
console.log(randomString);

// while (randomString < 7) {
//   var i = Math.floor(Math.random() * alphabet.length);
//   alphabet[i] += randomString;
// }

// console.log(randomString);

// sheep counted
var sheepCounted = 0;
while (sheepCounted < 10) {
  console.log("I have counted " + sheepCounted + " sheep!");
  sheepCounted++;
}
console.log("Zzzzzzzzzz");

// hacker speak
var input = "javascript is awesome";
var output = "";
console.log(input);

for (var i = 0; i < input.length; i++) {
  if (input[i] === "a") {
    output += "4";
  } else if (input[i] === "e") {
    output += "3";
  } else if (input[i] === "i") {
    output += "1";
  } else if (input[i] === "o") {
    output += "0";
  } else {
    output += input[i];
  }
}

console.log(output);

// creating a function

var ourFirstFunction = function() {
  console.log("Hello World!");
};

ourFirstFunction();

// creaing a function with arguments

var sayHelloTo = function(name) {
  console.log("Hello " + name + "!");
};

sayHelloTo("Nick");

sayHelloTo("Lyra");

// printing cat faces

var drawCats = function(howManyTimes) {
  for (var i = 0; i < howManyTimes; i++) {
    console.log(i + " =^.^=");
  }
};

drawCats(100);

//passing mulitple arguments to a functions

var printMultipleTimes = function(howManyTimes, whatToDraw) {
  for (var i = 0; i < howManyTimes; i++) {
    console.log(i + " " + whatToDraw);
  }
};

printMultipleTimes(5, "=^.^=");

printMultipleTimes(4, "^_^");

printMultipleTimes(2, "(>_<)");

// a function that returns double a value

var double = function(number) {
  return number * 2;
};

double(3);

console.log(double(3));

var answer = double(5) + double(6);

console.log(answer);

answer = double(double(3));

console.log(answer);

// a function to pick a random word

var pickRandomWord = function(words) {
  return words[Math.floor(Math.random() * words.length)];
};

var randomWords = ["Planet", "Worm", "Flower", "Computer"];

pickRandomWord(randomWords);

console.log(pickRandomWord(randomWords));

pickRandomWord(["Charlie", "Raj", "Nicole", "Kate", "Sandy"]);

console.log(pickRandomWord(["Charlie", "Raj", "Nicole", "Kate", "Sandy"]));

// random insult generator

var randomBodyParts = ["Face", "Nose", "Hair"];
var randomAdjectives = ["Smelly", "Boring", "Stupid"];
var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

// pick a random body part from the randomBody parts array:
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
// pick a random adjective from the random adjectives array:
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
// pick a random word from the randomWords array:
var randomWord = randomWords[Math.floor(Math.random() * 5)];
// join all the random strings into a sentence:
var randomString =
  "Your " +
  randomBodyPart +
  " is like a " +
  randomAdjective +
  " " +
  randomWord +
  "!!!";

console.log(randomString);

var randomBodyParts = ["Face", "Nose", "Hair"];
var randomAdjectives = ["Smelly", "Boring", "Stupid"];
var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

//join all the random strings into a sentence:
var pickRandomWord = function(words) {
  return words[Math.floor(Math.random() * words.length)];
};

var randomString =
  "Your " +
  pickRandomWord(randomBodyParts) +
  " is like a " +
  pickRandomWord(randomAdjectives) +
  " " +
  pickRandomWord(randomWords) +
  "!!!";

console.log(randomString);

// making a random insult generator into a function
generateRandomInsult = function() {
  var randomBodyParts = ["Face", "Nose", "Hair"];
  var randomAdjectives = ["Smelly", "Boring", "Stupid"];
  var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

  // Join all the random strings into a sentence:
  var randomString =
    "Your " +
    pickRandomWord(randomBodyParts) +
    " is like a " +
    pickRandomWord(randomAdjectives) +
    " " +
    pickRandomWord(randomWords) +
    "!!!";
  return randomString;
};

generateRandomInsult();
console.log(generateRandomInsult());
console.log(generateRandomInsult());
console.log(generateRandomInsult());
console.log(generateRandomInsult());
console.log(generateRandomInsult());
console.log(generateRandomInsult());

// learning to use returns
var fifthLetter = function(name) {
  if (name.length < 5) {
    return;
  }
  return "The fifth letter of your name is " + name[4] + ".";
};

fifthLetter("Nicholas");
console.log(fifthLetter("Nicholas"));

fifthLetter("Nick");
console.log(fifthLetter("Nick"));

//return multiple times

var medalForScore = function(score) {
  if (score < 3) {
    return "Bronze";
  }
  if (score < 7) {
    return "Silver";
  }
  return "Gold";
};

function medalForScore(score) {
  if (score < 3) {
    return "Bronze";
  }
  if (score < 7) {
    return "Silver";
  }
  return "Gold";
}

function add(number1, number2) {
  return number1 + number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

console.log(add(multiply(36325, 9824), 777));

// are they the same?

// function areArraysSame(arr1, arr2) {
// for (var i = 0; i < arr1.length; i++) {
//     if (arr1.length != arr2.length) {
//       return false;
//     }
//     else if () {

//     }
//   }
// }

// console.log(areArraysSame([1, 2, 3], [1, 2, 3]));

// creating a hangman game

var name = prompt("What's your name?");
console.log("Hello " + name);

var likesCats = confirm("Do you like cats?");
if (likesCats) {
  console.log("You're a cool cat!");
} else {
  console.log("Yeah, that's fine. You're still cool!");
}

// are the arrays the same ?

function areArraysSame(arr1, arr2) {
  // the two arrays are not the same
  if (arr1.length != arr2.length) {
    return false;
  } else {
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        return true;
      } else {
        return false;
      }
    }
  }
}

console.log(areArraysSame([1, 2, 3], [1, 2, 3]));

console.log(areArraysSame([1, 2, 3], [4, 5, 6]));

console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4]));
