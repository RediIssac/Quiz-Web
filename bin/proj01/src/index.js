import React from "react";
import ReactDOM from "react-dom"
import {HashRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Headr";
import Body from "./Body";
import Footer from "./Footer";

ReactDOM.render(
    <HashRouter>
        <Header/>
        <Body/>
        <Footer/>
    </HashRouter>,
    document.querySelector("#container") //디아이브 렌더링하는 걸 세팅하는거 


);
