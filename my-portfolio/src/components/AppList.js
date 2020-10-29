import React, { Component } from 'react';

import store from '../store/index.js';
import AppImage from './AppImage.js';

class AppList extends Component {

    renderApps () {
        let apps = store.getState().apps;

        return apps.map((app, idx) => (
            <a href={app.url} className="ui raised link card" key={idx}>
                <AppImage title={app.name} id={idx} url={app.url}/>
                <div className="contentContainer">
                <div className="content">
                    <div className="center aligned header">{app.name}</div>
                    <div className="meta">{app.description.toUpperCase()}</div>
                </div>
                </div>
            </a>
            )
        );
    }

    render() {
        return (
            <div>
                <h1 className="name">Steven Owen</h1>
                <div className="ui centered cards">
                    {this.renderApps()}
                </div>
            </div>
        );
    }
}

export default AppList;