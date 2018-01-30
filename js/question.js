export default class Questions {
  constructor(question, answerChoices, answer) {
    this.question = question;
    this.answerChoices = answerChoices;
    this.answer = answer;
  }

  checkAnswer(answer) {
    if (this.answer === answer) {return true}
    return false
  }
}
