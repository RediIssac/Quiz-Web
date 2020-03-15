import React from 'react';
import './App.css';
import Question from './Question';
import Quiz from './Quiz';
import Quizzes from './Quizzes';
import Result from './Result';
import Login from './Login';
import SignUp from './SignUp';
import Nav from './Nav';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Quizzes" component={Quizzes} />
          <Route path="/Quiz" component={Quiz} />
          <Route path="/Question" component={Question}/>
          <Route path="/Result" component={Result}/>
          <Route path="/Login" component={Login}/>
          <Route path="/SignUp" component={SignUp}/>
        </Switch>
      </div>
    </Router>
    
  );
}

// const Home = () =>(
  
// )
export default App;
