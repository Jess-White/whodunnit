import axios from 'axios';

//DATABASE FUNCTIONS:

//Create a function to add a question to the database: 

export const addNewQuestion = ({title, correct}) => {
  return axios
    .post('/api/questions', {title, correct})
    .then(response => response.data)
}

//Create a function to pull in user-generated questions for comparison
//Create a function to pull questions from the database

export const getQuestionData = () => {
  return axios('/api/votes')
    .then(response => response.data)
}