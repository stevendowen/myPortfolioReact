import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import '../css/App.css';
import db from '../firebase.js';
import store from '../store/index.js';
import Header from './Header.js';
import AppList from './AppList.js';


class App extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
    db.collection('Apps').get().then(querySnapshot => { 
      const data = querySnapshot.docs.map(doc => doc.data());
      store.dispatch({ type: 'SET_APPS', apps: data });
    });
  }
  render () {
    return (
      <Router>
        <Header />
        <h1 className="name">Steven Owen</h1>
        <div className="ui centered cards">
        <Switch>
          <Route exact path="/" component={AppList} />
          <Route path="/about" component="" />
          <Route path="/contact" component="" />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
