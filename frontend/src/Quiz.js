// import React from 'react';
// import './App.css';
// // import {QuizData} from './QuizData';
// import Question from './Question';
// import Quizzes from './Quizzes';
// import PropTypes from 'prop-types';
// import QuestionCount from './QuestionCount';
// import AnswerOption from './AnswerOption';

// // function Quiz(props) {
// //   return (
// //       // <div className="quiz">
// //       //   <QuestionCount
// //       //     counter={props.questionId}
// //       //     total={props.questionTotal}
// //       //   />
// //       //   <Question content={props.question} />
// //       //   <ul className="answerOptions">
// //       //     {props.answerOptions.map(renderAnswerOptions)}
// //       //   </ul>
// //       // </div>
// //       <h5>debugging</h5>
// //   );
// // }

// // Quiz.propTypes = {
// //   answer: PropTypes.string.isRequired,
// //   answerOptions: PropTypes.array.isRequired,
// //   counter: PropTypes.number.isRequired,
// //   question: PropTypes.string.isRequired,
// //   questionId: PropTypes.number.isRequired,
// //   questionTotal: PropTypes.number.isRequired,
// //   onAnswerSelected: PropTypes.func.isRequired
// // };

// // function renderAnswerOptions(key) {
// //   return (
// //     <AnswerOption
// //       key={key.content}
// //       answerContent={key.content}
// //       answerType={key.type}
// //       // answer={props.answer}
// //       // questionId={props.questionId}
// //       // onAnswerSelected={props.onAnswerSelected}
// //     />
// //   );
// // }

// // export default Quiz;




// class Quiz extends React.Component{
//   state = {
//     userAnswer: null,
//     currentQuestion: 0,
//     options: []

//   }
 
//   // loadQuiz = () =>{
//   //   const {currentQuestion} = this.state;
//   //   // this.setstate(() => {
//   //   //   return {
//   //   //     questions: QuizData[currentQuestion].question,
//   //   //     options: QuizData[currentQuestion].options,
//   //   //     answers: QuizData[currentQuestion].answer
//   //   //   }
//   //   // })
//   // }


//   // componentDidMount(){
//   //   this.loadQuiz();
//   // }

//   render(){
//     const {questions, options} = this.state;
//     return (
//       <div className = "Quiz">
//       <Question content="What is your favourite food?" />
      
      
//         {/* {this.state.currentQuestion} */}
//         {/* {this.state.currentQuestion} */}
//       </div>
//     )
//   }
// }

// // function Quiz() {
// //   return (
// //     <div className="Quiz">
// //       <h1>Quiz web</h1>

// //     </div>
// //   {/* {this.state.questions} */}
// //   );
// // }

// export default Quiz;
import React, {Component} from 'react';
import ReactDom from "react-dom";
import "./style.css";
import quizService from "./quizService";
import QuestionBox from './QuestionBox';
import Result from './Result';
import axios from 'axios';

class Quiz extends Component{
    constructor(props){
        super(props);
        this.state = {
            questions: [],
            score: 0,
            responses:0
        };

    }
    // state = {
    //     questions: [],
    //     score: 0,
    //     responses:0
    // };

    getQuestions = () => {
        
        quizService().then(question => {
            this.setState({
                questions: question
            });
        });
    };
    // getQuestions = () => {
    //     axios.get('http://localhost:8080/app/startquiz'+this.props.match.params.id)
    //     .then(question => {
    //         this.setState({
    //             questions: question
    //         });
    //     });
    // };
    computeAnswer = (answer, correctAnswer) => {
        if (answer === correctAnswer){
             this.setState({
                score: this.state.score + 1
             });
        }
        this.setState({
            responses: this.state.responses < 5 ? this.state.responses + 1 : 5
        })
    }

    playAgain = () => {
        this.getQuestions();
        this.setState({
            score: 0,
            responses: 0
        });
    };
    componentDidMount(){
        
        this.getQuestions();
    }


    render(){
        return(
            <div className = "container">
                <div className = "title">Quiz</div>
                {this.state.questions.length >0 && 
                this.state.responses < 5 &&
                this.state.questions.map(
                    ({question, answers, correct, questionId}) => (
                        <QuestionBox 
                            question = {question}
                            options={answers}
                            key={questionId}
                            selected = {answer => this.computeAnswer(answer, correct)}
                        />))  
                }
                {this.state.responses === 5 ? (<Result score = {this.state.score} playAgain = {this.playAgain}/>
                ): null}
            </div>
        )
    }


}




export default Quiz;