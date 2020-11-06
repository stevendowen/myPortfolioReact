import React, { Component } from 'react';
import store from '../store';



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
                <a className="item" onClick={this.handleClick}>
                    All
                </a>
                <a className="item" onClick={this.handleClick}>
                    HTML
                </a>
                <a className="item" onClick={this.handleClick}>
                    JavaScript
                </a>
                <a className="item" onClick={this.handleClick}>
                    NodeJS
                </a>
                <a className="item" onClick={this.handleClick}>
                    ReactJS
                </a>
                <a className="item" onClick={this.handleClick}>
                    Angular
                </a>
            </div>
        );
    }

}

export default Filter;