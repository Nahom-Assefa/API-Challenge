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

function start () {
  // Hiding the initial page
  $("h1").empty();
  // Hiding the final page
  $("h3").empty();
  // Call timer function
  countdown();
  // call loop
  following();
};

// store the scores
function inputScore() {
  localStorage.setItem("highscore", score);
  localStorage.setItem("highscoreName", document.getElementById('name').value);
  retrieveScore();
}

// retrieve scores
function retrieveScore() {
  var hsn = localStorage.getItem("highscoreName");
  var hs = localStorage.getItem("highScore");
  $("#mainBody").empty();
  $("#mainBody").prepend(
    `<h2> ${hsn}'s highscore is:</h2>`,
    `<h1> ${hs} </h1>`,
    '<button onclick="clear()">Clear score!</button>',
    `<button onclick="reSet()">Play Again!</button>`
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
  seconds = 10;
  count = null;

  $("#timeLeft").html(seconds);

  $("#mainBody").empty();

  $("#mainBody").prepend(
    "<h1> Geography Code Quiz </h1>",
    '<h3>Click to play!</h3>',
    `<button id= "btn-start" class= "bg-warning" onclick="start()">Start!</button>`
  );
}

//deduct 15seconds
function error() {
  timeLeft -= 15;
  following();
}

//increases score for correct answer
function success() {
  score += 1;
  following();
}

//Initializing timer function
function countdown() {
  count = setInterval(function () {
    $("#timeLeft").html(`${seconds}`);
    if (seconds <= 0) {
      clearInterval(count);
      gameEnd();
    }
    seconds--;
  }, 1000);
}


//end game function
function gameEnd() {
  clearInterval(count);
  window.alert("Time is up!");
  $("#mainBody").empty();
  $("#mainBody").prepend(
    `<h2>Game Over</h2>`,
    `<h3> You got ${score}/${total} questions correct! </h3>`,
    `<input type="text" id="name" placeholder="Initials">`,
    `<button onclick="inputScore()">Set score!</button>`
  );
}

function following() {
  currentQuestion++;

  if (currentQuestion > questionsArray.length) {
    gameEnd();
  }

  let mainBody = "<h2>" + questionsArray[currentQuestion].question + "</h2>";

  for (let i = 0; i < questionsArray[currentQuestion].options.length; i++) {
    var btnEntry = '<button onclick="[ANS]">[CHOICE]</button>';
    btnEntry = btnEntry.replace(
      "[CHOICE]",
      questionsArray[currentQuestion].options[i]
    );
    if (
      questionsArray[currentQuestion].options[i] ==
      questionsArray[currentQuestion].correctAnswer
    ) {
      btnEntry = btnEntry.replace("[ANS]", "correct()");
    } else {
      btnEntry = btnEntry.replace("[ANS]", "incorrect()");
    }
    mainBody += btnEntry;
  }

  $("#mainBody").prepend(mainBody);
}

/*questionsArray.forEach(function (item, index) {
    var cash = item.question[question];
    console.log(cash);

$("#question-title").html(item);
  });
  
   create elements that make up a task item
  var optionLi = $("<li>").addClass("list-group-item");

   create btn
  var btn = $(".btn").addClass("option-btn").text("hello");

   append btn element to parent li
  optionLi.append(btn);

   append to ul list on the page
  $("#options").append(optionLi);*/
