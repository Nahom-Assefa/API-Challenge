// Declarations
var score = 0;
var total = 8;
var currentQuestion = -1;
var timeLeft = 0;
var count;

var highScore = 0;
var quizIndex = 0;

var minutes = 1;
var seconds = 10;
var question = 0;

var startButton = document.querySelector("start-btn");
//var question = "Which country does not border France";

// stored values in objects array
const questionsArray = [
  {
    question: "Which country does not border France",
    options: ["Belgium", "Switzerland", "Luxembourg", "Netherlands"],
    correctAnswer: "Netherlands",
  },
  {
    question: "Which is not a province of Canada",
    options: ["Yukon", "Tromelin", "Nova Scotia", "New Brunswick"],
    correctAnswer: "Tromelin",
  },
  {
    question:
      "Which modern state is not within the boundaries of the Louisiana purchase",
    options: ["Idaho", "North Dakota", "Oklahoma", "Nebraska"],
    correctAnswer: "Idaho",
  },
  {
    question:
      "Which country did the famous Roman General and Statesman Pompey die",
    options: ["Gaul", "Greece", "Egypt", "Persia"],
    correctAnswer: "Egypt",
  },
  {
    question: "Where is Julian Assange currently residing",
    options: ["Russia", "United States", "Ecuador", "England"],
    correctAnswer: "England",
  },
  {
    question: "Which country did coffee originate in",
    options: ["Brazil", "Vietnam", "Ethiopia", "Philippines"],
    correctAnswer: "Ethiopia",
  },
  {
    question: "Which country was Elon Musk born in",
    options: ["England", "Kenya", "South Africa", "Australia"],
    correctAnswer: "South Africa",
  },
  {
    question: "Which country has Seoul as the capital",
    options: ["South Korea", "Indonesia", "Myanmar", "Pakistan"],
    correctAnswer: "South Korea",
  },
];

$("#btn-start").on("click", function () {
  // Hiding the initial page
  $("h1").hide();
  // Hiding the final page
  $("h3").hide();
  // Call timer function
  countdown();
  // Display first question
  questionsArray.forEach(function (item, index) {
    var cash = item.question[question];
    console.log(cash);

    //$("#question-title").html(item);
  });

  // create elements that make up a task item
  var optionLi = $("<li>").addClass("list-group-item");

  // create btn
  var btn = $(".btn").addClass("option-btn").text("hello");

  // append btn element to parent li
  optionLi.append(btn);

  // append to ul list on the page
  $("#options").append(optionLi);
});

/* loop over questionsArray
questionsArray.forEach(function (item, index) {
  for (i = 0; i < item.options.length; i++) {}
});*/

// store the scores
function inputScore() {
  localStorage.setItem("highscore", score);
  localStorage.setItem("highscoreName", $("#name").value);
  retrieveScore();
}

// retrieve scores
function retrieveScore() {
  var hsn = localStorage.getItem("highscoreName");
  var hs = localStorage.getItem("highScore");
  $("#mainBody").prepend(
    `<h2>${hsn}'s highscore is:</h2>`,
    `<h1>${hs}</h1>`,
    '<button onclick="clearScore()">Clear score!</button>',
    `<button onclick="resetGame()">Play Again!</button>`
  );
}

//clears local storage
function clear() {
  localStorage.setItem("highscore", "");
  localStorage.setItem("highscoreName", "");
  reSet();
}

//reset the game
function reSet() {
  clearInterval(count);
  score = 0;
  currentQuestion = -1;
  timeLeft = 0;
  count = null;

  $("#timeLeft").html(timeLeft);

  $("#mainBody").prepend(
    "<h1> Geography Code Quiz </h1>",
    '<h3><button onclick="start()">Start!</button></h3>'
  );
}

//Initializing timer function
function countdown() {
  count = setInterval(function () {
    if (minutes !== 0 && seconds !== 0) {
      $("#timeLeft").html(`${seconds}`);
    } else {
      clearInterval(count);
      gameEnd();
    }
    seconds--;
  }, 1000);
}

//end game function
function gameEnd() {
  clearInterval(timer);
  window.alert("Time is up!");
  $("#mainBody").prepend(
    `<h2>Game Over</h2>`,
    `<h3> You got ${score}/${total} questions correct! </h3>`,
    `<input type="text" id="name" placeholder="Initials">`,
    `<button onclick="setScore()">Set score!</button>`
  );
}
