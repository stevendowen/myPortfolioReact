import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="ui secondary pointing menu">
                <div className="header item">
                    Steven's Website
                </div>
                <div className="right menu">
                    <NavLink exact={true} activeClassName='active' to="/" className="item">
                        Home
                    </NavLink>
                    <NavLink activeClassName='active' to="/about" className="item">
                        About
                    </NavLink>
                    <NavLink activeClassName='active' to="/contact" className="item">
                        Contact
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default Header;