import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
export default function Question({question, handleAnswerSelected, handleGetQuestion, handleGetCurrentQuestion}) {

    return (
      <div>
      <div>
        <div>
          <Card style={{backgroundColor: "#22031F", padding: "2%"}}>
          <Card.Title style={{backgroundColor: "#1C2321", padding: "1%"}}>
          <h2>In <span style={{fontStyle: "italic"}}>{question.title}</span>, Whodunnit?</h2></Card.Title>
          <ListGroup variant="flush">

          {question.answers.map(answer =>
          <ListGroup.Item style={{backgroundColor: "#2f1e2d", cursor: "pointer"}} 
              onClick={() => {
                if (answer === question.correct) {
                  handleAnswerSelected(true)
                }
                else {
                  handleAnswerSelected(false)}
                }}>
              <h4>{answer}</h4>
              </ListGroup.Item>
          )}
          </ListGroup>
          </Card>
        </div>
      </div>
      </div>
    );
  };