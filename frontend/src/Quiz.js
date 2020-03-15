import React from 'react';

import './App.css';
import {QuizData} from './QuizData';
import { render } from '@testing-library/react';


class Quiz extends React.Component{
  state = {
    userAnswer: null,
    currentQuestion: 0,
    options: []

  }

  loadQuiz = () =>{
    const {currentQuestion} = this.state;
    // this.setstate(() => {
    //   return {
    //     questions: QuizData[currentQuestion].question,
    //     options: QuizData[currentQuestion].options,
    //     answers: QuizData[currentQuestion].answer
    //   }
    // })
  }


  componentDidMount(){
    this.loadQuiz();
  }

  render(){
    const {questions, options} = this.state;
    return (
      <div className = "Quiz">
        {this.state.currentQuestion}
        {/* {this.state.currentQuestion} */}
      </div>
    )
  }
}

// function Quiz() {
//   return (
//     <div className="Quiz">
//       <h1>Quiz web</h1>

//     </div>
//   {/* {this.state.questions} */}
//   );
// }

export default Quiz;
