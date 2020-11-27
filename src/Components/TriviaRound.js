import React, {useState} from "react";
import Card from 'react-bootstrap/Card';
import { pullTriviaRound, randomizeQuestions } from '../Services/QuestionFunctions.js';
import Question from './Question.js'
import AllDoneAlert from './AllDoneAlert.js'
import CorrectAlert from './CorrectAlert.js'
import IncorrectAlert from './IncorrectAlert.js'
import Button from 'react-bootstrap/Button';

export default function TriviaRound() {
  const [scoreCorrect, setScoreCorrect] = useState(0)
  const [scoreIncorrect, setScoreIncorrect] = useState(0)
  const [questionArray, setQuestionArray] = useState(randomizeQuestions())
  const [getTriviaRound, setTriviaRound] = useState(pullTriviaRound())
  const [currentQuestion, setCurrentQuestion] = useState(getTriviaRound[0])
  const [index, setIndex] = useState(1)
  const [isFinished, setIsFinished] = useState(false)
  const [finalScore, setFinalScore] = useState(0)
  const [isCorrect, setCorrect] = useState(false)
  const [isIncorrect, setIncorrect] = useState(false)
  const [showFinalScore, setShowFinalScore] = useState(false)
  const [answerKey, setAnswerKey] = useState('')

  function sliceArray() {
    if (questionArray.length >= 10) {
      let slicedArray = getTriviaRound.map((roundQuestion) => {
        let testTitle = roundQuestion.title
        return questionArray.filter((question) => {
          if (question.title !== testTitle) {
            return question
        }
        })
    })
      setQuestionArray(slicedArray)
    } else {
      setQuestionArray(randomizeQuestions())
    }
    setTriviaRound(getTriviaRound)
    console.log(questionArray.length)
  }

  // array.filter(item => { if (item.id ==id) return item.name} )

//   const items = ['a', 'b', 'c', 'd', 'e', 'f']
// const valueToRemove = 'c'
// const filteredItems = items.filter(function(item) {
//   return item !== valueToRemove
// })
// ["a", "b", "d", "e", "f"]

  // var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  //   var filtered = array.filter(function(value, index, arr){ 
  //       return value > 5;
  //   });
    //filtered => [6, 7, 8, 9]
    //array => [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]


    // this.checkIndex = this.checkIndex.bind(this);

    function resetQuiz() {
      setQuestionArray(sliceArray())
      setTriviaRound(pullTriviaRound())
      setCurrentQuestion(getTriviaRound[0])
      setIndex(0)
      setIsFinished(false)
      setCorrect(false)
      setIncorrect(false)
      setFinalScore(0)
      setShowFinalScore(false)
      setScoreCorrect(0)
      setScoreIncorrect(0)
    }

    function handleAnswerSelected(isCorrect) {
      if (isCorrect) {
        setScoreCorrect(scoreCorrect + 1)
        setCorrect(true)
        setIncorrect(false)

      } else {
        setScoreIncorrect(scoreIncorrect + 1)
        setIncorrect(true)
        setCorrect(false)
      }
      setAnswerKey(currentQuestion.correct)
      handleCurrentQuestion()
    }

    function handleIsFinished() {
      setIsFinished(true)
    }

    function handleFinalScore() {
    setFinalScore(scoreCorrect)
    setShowFinalScore(true)
  }

    function handleCurrentQuestion() {
      if (index < 10) {
        setIndex(index + 1)
        setCurrentQuestion(getTriviaRound[index])
        console.log(getTriviaRound[index])
      }
      else if (index === 10) {
        handleIsFinished()
      }
    }

    return (
      <div>
      <Card style={{backgroundColor: "#22031F"}}>
      <div>
        <div className="meter">
          <progress style={{backgroundColor: "#22031F", width: "100%"}} max="10" value={index}></progress>
        </div>
        {isIncorrect && <IncorrectAlert></IncorrectAlert>}
        {isIncorrect ? (
          <div>
            <h2 style={{textAlign: "center"}}>The true culprit was</h2>
            <h2 style={{color: "#9affcf", fontWeight: "bold", textAlign: "center"}}>{answerKey}</h2>
          </div>
        ) : null }
        {isCorrect && <CorrectAlert></CorrectAlert>}
        {isFinished && <AllDoneAlert></AllDoneAlert>}
        <div>
          {isFinished ? (
          <Button 
            className="btn-lg"
            style={{
              textAlign: "center",
              width: "45%",
              borderColor: "#319b89",
              backgroundColor: "#319b54", 
              color: "#0c2715", 
              fontSize: "20px", 
              fontWeight: "bold",
              margin: "3%"
            }} onClick={handleFinalScore}>See Final Score</Button>
          ) : null }
          {isFinished ? (
          <Button 
            className="btn-lg"
            style={{
              textAlign: "center",
              width: "45%",
              borderColor: "#319b89",
              backgroundColor: "#319b54", 
              color: "#0c2715", 
              fontSize: "20px", 
              fontWeight: "bold",
              marginLeft: "1%"
            }} onClick={resetQuiz}>Play Again</Button>
          ) : null }
          {showFinalScore ? (
            <div>
            <h1 style={{textAlign: "center"}}>{finalScore} out of 10!</h1>
            <div style={{backgroundColor: "#0c2715"}}>
            {finalScore >= 2 && finalScore < 4 ? (

              <h2 style={{color: "#9affcf", textAlign: "center", fontWeight: "bold"}}>You are the Bumbling Inspector. You mean well, and you want to find the murderer, but you just can't interpret the clues correctly and at the end of the day, you're humiliated by the little old lady you shooed out of the crime scene. For shame!</h2>
            ) : null}

            {finalScore >= 4 && finalScore < 6 ? (

              <h2 style={{color: "#9affcf", textAlign: "center", fontWeight: "bold"}}>You are the Precocious Girl Guide. You might be nine years old, but you somehow manage to find yourself in the thick of things, coming forward with the final clue. Nice work, kid! Now beat it!</h2>
            ) : null}

            {finalScore >= 6 && finalScore < 8 ? (

              <h2 style={{color: "#9affcf", textAlign: "center", fontWeight: "bold"}}>You are the Local Busybody. Obnoxious, but perceptive - your obsessive interest in your neighbors makes you a vital source of information. Be careful, though - if you get too close to the heart of the mystery, you'll be bumped off!</h2>
            ) : null}

            {finalScore >= 8 && finalScore < 10 ? (

              <h2 style={{color: "#9affcf", textAlign: "center", fontWeight: "bold"}}>You are the Shrewd Old Crone. Nothing gets by you. You catch the killer every time. Even the paternalistic police detective has to hand it to you.</h2>
            ) : null}

            {finalScore >= 10 ? (

              <h2 style={{color: "#9affcf", textAlign: "center", fontWeight: "bold"}}>You are My Mom. Hi, Mom!</h2>
            ) : null}
          }
          </div>
          </div>
          ) : null }
        </div>
          {!isFinished ? (
          <Question question={currentQuestion} handleAnswerSelected={handleAnswerSelected} />
          ) : null }
        </div>
      </Card>
      </div>
    );
  };
