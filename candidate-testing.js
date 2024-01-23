const input = require('readline-sync');
// PART TWO -- TODO 2: modify your quiz app to ask 5 questions

// PART ONE -- TODO 1.1a: Define candidateName
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, candidateAnswer
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";

// TODO: Variables for Part 2
let questions = [
  "Who was the first American woman in space? ", 
  "True or false: 5 kilometer == 5000 meters? ", 
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", 
  "What is the minimum crew size for the ISS? "
];
let correctAnswers = [ "Sally Ride", "true", "40", "Trajectory", "3" ];
let candidateAnswers = [];

function askForName() {
  // TODO 1.1b: Ask for candidate's name
  candidateName = input.question("Enter candidate's name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate each question and assign each response as candidateAnswer
  for (i=0; i<questions.length; i++) {
    candidateAnswers.push(input.question(questions[i]));
  }
  // console.log(`candidateAnswers: `, candidateAnswers);
}

function gradeQuiz() {
  // PART TWO
  for (i=0; i<candidateAnswers.length; i++) {
    console.log(`candidate answer: ${candidateAnswers[i]},\ncorrect answer: ${correctAnswers[i]}`)
  }

  //PART THREE -- TODO 3.2 use this variable to calculate the candidates score
  let numberCorrect = 0;
  
  for (i=0; i<questions.length; i++) {
    if (candidateAnswers[i] == correctAnswers[i]) { // == should pass "TrAjecTory"
      // console.log("correctAnswers", correctAnswers);
      numberCorrect++;
    }
  };

  // must declare grade after for-loop finishes
  let grade = (numberCorrect / questions.length) * 100;
  // console.log(grade+"% ", "# correct: ", numberCorrect);

  if (grade >= 80) {
    console.log(`You passed with a grade of ${grade}%`);
  } else {
    console.log(`You failed with a grade of ${grade}%`);
  };
  
  // console.log("grade:", grade, typeof grade);
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name
  console.log("Hi " + candidateName);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};