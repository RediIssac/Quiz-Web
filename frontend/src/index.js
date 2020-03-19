import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import './bootstrap.min.css'
import './agency.min.css'
import Quizzes from './Quizzes';
import Home from './Home';
import Nav from './Nav';
import Login from './Login';
import SignUp from './SignUp';
import Portfolio from './Portfolio'
import Quiz from './Quiz';

ReactDOM.render(
    <Router>
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path='/Quizzes/Quiz/:id' component={Quiz} />
        <Route path="/Quizzes" component={Quizzes} />
        <Route path="/Login" component={Login} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/Portfolio" component={Portfolio} />

    </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can changes
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
