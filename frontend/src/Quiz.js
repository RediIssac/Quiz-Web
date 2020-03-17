 
import React, {Component} from 'react';
import ReactDom from "react-dom";
import "./style.css";
import quizService from "./quizService";
import QuestionBox from './QuestionBox';
import Result from './Result';

class Quiz extends Component{
    state = {
        questions: [],
        score: 0,
        responses:0
    };

    getQuestions = () => {
        quizService().then(question => {
            this.setState({
                questions: question
            });
        });
    };
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