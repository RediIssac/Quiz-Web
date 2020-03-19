import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';

class Quizzes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quizzes: []
    };
  }

  // This loads the database with questions since our database is not deployed 
  // and for someone to test the app on their local machine this will mydefault load questions
  LoadDatabase = () => {
    axios.post('/question/add', {
      quizId: "$%7Bquiz.id%7D",
      question: "When is the first confirmed coronavirus case in Korea?",
      possibleAnswer1: "January 20th", 
      possibleAnswer2: "January 5th",
      possibleAnswer3:"January 10th",
      possibleAnswer4:"January 9th",
      correctAnswer: "January 20th",
      description: "",
    })
    axios.post('/question/add', {
      quizId: "$%7Bquiz.id%7D",
      question: "What is NOT a major symptom of infection?",
      possibleAnswer1: "Fever 37.5", 
      possibleAnswer2: "cough",
      possibleAnswer3:"parsley",
      possibleAnswer4:"vomit",
      correctAnswer: "vomit",
      description: "",
    })
    axios.post('/question/add', {
      quizId: "$%7Bquiz.id%7D",
      question: "What word represents the letter 'T' in the NATO phonetic alphabet?",
      possibleAnswer1: "Tango",  
      possibleAnswer2: "Target", 
      possibleAnswer3:"Taxi",
      possibleAnswer4:"Turkey",
      correctAnswer: "Tango",
      description: "",
    })
  
    axios.post('/question/add', {
      quizId: "$%7Bquiz.id%7D",
      question: "Which American president appears on a one dollar bill?",
      possibleAnswer1:"George Washington",
      possibleAnswer2:  "Thomas Jefferson",
      possibleAnswer3: "Abraham Lincoln",
      possibleAnswer4:  "Benjamin Franklin",
      correctAnswer: "George Washington",
      description: "",
    })
    axios.post('/question/add', {
      quizId: "$%7Bquiz.id%7D",
      question: "What is the name of the Jewish New Year?",
      possibleAnswer1: "Rosh Hashanah", 
      possibleAnswer2:  "Elul",
      possibleAnswer3: "New Year",
      possibleAnswer4: "Succoss",
      correctAnswer: "Rosh Hashanah",
      description: "",
    })
  }
// this sends qet request to get the quizzes from the database
  componentDidMount() {
    this.LoadDatabase();
    axios.get('/startquiz')
      .then(res => {
        this.setState({ quizzes: res.data });
      });
  }
  // when rendering the quizzes are linked to their respective pages to enable dynamic routing
  render() {
    return (
      
      <div className="Quizzes">
        <h2>Quizzes</h2>
        <ul className="Topics">
          
          {this.state.quizzes.map(quiz => <li key={quiz.id}><Link to={`/Quizzes/Quiz/${quiz.id}`}>
          {quiz.name}</Link></li>
          )}
        </ul>
      </div>
    );
  }
}

export default Quizzes;
