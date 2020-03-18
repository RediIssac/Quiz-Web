import React, {useState} from 'react';

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
  else {

    loggedin = localStorage.getItem('loggedin');

  }


  const logout = () => {
    localStorage.removeItem('loggedin');
    loggedin = false;
    localStorage.removeItem('tokenId');
    localStorage.removeItem('userCredentials');
    window.location.reload(false); 

  }

  return (

    <nav >
      <h3>Quiz-Web</h3>
      <ul className="nav-links">
        <Link style={navstyle} to="/" exact>
          <li>Home</li>
        </Link>
        <Link style={navstyle} to="/Quizzes">
          <li>Quizzes</li>
        </Link>



        {
          !loggedin &&
          (<div>
            <Link style={navstyle} to="/Login">
              <li>Login</li>
            </Link>
            <Link style={navstyle} to="/SignUp">
              <li>SignUp</li>
            </Link>

          </div>

          )


        }



        {
          loggedin &&
          (
            <div>
              <Link style={navstyle} to="/Portfolio">
                <li>Porofile</li>
              </Link>


              <button onClick={logout} value="LogOut"><li >LogOut</li>
              </button>
              {/* <Link style={navstyle}  onClick={logout} to="/">
                <li>LogOut</li>
              </Link> */}

            </div>
          )



        }

      </ul>
    </nav>
  );
}

export default Nav;