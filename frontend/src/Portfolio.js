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


    }

    render() {
        const { email, password, name } = this.state // Destructuring

        return (

            <div className="Portfolio">


                <div className="align-items-Right cad-n"></div>
                <h4>Profile</h4>
                <dt>Email</dt>
                <dd>{email}</dd>
                <dt>Password</dt>
                <dd>{password}</dd>
                <dt>Name</dt>
                <dd>{name}</dd>
                <header>
                    <form id="to-do-form">
                        <input type="text" placeholder="Type Account" />
                        <input type="text" placeholder="Type password" />
                        <input type="text" placeholder="Type your Name" />
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