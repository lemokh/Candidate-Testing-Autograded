const input = require('readline-sync');
// PART TWO -- TODO 2: modify your quiz app to ask 5 questions

// PART ONE -- TODO 1.1a: Define candidateName
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, candidateAnswer
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";



//TODO: Variables for Part 2
let questions = [
  "Who was the first American woman in space? ", 
  "5 kilometer == 5000 meters: true or false: ? ", 
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 0? ", 
  "What is the minimum crew size for the ISS? "
];
let correctAnswers = [ "Sally Ride", "true", 40, 8, 3 ];

let candidateAnswers; // = input.question(questions);
// !! this doesn't allow me to store each answer in an array !!
// so doing this on line 39 instead via responses array in for loop

let responses = []; // using this instead of: candidateAnswers = input.question(questions);

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Enter candidate's name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate each question and assign each response as candidateAnswer
  for (i=0; i<questions.length; i++) {
    responses.push(input.question(questions[i]));
  }
  // console.log(`responses: `, responses);
}

function gradeQuiz() {
  // PART TWO
 for (i=0; i<responses.length; i++) {
  console.log(`candidate response: ${responses[i]},\ncorrect answer: ${correctAnswers[i]}`)
 }
  //PART THREE -- TODO 3.2 use this variable to calculate the candidates score
  let numberCorrect = 0;
  
  for (i=0; i<questions.length; i++) {
    if (responses[i] == correctAnswers[i]) {
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
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name
  console.log("Hi " + candidateName);
  askQuestion();
  gradeQuiz();
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