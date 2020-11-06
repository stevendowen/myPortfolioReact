import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="contactBox">
                <p className="contact">If you would like to get in touch with me you 
                can reach me at any of the below sources...
                </p>
                <h3>Email</h3>
                <a style={{display: "flex", flexDirection: "column", alignItems: "center"}} href="https://www.owen.steven.d@gmail.com">
                    <i style={{fontSize: "25px"}} class="google icon"/>
                    <span>owen.steven.d@gmail.com</span>
                    <span>Click Here!</span>
                </a>
                <h3>LinkedIn</h3>
                <a style={{display: "flex", flexDirection: "column", alignItems: "center"}} href="https://www.linkedin.com/in/steven-d-owen">
                    <i style={{fontSize: "25px"}} class="linkedin icon"/>
                    <span>https://www.linkedin.com/in/steven-d-owen</span>
                    <span>Click Here!</span>
                </a>
                <h3>Github</h3>
                <a style={{display: "flex", flexDirection: "column", alignItems: "center"}} href="https://github.com/stevendowen">
                    <i style={{fontSize: "25px"}} className="github icon"/>
                    <span>https://github.com/stevendowen</span>
                    <span>Click Here!</span>
                </a>
            </div>
        );
    }
}

export default Contact;