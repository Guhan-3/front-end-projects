const quizQuestions = [
  {
    question: "What is the capital of France?",
    answers: {
      a: "Berlin",
      b: "Madrid",
      c: "Paris",
      d: "Lisbon",
    },
    correctAnswer: "c",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: {
      a: "Earth",
      b: "Mars",
      c: "Jupiter",
      d: "Saturn",
    },
    correctAnswer: "b",
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    answers: {
      a: "Harper Lee",
      b: "Mark Twain",
      c: "Jane Austen",
      d: "Ernest Hemingway",
    },
    correctAnswer: "a",
  },
];

function buildQuiz() {
  const quizContainer = document.getElementById("quiz");
  const output = [];

  quizQuestions.forEach((question, questionIndex) => {
    const answers = [];
    for (const letter in question.answers) {
      answers.push(
        `<li>
            <label>
              <input type="radio" name="question${questionIndex}" value="${letter}">
              ${letter} : ${question.answers[letter]}
            </label>
          </li>`
      );
    }

    output.push(
      `<div class="question"> ${question.question} </div>
        <ul class="answers"> ${answers.join("")} </ul>`
    );
  });

  quizContainer.innerHTML = output.join("");
}

function submitQuiz() {
  const quizContainer = document.getElementById("quiz");
  const answerContainers = quizContainer.querySelectorAll(".answers");
  let score = 0;

  quizQuestions.forEach((question, questionIndex) => {
    const answerContainer = answerContainers[questionIndex];
    const selectedAnswer = (
      answerContainer.querySelector(
        `input[name=question${questionIndex}]:checked`
      ) || {}
    ).value;

    if (selectedAnswer === question.correctAnswer) {
      score++;
      answerContainers[questionIndex].style.color = "green";
    } else {
      answerContainers[questionIndex].style.color = "red";
    }
  });

  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = `You scored ${score} out of ${quizQuestions.length}`;
}

buildQuiz();
