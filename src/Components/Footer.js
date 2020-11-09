import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';

export default function Header() {
    return (
        <Jumbotron style={{backgroundColor: "#22031F", paddingBottom: "10%", marginTop: "2%"}}>
            <h3>This mystery-themed quiz app will test your ability to remember the thrilling conclusions of your favorite murder mysteries. Will you be able to correctly identify the guilty party, or will you be led astray by a red herring? Test your knowledge of the killer canon and remember...it's never the one you suspect.</h3>
        </Jumbotron>
    )
}

