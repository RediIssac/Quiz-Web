import React, {useState} from 'react';
import './App.css';
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";


function Nav() {
  //const history = useHistory();
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
        <Link style={navstyle} to="/" >
          <li>Home</li>
        </Link>
        <Link style={navstyle} to="/Quizzes">
          <li>Quizzes</li>
        </Link>
        {
          !loggedin &&
          (<div className="nav-links">
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
            <div className="nav-links">
              <Link style={navstyle} to="/Portfolio">
                <li>Profile</li>
              </Link>
              <Link to = "/" onClick={logout} value="LogOut" ><li >Logout</li>
              </Link>
            </div>
          )
        }

      </ul>
    </nav>
  );
}

export default Nav;