import React, { Componet } from "reac";
import { Navbar, Button, Image } from "react-bootstrap";
import {NavLink} from 'react-router-dom';
import axios from "axios";
import $ from "jquery";
import {} from "jquery.cookie";
axios.defaults.withCredentials = true;
const headers = {withCredentials: true};

class Header extends Componet{

    state ={
        buttonDisplay : "none"
    };

    componentDidMount(){
        if($.cookie('login_id')){
            this.setState({
                buttonDisplay : "block"
            });
        }else{
            this.setState({
                buttonDisplay : "none"
            });
        }
    }

    logout = () =>{
        axios
            .get("http://localhost:8080/member/logout",{
                headers
            })
            .then(returnData => {
                if (returnData.data.message){
                    $.removeCookie("login_id");
                    alert("You Log Out!");
                    window.location.href = '/';
                }
            });
    };
    render(){
        const buttonStyle ={
            margin: "0px 5px 0px 10px",
            display: this.state.buttonDisplay
        }
        return(
            <div>
                <Navbar>
                    <Navbar.Brand href="/">DO I HAVE A Corona?!</Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse className="justify-content-end">
                        <NavLink to ="/">
                            <Button style={buttonStyle} variant="primary">Quiz</Button>
                        </NavLink>
                        <Button style={buttonStyle} onClic={this.logout} variant="primary">
                            LogOut
                        </Button>
                    </Navbar.Collapse>
                </Navbar>
                    <Image src="./img/main.png" fluid/>
            </div>
        );
    }
}