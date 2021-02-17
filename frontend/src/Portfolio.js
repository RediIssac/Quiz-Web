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
      
        name: "",
        email: "",
        totalNumQuestionsTaken: 0,
        totalNumCorrectAttemps: 0,
    }

    componentDidMount() {

        this.setState({
            name: localStorage.getItem("username"),
            email: localStorage.getItem("email"),
            totalNumCorrectAttemps: localStorage.getItem("totalNumCorrectAttemps"),
            totalNumQuestionsTaken: localStorage.getItem("totalNumQuestionsTaken")

        })
        
    }

    onPressSubmit = (e) => {
        
        e.preventDefault()

        console.log(this.state.name)

        axios.post('/user/update', {name: this.state.name,})

        localStorage.setItem("username", this.state.name)

        console.log(this.state.name)

        window.location.reload(false);
    }

    onKeyPress = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        const { name, email, totalNumCorrectAttemps, totalNumQuestionsTaken } = this.state 

        return (

            <div className="Portfolio">
                <div className="align-items-Right cad-n">
                    <fieldset>
                        <legend>Profile </legend>

                        <dt>Name</dt>
                        <dd>{name}</dd>

                        <dt>Email</dt>
                        <dd>{email}</dd>
                        

                        <dt>Total Questions taken: </dt>
                        <dd>{totalNumQuestionsTaken}</dd>

                        <dt>Total Correct Attemps: </dt>
                        <dd>{totalNumCorrectAttemps}</dd>

                        <dt></dt>

                    </fieldset>
                </div>
          
                <header>
                    <form id="to-do-form" onSubmit={this.onPressSubmit}>
                        <input type="text" placeholder="Type your Name" value={name} onChange={this.onKeyPress} name={'name'} />
                        <button type="Edit">Edit</button>
                    </form>
                </header>


            </div>
        );
    }
}
export default Portfolio;