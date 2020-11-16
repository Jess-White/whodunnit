import React from 'react';
import { addNewQuestion } from '../Services/QuestionAPI';
import RedundantQuestionComponent from '././RedundantQuestionComponent';
import SuccessComponent from '././SuccessComponent';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import { MYSTERYQUESTIONS } from '../Services/MysteryData';

export default class QuestionForm extends React.Component {
    state = {
      title: "",
      correct: "",
      hasRedundantError: false,
      hasSuccess: false
    }
    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    handleSubmit = (event) => {
      event.preventDefault() 
        addNewQuestion({title: this.state.title, correct: this.state.correct
        })
        .then(() => {
          this.props.handleQuestion({title: this.state.title, correct: this.state.correct
        })
          this.setState({
            title: "",
            correct: "",
            hasRedundantError: false,
            hasSuccess: true
          })
          this.myFormRef.reset()
        })
        .catch(() => {
          this.setState({
            title: "",
            correct: "",
            hasRedundantError: true,
            hasSuccess: false,
          })
          this.myFormRef.reset()
        })
        .then(() => {
          console.log(this.state.hasRedundantError)
        })
    }


//     .catch(err => {
//     if (err.response) {
//       // client received an error response (5xx, 4xx)
//     } else if (err.request) {
//       // client never received a response, or request never left
//     } else {
//       // anything else
//     }
// })

  render() {
    return (
        <Card style={{backgroundColor: "#000058"}}>
          <div className="card-header">
          Add Your Own Whodunnit? Question!
          </div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit} ref={(el) => this.myFormRef = el}>
              <div className="form-group">
                <h4>Enter the title of your favorite murder mystery:</h4>
                <input
                  type="text"
                  name="title"
                  placeholder="title"
                  value={this.title}
                  onChange={this.handleChange}
                  required
                  style={{
                    padding: "1%",
                    backgroundColor: "#ffff1b",
                    color: "#000080", 
                    fontSize: "20px", 
                    fontWeight: "bold"
                  }}
                />
              </div>
              <div className="form-group">
                <h4>Whodunnit?*</h4>
                <input
                  type="text"
                  name="correct"
                  placeholder="culprit"
                  value={this.correct}
                  onChange={this.handleChange}
                  required
                  style={{
                    padding: "1%",
                    backgroundColor: "#ffff1b",
                    color: "#000080", 
                    fontSize: "20px", 
                    fontWeight: "bold"
                  }}
                />
                <h4>*We would greatly appreciate it if you could phrase your answer according to the established format - "The Dame," "The Detective" - so as to maintain both house style guidelines and the diverting difficulty of the quiz. With sincerest gratitude and cordial regards, Management</h4>
              </div>
              <div className="text-center">
                <Button 
                  className="btn-lg" 
                  style={{
                    backgroundColor: "#ffff1b", 
                    color: "#000080", 
                    fontSize: "20px", 
                    fontWeight: "bold",
                    marginTop: "2%"
                  }} 
                  type="submit"
                >
                  Add Question
                </Button>
              </div>
            </form>
          </div>
          {this.state.hasRedundantError && <RedundantQuestionComponent></RedundantQuestionComponent>}
          
          {this.state.hasSuccess && <SuccessComponent></SuccessComponent>}
        </Card>
      );
    }
  }