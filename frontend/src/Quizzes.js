import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import quizService from "./quizService";

import Quiz from './Quiz';

class Quizzes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quizzes: []
    };
  }

  componentDidMount() {
    // axios.get('https://randomuser.me/api/')
    // axios.post('/question/add', {
    //   quizId: "$%7Bquiz.id%7D",
    //   question: "Which sign of the zodiac is represented by the Crab?",
    //   possibleAnswer1: "Cancer",
    //   possibleAnswer2: "Libra",
    //   possibleAnswer3:  "Virgo",
    //   possibleAnswer4:  "Sagittarius",
    //   correctAnswer: "Cancer",
    //   description: "",
    // })
    axios.get('/startquiz')

      // https://randomuser.me/api/
      .then(res => {
        // getQuestions = () => {
        // 
      //     quizService().then(question => {
      //         this.setState({
      //             questions: question
      //         });
      //     });
      //  };

        this.setState({ quizzes: res.data });
        console.log("======res.data======");
        
        console.log(res.data);

        console.log("======res.data======");
        // this.state.
        // console.log(this.state.quizzes);
        // { Object.values(this.state.quizzes.results[0].name) }
      });
  }

  render() {
    // const QuizItems =  this.state.quizzes.map((quiz, key) => <li key={quiz.id}>{quiz.name}</li>);
   
    return (
      
      <div className="Quizzes">
        <h2>Quizzes</h2>
        {/* {this.state.quizzes.results} */}
        <ul className="Topics">
          {this.state.quizzes.map(quiz => <li key={quiz.id}><Link to={`/Quizzes/Quiz/${quiz.id}`}>
          {quiz.name}</Link></li>
          )}
     {/* </li>}
     //${quiz.id}
        // <Link to="/Quizzes/Quiz">
        // <li>{QuizItems}</li>
        // </Link> */}
         
          {/* <a href="Quizzes/Quiz">Start Quiz</a>

          // {/* {Object.values(this.state.quizzes.results[0].name)} */}
          {/* <ul>
          //   {QuizItems}

          // </ul> */}
          {/* <li>{this.state.quizzes.results}</li> */}
          {/* <li>Biology</li>
          //     <li>General Knowledage</li> */}
        </ul>
      </div>
    );
  }
}

export default Quizzes;

 {/* { this.state.quizzes.results[0].name.map(obj => <li>{Object.values(obj)}</li>)} */}