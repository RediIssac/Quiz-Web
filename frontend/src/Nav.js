import React from 'react';

import './App.css';
import { Link } from 'react-router-dom'

function Nav() {
    const navstyle = {
        color: 'white'
    }
    var loggedin;

    if (localStorage.getItem("loggedin") === null) {
      loggedin = false;
      localStorage.setItem("loggedin", false);
    }
    else{

      loggedin = localStorage.getItem('loggedin');

    }
    
    
    const logout = () => {
      localStorage.removeItem('loggedin');
      loggedin = false;
      localStorage.removeItem('tokenId');
      localStorage.removeItem('userCredentials');
      

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
            
            {
                !loggedin &&
            ( <div>                
                  <Link style= {navstyle} to="/Login">
                  <li>Login</li>
                  </Link>
                  <Link style= {navstyle} to="/SignUp">
                  <li>SignUp</li>
                  </Link>
                  </div>
      
               )


            }



            {
              loggedin &&
              (
            <button onClick={logout} value="LogOut"><li >LogOut</li>
            </button>)
            }
           
        </ul>
    </nav>
  );
}

export default Nav;import React from 'react';

import './App.css';
import { Link } from 'react-router-dom'

function Nav() {
    const navstyle = {
        color: 'white'
    }
    var loggedin;

    if (localStorage.getItem("loggedin") === null) {
      loggedin = false;
      localStorage.setItem("loggedin", false);
    }
    else{

      loggedin = localStorage.getItem('loggedin');

    }
    
    
    const logout = () => {
      localStorage.removeItem('loggedin');
      loggedin = false;
      localStorage.removeItem('tokenId');
      localStorage.removeItem('userCredentials');
      

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
            
            {
                !loggedin &&
            ( <div>                
                  <Link style= {navstyle} to="/Login">
                  <li>Login</li>
                  </Link>
                  <Link style= {navstyle} to="/SignUp">
                  <li>SignUp</li>
                  </Link>
                  </div>
      
               )


            }



            {
              loggedin &&
              (
            <button onClick={logout} value="LogOut"><li >LogOut</li>
            </button>)
            }
           
        </ul>
    </nav>
  );
}

export default Nav;import React from 'react';

import './App.css';
import { Link } from 'react-router-dom'

function Nav() {
    const navstyle = {
        color: 'white'
    }
    var loggedin;

    if (localStorage.getItem("loggedin") === null) {
      loggedin = false;
      localStorage.setItem("loggedin", false);
    }
    else{

      loggedin = localStorage.getItem('loggedin');

    }
    
    
    const logout = () => {
      localStorage.removeItem('loggedin');
      loggedin = false;
      localStorage.removeItem('tokenId');
      localStorage.removeItem('userCredentials');
      

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
            
            {
                !loggedin &&
            ( <div>                
                  <Link style= {navstyle} to="/Login">
                  <li>Login</li>
                  </Link>
                  <Link style= {navstyle} to="/SignUp">
                  <li>SignUp</li>
                  </Link>
                  </div>
      
               )


            }



            {
              loggedin &&
              (
            <button onClick={logout} value="LogOut"><li >LogOut</li>
            </button>)
            }
           
        </ul>
    </nav>
  );
}

export default Nav;