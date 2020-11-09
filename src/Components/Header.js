import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';

export default function Header() {
    return (
        <Jumbotron style={{backgroundColor: "#22031F", textAlign: "left"}}>
            <h1>
            <span style={{backgroundColor: "#22031F", fontFamily: "Times New Roman"}}className="jumbotron">Whodunnit?</span>
            A Killer Quiz App
            </h1>
        </Jumbotron>
    )
}

