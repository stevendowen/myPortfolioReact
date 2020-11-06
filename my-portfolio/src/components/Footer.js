import React from 'react';

const Footer = () => {
    return (
        <div id="footer" className="ui secondary bottom fixed menu">
            <div style={{fontSize: "10px"}} className="right item">
                <span style={{width: "100px"}}>Powered by Me using React, Redux, and Firestore</span>
            </div>
        </div>
    );
}

export default Footer;