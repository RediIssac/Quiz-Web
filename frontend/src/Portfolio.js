// import React, {useState} from 'react';
import GoogleLogin from "react-google-login";
import './bootstrap.min.css';
import logo from './logo.svg'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './App.css';
import Button from '@material-ui/core/Button';

import React, { Component } from 'react';



class Portfolio extends Component {
    
    state = {
        email: "",
        password: "",
        name: ""
    }
    componentDidMount() {

        this.setState({
            name: localStorage.getItem("username"),
            email: localStorage.getItem("email"),
            password: localStorage.getItem("totalNumCorrectAttemps")
         

        })
        
    }

    onPressSubmit = (e) => {
        
        e.preventDefault()

        console.log(this.state.password)

        this.setState({
            email: "",
            password: "",
            name: ""
        })
    }

    onKeyPress = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        const { email, password, name } = this.state 

        return (

            <div className="Portfolio">
                <div className="align-items-Right cad-n">
                    <fieldset>
                        <legend>Profile </legend>
                        <dt>Email</dt>
                        <dd>{email}</dd>
                        
                        <dt>Name</dt>
                        <dd>{name}</dd>
                        <dt></dt>
                    </fieldset>
                </div>
          
                <header>
                    <form id="to-do-form" onSubmit={this.onPressSubmit}>
                        <input type="text" placeholder="Type Your Email" value={email} onChange={this.onKeyPress} name={'email'} />
                        <input type="password" placeholder="Type Your password" value={password} onChange={this.onKeyPress} name={'password'} />
                        <input type="text" placeholder="Type your Name" value={name} onChange={this.onKeyPress} name={'name'} />
                        <button type="Edit">Edit</button>
                    </form>

                </header>


            </div>
        );
    }
}
// function Protfile({ user }) {
//   const { email, password, name } = user || {};

//   console.log("aaaa")
//   return (
//     <div>
//       <h1>Profile</h1>
//       <dt>Email</dt>
//       <dd>{email}</dd>
//       <dt>Password</dt>
//       <dd>{password}</dd>
//       <dt>Name</dt>
//       <dd>{name}</dd>
//     </div>
//   );
// }

export default Portfolio;