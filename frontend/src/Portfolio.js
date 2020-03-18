// import React, {useState} from 'react';
import GoogleLogin from "react-google-login";
import './bootstrap.min.css'
import logo from './logo.svg'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './App.css';
// import { useHistory } from "react-router-dom";
// import React from 'react';
import Button from '@material-ui/core/Button';

//데이터 베이스에서 아이디랑 프로파일을 가져와야함 
import React, { Component } from 'react';



class Portfolio extends Component {
    state = {
        email: "",
        password: "",
        name: ""
    }
    componentDidMount() {

        axios.get(/*data base site */'https://jsonplaceholder.typicode.com/todos/1').then(user => {
            this.setState({ email: user.data.email, password: user.data.password, name: user.data.name })
        })
        //여기가 초기화된다 
        // this.setState({
        //     email: "",
        //     password: "",
        //     name: ""

        // })

    }

    onPressSubmit = (e) => {
        //리프레시 되는것을 막아주는거 
        e.preventDefault()

        console.log("========")

        console.log(this.state.email)

        console.log(this.state.name)
        // console.log(this.state.password)

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
        const { email, password, name } = this.state // Destructuring

        return (

            <div className="Portfolio">


                <div className="align-items-Right cad-n">
                    <fieldset>
                        <legend>Portfolio </legend>
                        <dt>Email</dt>
                        <dd>{email}</dd>
                        <dt>Password</dt>
                        <dd>{password}</dd>
                        <dt>Name</dt>
                        <dd>{name}</dd>
                        <dt></dt>
                    </fieldset>
                </div>
                <header>
                    <form id="to-do-form" onSubmit={this.onPressSubmit}>
                        <input type="text" placeholder="Type Your Email" value={email} onChange={this.onKeyPress} name={'email'} />
                        {/* onchange - 값이바뀌는 거 onKeypress 는 키보드누르는  */}
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