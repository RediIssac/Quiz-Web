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
<<<<<<< HEAD
=======
      localStorage.setItem("loggedin", false);
>>>>>>> 9f575a83975ab8b8567eab0c25b9c3f614b9707a
    }
    else{

      loggedin = localStorage.getItem('loggedin');

    }
    
    
    const logout = () => {
<<<<<<< HEAD
      localStorage.removeItem(loggedin);
      loggedin = false;
     
=======
      localStorage.removeItem('loggedin');
      loggedin = false;
      localStorage.removeItem('tokenId');
      localStorage.removeItem('userCredentials');
      
>>>>>>> 9f575a83975ab8b8567eab0c25b9c3f614b9707a

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
<<<<<<< HEAD
            <button onClick= {logout} value = "Logout">
=======
            <button onClick={logout} value="LogOut"><li >LogOut</li>
>>>>>>> 9f575a83975ab8b8567eab0c25b9c3f614b9707a
            </button>)
            }
           
        </ul>
    </nav>
  );
}

export default Nav;