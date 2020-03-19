import React from 'react';
import QuizGenerate from './QuizGenerate';
import './App.css';
import Quiz from './Quiz';
import { useHistory } from "react-router-dom";


function Home() {

  const history = useHistory();
  const gotoPortfiolio = () => {

    history.push('/Portfolio');

  };

  const QuizLinks = [
    {
      title: 'Quiz one',
      caption: 'Basic Knowledge Corona-vius'
    },
    {
      title: 'Quiz two',
      caption: 'Preventive Rules'
    },
    {
      title: 'Quiz three',
      caption: 'Korea coronavirus'
    },
  ]

  return (
    <div className="Home">
      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">Welcome to our Quiz Web</div>
            <div className="intro-heading text-uppercase">It is nice to meet you!</div>
            <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="Quizzes/Quiz">Start Quiz</a>
          </div>
        </div>
      </header>



      <QuizGenerate QuizLinks={QuizLinks}></QuizGenerate>


      <footer className="footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <span className="copyright">Copyright &copy; Your Website 2020</span>
            </div>
            <div className="col-md-4">
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="#something">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#something">
                    <i className="fa fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#something">
                    <i className="fa fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="list-inline quicklinks">
                <li className="list-inline-item">
                  <a href="#something">Privacy Policy</a>
                </li>
                <li className="list-inline-item">
                  <a href="#something">Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


export default Home;
