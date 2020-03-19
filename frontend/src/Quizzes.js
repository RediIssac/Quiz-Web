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

  componentDidMount() {
    axios.get('/startquiz')
      .then(res => {
        this.setState({ quizzes: res.data });
      });
  }

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
