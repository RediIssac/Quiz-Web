
import React, { Component } from 'react';
import ReactDom from "react-dom";
import "./style.css";
import quizService from "./quizService";
import QuestionBox from './QuestionBox';
import Result from './Result';
import axios from 'axios';

<<<<<<< HEAD
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
=======
class Quiz extends Component {
    state = {
        questions: [],
        score: 0,
        responses: 0
    };
>>>>>>> 9f575a83975ab8b8567eab0c25b9c3f614b9707a

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
        if (answer === correctAnswer) {
            this.setState({
                score: this.state.score + 1
<<<<<<< HEAD
             });
=======
            });

>>>>>>> 9f575a83975ab8b8567eab0c25b9c3f614b9707a
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
<<<<<<< HEAD
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
=======
    componentDidMount() {
        this.getQuestions();
    }
    render() {
        return (
            <div className="container">
                <div className="title">Quiz</div>
                {this.state.questions.length > 0 &&
                    this.state.responses < 5 &&
                    this.state.questions.map(
                        ({ question, answers, correct, questionId }) => (
                            <QuestionBox
                                question={question}
                                options={answers}
                                key={questionId}
                                selected={answer => this.computeAnswer(answer, correct)}
                            />))
>>>>>>> 9f575a83975ab8b8567eab0c25b9c3f614b9707a
                }
                {this.state.responses === 5 ? (<Result score={this.state.score} playAgain={this.playAgain} />
                ) : null}
            </div>
        )
    }


}




export default Quiz;