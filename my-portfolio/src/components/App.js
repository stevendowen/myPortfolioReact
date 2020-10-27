import React, { Component } from 'react';
import '../css/App.css';
import db from '../firebase.js';
import store from '../store/index.js';
import Header from './Header.js';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
    db.collection('Apps').get().then(querySnapshot => { 
      const data = querySnapshot.docs.map(doc => doc.data());
      store.dispatch({ type: 'SET_APPS', apps: data });
    });
  }
  render () {
    let test = store.getState().apps;
    if(test.length > 0) {
      console.log(test);
    }
    return (
      <Router>
        <Header />
        <div className="ui centered cards"></div>
        <Switch>
          <Route exact path="/" component="" />
          <Route path="/about" component="" />
          <Route path="/contact" component="" />
        </Switch>
      </Router>
    );
  }
}

export default App;
