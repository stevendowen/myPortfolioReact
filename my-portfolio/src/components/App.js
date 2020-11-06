import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import '../css/App.css';
import db from '../firebase.js';
import store from '../store/index.js';
import Header from './Header';
import AppList from './AppList';
import About from './About';
import Contact from './Contact';


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
        <Switch>
          <Route exact path="/" component={AppList} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    );
  }
}

export default App;
