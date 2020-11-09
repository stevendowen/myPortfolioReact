import React, { Component } from 'react';
import store from '../store';
import { Link } from 'react-router-dom';



class Filter extends Component {

    handleClick = e => {
        e.preventDefault();
        store.dispatch({
            type: 'FILTER',
            value: e.target.innerText,
        });
    };

    render() {
        return (
            <div className="ui secondary pointing menu filter">
                <Link to="" className="item" onClick={this.handleClick}>
                    All
                </Link>
                <Link to="" className="item" onClick={this.handleClick}>
                    HTML
                </Link>
                <Link to="" className="item" onClick={this.handleClick}>
                    JavaScript
                </Link>
                <Link to="" className="item" onClick={this.handleClick}>
                    NodeJS
                </Link>
                <Link to="" className="item" onClick={this.handleClick}>
                    ReactJS
                </Link>
                <Link to="" className="item" onClick={this.handleClick}>
                    Angular
                </Link>
            </div>
        );
    }

}

export default Filter;