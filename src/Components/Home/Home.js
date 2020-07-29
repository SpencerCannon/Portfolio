import React from 'react';
import "./Home.css";
import Button from "react-bootstrap/Button"

function Home(){
    return (
        <div className="componentWrapper">
            <div className="homeText">
                <h1>Welcome, My Name is <span className="emp">Spencer Cannon</span></h1>
                <h3>I'm a web developer with experience in <span className="emp">React, JS, HTML, and CSS</span></h3>
                <Button variant="danger">View my work</Button>{' '}
            </div>
        </div>
    )
}

export default Home;