import React, { Component } from 'react';
import Me from '../images/me.png';

class About extends Component {
    render () {
        return (
            <div className="aboutBox">
                <h1 className="name about">I'm Steven Owen</h1>
                <div className="imgBox">
                    <img src={Me} />
                </div>
                <p> 
                    I am a highly motivated Web Developer pursuing opportunity to further my career.
                    I am a recent graduate from Mountainland Tech College that was asked by start-up 
                    tech company to extend internship as a result of outstanding performance and 
                    problem-solving skills. I am currently enrolled at Utah Valley University in a 
                    Associate Degree program and am committed to maintaining cutting edge technical skills 
                    and up-to-date industry knowledge.
                </p>
            </div>
        );
    }
}

export default About;