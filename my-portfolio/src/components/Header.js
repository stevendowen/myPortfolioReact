import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="ui inverted menu">
                <div className="header item">
                    Steven Owen's Website
                </div>
                <div className="ui inverted secondary pointing right menu">
                <Link to="/" className="item">
                    Home
                </Link>
                <Link to="/about" className="item">
                    About
                </Link>
                <Link to="/contact" className="item">
                    Contact
                </Link>
                </div>
            </div>
        );
    }
}

export default Header;