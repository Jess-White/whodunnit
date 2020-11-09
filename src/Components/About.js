import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';

export default function About() {
    return (
        <Jumbotron style={{backgroundColor: "#22031F", padding: "2%",
        margin: "0%"}}>
            <h3 style={{backgroundColor: "#22031F", padding: "0%",
            margin: "0%"}} className="jumbotron">About Whodunnit</h3>
            <h5>The original version of this trivia quiz, which you can see <a style={{color: "#52c779"}} href="https://pumpkin-spicy.netlify.app/">here</a>, was created in response to a technical challenge from Tandem.</h5> 
            <h5>The original challenge specs included twenty-one trivia questions in an array-of-hashes format. I wanted to build a personalized version, so I decided to create this murder-mystery-themed quiz.</h5>
            <h3>Questions are heavily slanted towards golden-age mysteries (your Marples, your Poirots) because they're my favorites. 
            </h3>
            <h5>You can see the repo for this project <a style={{color: "#52c779"}} href="https://github.com/Jess-White/whodunnit">here.</a> Enjoy!</h5>
            
            
        </Jumbotron>
    )
}
