// Declarations
var score = 0;
var total = 8;
var currentQuestion = -1;
var count;
var seconds = 90;
var highScore = 0;

// stored values in objects array
const questionsArray = [
  {
    head: "Which country does not border France",
    options: ["Belgium", "Switzerland", "Luxembourg", "Netherlands"],
    correctAnswer: "Netherlands",
  },
  {
    head: "Which is not a province of Canada",
    options: ["Yukon", "Tromelin", "Nova Scotia", "New Brunswick"],
    correctAnswer: "Tromelin",
  },
  {
    head: "Which modern state is not within the boundaries of the Louisiana purchase",
    options: ["Idaho", "North Dakota", "Oklahoma", "Nebraska"],
    correctAnswer: "Idaho",
  },
  {
    head: "Which country did the famous Roman General and Statesman Pompey die",
    options: ["Gaul", "Greece", "Egypt", "Persia"],
    correctAnswer: "Egypt",
  },
  {
    head: "Where is Julian Assange currently residing",
    options: ["Russia", "United States", "Ecuador", "England"],
    correctAnswer: "England",
  },
  {
    head: "Which country did coffee originate in",
    options: ["Brazil", "Vietnam", "Ethiopia", "Philippines"],
    correctAnswer: "Ethiopia",
  },
  {
    head: "Which country was Elon Musk born in",
    options: ["England", "Kenya", "South Africa", "Australia"],
    correctAnswer: "South Africa",
  },
  {
    head: "Which country has Seoul as the capital",
    options: ["South Korea", "Indonesia", "Myanmar", "Pakistan"],
    correctAnswer: "South Korea",
  },
];

//Start game
function start() {
  // Hiding the initial page
  $("h1").empty();
  // Hiding the final page
  $("h3").empty();
  // Call timer function
  countdown();
  // call loop
  following();
}

// store the scores
function inputScore() {
  if (score > localStorage.getItem("highscore")) {
    localStorage.setItem("highscore", score);
    localStorage.setItem(
      "highscoreName",
      document.getElementById("name").value
    );
  }

  retrieveScore();
}

// retrieve scores
function retrieveScore() {
  var hsn = localStorage.getItem("highscoreName");
  var hs = localStorage.getItem("highscore");
  console.log(hs);
  $("#mainBody").empty();
  $("#mainBody").prepend(
    `<h2> ${hsn}'s highscore is:</h2>`,
    `<h1> ${hs} </h1>`,
    `<button onclick="clearIt()">Clear score!</button>`,
    `<button onclick="reSet()">Play Again!</button>`
  );
}

// clearing local storage
function clearIt() {
  localStorage.clear();
  $("#mainBody").empty();
  clearInterval(count);
  score = 0;
  currentQuestion = -1;
  seconds = 90;
  count = null;
  timeLeft = 100;

  $("#timeLeft").html(seconds);
  $("#mainBody").prepend(
    "<h1> Geography Code Quiz </h1>",
    "<h3>Click to play!</h3>",
    `<button id= "btn-start" class= "bg-warning" onclick="start()">Start!</button>`
  );
}

//reset the game
function reSet() {
  clearInterval(count);
  score = 0;
  currentQuestion = -1;
  seconds = 90;
  count = null;
  timeLeft = 100;

  $("#timeLeft").html(seconds);

  $("#mainBody").empty();

  $("#mainBody").prepend(
    "<h1> Geography Code Quiz </h1>",
    "<h3>Click to play!</h3>",
    `<button id= "btn-start" class= "bg-warning" onclick="start()">Start!</button>`
  );
}

//deduct 10 seconds
function error() {
  seconds -= 10;
  $("#mainBody").append("<h3>Sorry wrong answer </h3>");
  setTimeout(following, 1500);
}

//increases score for correct answer
function success() {
  score += 1;
  $("#mainBody").append("<h3> Correct answer! </h3>");
  setTimeout(following, 1500);
}

//Initializing timer function
function countdown() {
  count = setInterval(function () {
    $("#timeLeft").html(`${seconds}`);
    if (seconds <= 0) {
      clearInterval(count);
      alert("time is up!");
      gameEnd();
    }
    seconds--;
  }, 1000);
}

//end game function
function gameEnd() {
  clearInterval(count);
  $("#mainBody").empty();
  $("#mainBody").prepend(
    `<h2>Game Over</h2>`,
    `<h3> You got ${score}/${total} questions correct! </h3>`,
    `<input type="text" id="name" placeholder="Initials">`,
    `<button onclick="inputScore()">Set score!</button>`
  );

  if (score < localStorage.getItem("highscore")) {
    $("#mainBody").append("Sorry you did not get the highscore");
  }
}

// looping function comparing option selected vs answer
function following() {
  $("#mainBody").empty();
  currentQuestion++;
  console.log(currentQuestion);

  if (currentQuestion >= questionsArray.length) {
    gameEnd();
    return;
  }

  let mainBody = "<h2>" + questionsArray[currentQuestion].head + "</h2>";
  for (let i = 0; i < questionsArray[currentQuestion].options.length; i++) {
    var btnEntry = '<button onclick="[answer]">[option]</button>';
    btnEntry = btnEntry.replace(
      "[option]",
      questionsArray[currentQuestion].options[i]
    );
    if (
      questionsArray[currentQuestion].options[i] ==
      questionsArray[currentQuestion].correctAnswer
    ) {
      btnEntry = btnEntry.replace("[answer]", "success()");
    } else {
      btnEntry = btnEntry.replace("[answer]", "error()");
    }
    mainBody += btnEntry;
  }

  $("#mainBody").prepend(mainBody);
}
