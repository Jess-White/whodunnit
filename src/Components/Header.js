import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';

export default function Header() {
    return (
        <Jumbotron style={{backgroundColor: "#cc4400"}}>
            <h1 style={{backgroundColor: "#cc4400"}} className="jumbotron" >Whodunnit?</h1><h1>A Killer Quiz App</h1>
        </Jumbotron>
    )
}

