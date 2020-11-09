import React, {useState} from "react";
import Card from 'react-bootstrap/Card';
import { pullTriviaRound } from '../Services/QuestionFunctions.js';
import Question from './Question.js'
import AllDoneAlert from './AllDoneAlert.js'
import CorrectAlert from './CorrectAlert.js'
import IncorrectAlert from './IncorrectAlert.js'
import Button from 'react-bootstrap/Button';

export default function TriviaRound() {
  const [scoreCorrect, setScoreCorrect] = useState(0)
  const [scoreIncorrect, setScoreIncorrect] = useState(0)
  const [getTriviaRound, setTriviaRound] = useState(pullTriviaRound())
  const [currentQuestion, setCurrentQuestion] = useState(getTriviaRound[0])
  const [index, setIndex] = useState(1)
  const [isFinished, setIsFinished] = useState(false)
  const [finalScore, setFinalScore] = useState(0)
  const [isCorrect, setCorrect] = useState(false)
  const [isIncorrect, setIncorrect] = useState(false)
  const [showFinalScore, setShowFinalScore] = useState(false)
  const [answerKey, setAnswerKey] = useState('')

    // this.checkIndex = this.checkIndex.bind(this);

    function resetQuiz() {
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
      console.log("waffle")
      if (index < 10) {
        setIndex(index + 1)
        console.log(index)
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
          <h1 style={{textAlign: "center"}}>{finalScore} out of 10! Good job!</h1>
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
