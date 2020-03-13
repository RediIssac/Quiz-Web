import React, {Component }from "react";
import{ Form, Button } from "react-bootstrap";
import axios from "axios";
import $ from "jquery";
import {} from "jquery.cookie";
axios.defaults.withCredentials = true;
const headers = {withCredentials: true};

class LgoinForm extends Component{
    join = () => {
        const send_param = {
            headers,
            email: this.joinEmail.value,
            name: this.joinName.value,
            password: this.joinPw.value
        };
        axios
            .post("http://localhost:8080/member/join", send_param)
            //정상 수행
            .then(returnData => {
                if (returnData.data.message) {
                    alert(returnData.data.message);
                    //이메일 중복 체크 Checking the email address (if there is same eamil address )
                    // if (returnData.data.dupYn === "1") {
                    //     this.joinEmail.value = "";
                    //     this.joinEmail.focus();
                    // } else {
                    //     this.joinEmail.value = "";
                    //     this.joinName.value = "";
                    //     this.joinPw.value = "";
                    // }
                } else {
                    alert("Fail the Creat Account");
                }
            })
            //에러
            .catch(err => {
                console.log(err);
            });
    };
    login = () => {
        // const loginEmail = this.loginEmail.value;
        // const loginPw = this.loginPw.value;
        const send_param = {
            headers,
            email: this.loginEmail.value,
            password: this.loginPw.value    
        };
        axios
            .post("http://localhost:8080/member/login", send_param)
            //정상 수행
            .then(returnData => {
                if (returnData.data.message) {
                    $.cookie("login_id", returnData.data._id);
                    alert(returnData.data.message);
                    window.location.reload();
                }else{
                    alert("Fail the Login");//로그인 실패
                }
            })
             //에러
             .catch(err => {
                console.log(err);
            });
    };
    render(){
        const formStyle={
            margin :50
        };
        const buttonStyle={
            marginTop :5
        };
        return(
            <Form style={formStyle}>
                <Form.Group controlId="joinForm">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        ref={ref => (this.joinEmail =ref)}
                        placeholder="Enter email"
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                    <Form.Label>name</Form.Label>
                    <Form.Control
                        type="text"
                        ref={ref => (this.joinName =ref)}
                        placeholder="name"
                    />
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        ref={ref => (this.joinPW =ref)}
                        placeholder="Password"
                    />
                    <Button style={buttonStyle} onClick={this.join} variant="primary" type="button" block>
                        Creat Accout
                    </Button>
                </Form.Group>

                <Form.Group controlId="loginForm">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type="email"
                        ref={ref => (this.joinPW =ref)}
                        placeholder="Enter email"
                    />
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        ref={ref => (this.joinPW =ref)}
                        placeholder="Password"
                    />
                    <Button style={buttonStyle} onClick={this.join} variant="primary" type="button" block>
                        LogIn
                    </Button>
                </Form.Group>
            </Form>
        );
    }
}

export default LgoinForm;