import React from 'react';

import './App.css';
import { Link } from 'react-router-dom'

function Nav() {
    const navstyle = {
        color: 'white'
    }
  return (
    
    <nav >
        <h3>Quiz-Web</h3>
        <ul className = "nav-links">
            <Link style= {navstyle} to="/" exact>
            <li>Home</li>
            </Link>
            <Link style= {navstyle} to="/Quizzes">
            <li>Quizzes</li>
            </Link>
            <Link style= {navstyle} to="/Login">
            <li>Login</li>
            </Link>
            <Link style= {navstyle} to="/SignUp">
            <li>SignUp</li>
            </Link>
           
        </ul>
    </nav>
  );
}

export default Nav;
