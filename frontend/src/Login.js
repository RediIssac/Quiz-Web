import React, { useState } from 'react';
import GoogleLogin from "react-google-login";
import './bootstrap.min.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './App.css';
import { useHistory } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


function Login() {

  const [errors, setErrors] = useState("");
  const history = useHistory();
  const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));

  const handleGoogleResponse = (res) => {
    console.log(res.profileObj);

    const userData = {
      name: res.profileObj.name,
      email: res.profileObj.email,
      token: `Bearer ${res.tokenId}`
    }

    axios.post('/signup', userData)
      .then(res => {
        const userCredentials = res;

        localStorage.getItem('userCredentials', userCredentials);

        const tokenId = `Bearer ${res.tokenId}`;

        localStorage.setItem('tokenId', tokenId);

        axios.defaults.headers.common['Authorization'] = tokenId;

        history.push('/');

      })
      .catch((err) => {

        setErrors(err.response.data);
        console.log(`Errors: {errors}`);

      });


  };

  return (
    <div className="Login">

      <div className="card align-items-center cad-n">
        <img class="card-img-top" src={require('./img/no-img.png')} alt="Card image cap" />

        <form>

          <p>Sign in with your social media account </p>
          <GoogleLogin

            clientId="181796502496-d4n1skjr6tq9trd0mp0dp3gdlaasm3hp.apps.googleusercontent.com"
            buttonText="Sign in with Google"
            scope='profile email'
            width='240'
            height='50'
            longtitle='true'
            theme='dark'

            onSuccess={handleGoogleResponse}
            onFailure={handleGoogleResponse}
            cookiePolicy={"single_host_origin"}
          />


        </form>

      </div>


      <br />
      <div className="align-items-center cad-n">
        Don't have an account ? <br />
    Sign up to <Link to="/SignUp"> create account</Link>
        <br />
        {/* <h5>Log in<br/></h5>
    <label>ID: <input type ="text" size = "15" value = ""></input></label><br/>
    <label for = "pass"> password :</label>
    <input id = "pass" type = "password " size ="15" value = ""></input>
    <input type = "submit" value ="Login"></input> */}
        <br />
        {errors.general && (
          <p>
            {errors.general}
          </p>
        )}

      </div>
    </div>
  );

}

export default Login;