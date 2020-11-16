import { MYSTERYQUESTIONS, ANSWEROPTIONS } from './MysteryData';
import { getQuestionData } from './QuestionAPI';

//Original quiz question formatting:

// make a function to create a new array for each quiz out of the constant QUESTIONDATA

export const createQuizArray = () => {
  let questionDataArray = [];
  MYSTERYQUESTIONS.forEach((question) => {
    questionDataArray.push(question);
  })
  return questionDataArray;
}

export const createUserGeneratedQuestionArray = () => {
  let userGeneratedQuestionArray = [];
  getQuestionData.forEach((question) => {
    userGeneratedQuestionArray.push(question);
  })
  return userGeneratedQuestionArray;
}



// make a function to randomize the questions in the array from createQuizArray

export const randomizeQuestions = () => {
  let randomizedArray = createQuizArray();
  for (let i = randomizedArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = randomizedArray[i]
    randomizedArray[i] = randomizedArray[j]
    randomizedArray[j] = temp
  }
  return randomizedArray
}

// make a function to create an array that holds a round of ten trivia questions from the array created in randomizeQuestions

export const pullTriviaRound = () => {
  let roundArray = []
  let pullArray = randomizeQuestions()
  let counter = 0
  while (counter < 10) {
    roundArray.push(pullArray[counter])
    pullArray.shift()
    counter += 1
  }
  return roundArray
}

//User generated functions:

// Create a function to reformat the user-generated questions from the backend so that they look like the original questions: 

// {
//   title: "A Pocket Full of Rye",
//   correct: "The Gentleman Caller",
//   answers: ["The Chambermaid", "The Gentleman Caller", "The Housekeeper", "The Matriarch"]
// }

export const createAnswerArray = () => {
  let answerDataArray = [];
  ANSWEROPTIONS.forEach((answer) => {
    answerDataArray.push(answer);
  })
  return answerDataArray;
}

//randomize the answer array

export const randomizeAnswers = () => {
  let randomizedAnswers = createAnswerArray();
  for (let i = randomizedAnswers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = randomizedAnswers[i]
    randomizedAnswers[i] = randomizedAnswers[j]
    randomizedAnswers[j] = temp
  }
  return randomizedAnswers
}

//make a function to reformat User Questions

export const reformatUserQuestions = () => {
  let randomizedAnswerArray = randomizeAnswers();
  let reformattedUserArray = createUserGeneratedQuestionArray().map((question) => {
    question.answers = []
    question.answers.push(question.correct)
    let counter = 0
    while (counter < 4) {
      question.answers.push(randomizedAnswerArray[counter])
      counter += 1
    }
    for (let i = question.answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i)
      const temp = question.answers[i]
      question.answers[i] = question.answers[j]
      question.answers[j] = temp
    }
    return question
  })
  return reformattedUserArray
}

// Create a function to mix them in with the incorrect answers array, and add it to the available questions

export const combineQuestionArrays = () => {
  let userQuestionArray = reformatUserQuestions();
  let originalQuestionArray = createQuizArray();
  let concatQuestionArray = originalQuestionArray.concat(userQuestionArray)
  let randomizedCombinedArray = concatQuestionArray
  for (let i = randomizedCombinedArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = randomizedCombinedArray[i]
    randomizedCombinedArray[i] = randomizedCombinedArray[j]
    randomizedCombinedArray[j] = temp
  }
  return randomizedCombinedArray
}

// (NOT IN USE) make function to select one question from the question array to display
//and remove it from the question array (NOT IN USE)

export const getQuestion = () => {
    let thisPlayArray = createQuizArray()
    let randomNumber = Math.floor(Math.random() * thisPlayArray.length);
    let randomQuestion = (thisPlayArray[randomNumber]);
    thisPlayArray.splice(randomNumber)
    return randomQuestion
}

export const pullTwentyQuestions = () => {
  let twentyQuestionsArray = []
  let pullArray = randomizeQuestions() 
  let counter = 0
  while (counter < 20) {
    twentyQuestionsArray.push(pullArray[counter])
    pullArray.shift()
    counter += 1
  }
  return twentyQuestionsArray
}

export const pullMultipleRounds = () => {
  let allRoundsArray = []
  let singleRoundArray = []
  let pullArray = randomizeQuestions
}