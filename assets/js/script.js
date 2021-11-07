// Declarations
var highScore = 0;
var quizIndex = 0;

var timer = false;
var minutes = 1;
var seconds = 5;
var question = 0

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
    question:"Which modern state is not within the boundaries of the Louisiana purchase",
    options: ["Idaho", "North Dakota", "Oklahoma", "Nebraska"],
    correctAnswer: "Idaho",
  },
  {
    question:"Which country did the famous Roman General and Statesman Pompey die",
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
  $("#initial-page").hide();
  // Hiding the final page
  $("#final-page").hide();
  // Call timer function
  //countdown();
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






//Initializing timer function
/*function countdown() {
  var count = setInterval(function () {
    if (minutes !== 0 && seconds !== 0) {
      $(".timer").html(`${minutes}:${seconds}`)
    } 
    if (minutes !== 0 && seconds === 0) { 
        minutes = minutes - 1;
        seconds = seconds + 59;
    }
    
    else {
      clearInterval(count);
      clearAll();
      window.alert("Time is up!");
    }
    seconds--;
  }, 1000);
}*/
