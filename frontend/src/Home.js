import React from 'react';
import QuizGenerate from './QuizGenerate';
import './App.css';
import Quiz from './Quiz';

function Home() {
 
  const QuizLinks = [
    {
      title: 'Quiz one',
      caption: 'Math'
    },
    {
      title: 'Quiz two',
      caption: 'Chemistry'
    },
    {
      title: 'Quiz three',
      caption: 'Biology'
    },
    
  ]

  return (
    <div className="Home">
    {/* <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="#page-top"></a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fa fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ml-auto">
         
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#portfolio">Quizzes</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="Login">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="SignUp">Create Account</a>
          </li> */}
          
        {/* </ul>
      </div>
    </div>
  </nav> */}

  
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
