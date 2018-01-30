import { QUESTIONS } from './quiz.js';
const Question = require('./question.js').default;
const quizLength = QUESTIONS.length;
//**TODO ShowAnswers Button!!

// Create quiz object with questions within the object
let quiz = {}

document.addEventListener("DOMContentLoaded", function(event) {
    let totalQuestions = document.getElementById('total-questions')
    totalQuestions.innerHTML = quizLength
    setQuiz()
    runQuiz();
    document.addEventListener('click', function(e) {
      if (e.target && (e.target.className).includes("answer-choice")) {
        let answer = e.target.innerHTML[0]
        runQuiz(answer)
      }
    })
});

function setQuiz() {
  quiz.max = quizLength;
  for (let i=0;i<quizLength;i++) {
    quiz[`question${i}`] = new Question(QUESTIONS[i]["question"], QUESTIONS[i]["answerChoices"], QUESTIONS[i]["answer"])
  }
  quiz.correct = 0;

  // Make quiz iterable with quiz.next()
  quiz.next = function(answer) {
    if (answer) {
      let instanceOfQuestion = this[`question${this.max}`]
      if (instanceOfQuestion.checkAnswer(answer)) {
        this.correct += 1
      }
      alertAnswer(instanceOfQuestion.checkAnswer(answer))
    }
    this.max -= 1
    if (this.max < 0) {return false}
    else {return this[`question${this.max}`]}
  }
}

function runQuiz(answer) {
  let question = quiz.next(answer)
  if (!question) {return endQuiz()}
  let questionContainer = document.getElementById('question')
  questionContainer.innerHTML = null
  let questionDiv = document.createElement('div')
  questionDiv.innerHTML = question.question
  questionContainer.appendChild(questionDiv)

  let answerChoicesDiv = document.getElementById('answer-choices')
  answerChoicesDiv.innerHTML = null
  for (let answerChoice of Object.entries(question.answerChoices)){
    let answerChoiceOption = document.createElement('div')
    answerChoiceOption.className += "answer-choice"
    answerChoiceOption.innerHTML = `${answerChoice[0]}.  ${answerChoice[1]}`
    answerChoicesDiv.appendChild(answerChoiceOption)
  }

  let correctCount = document.getElementById('correct')
  correctCount.innerHTML = quiz.correct
}

function alertAnswer(answer) {
  let response;
  if (answer) {
    response = 'CORRECT!'
  } else {
    response = 'INCORRECT!'
  }
  alert(`Your answer was ${response}`)
}

function endQuiz() {
  alert (`You got ${quiz.correct} out of ${quizLength} for a score of ${quiz.correct/quizLength *100}%`)
  setQuiz()
  runQuiz()
}
