
import React, {Component} from 'react';
import ReactDom from "react-dom";
import "./style.css";
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
    
    getQuestions = () => {
       axios.get('/quizzes/'+this.props.match.params.id)
        .then(question => {
            console.log("this are questions",question.data);
            this.setState({
                questions: question.data
            });
            console.log("this are ALL", this.state);
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
                    ({question, possibleAnswer1, possibleAnswer2, possibleAnswer3, possibleAnswer4, correctAnswer, id}) => (
                        <QuestionBox 
                            question = {question}
                            options={[possibleAnswer1, possibleAnswer2, possibleAnswer3, possibleAnswer4]}
                            key={id}
                            selected = {answer => this.computeAnswer(answer, correctAnswer)}
                        />))  
                   
                }
                {this.state.responses === 5 ? (<Result score = {this.state.score} playAgain = {this.playAgain}/>
                ): null}

           
            </div>
           
        )
    }
}
export default Quiz;