import React, { Component } from 'react';
import '../css/App.css';
import db from '../firebase.js';
import store from '../store/index.js';
import Header from './Header.js';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
    db.collection('test').get().then(querySnapshot => { 
      const data = querySnapshot.docs.map(doc => doc.data());
      store.dispatch({ type: 'SET_PRODUCT', test: data });
    });
  }
  render () {
    let test = store.getState().test;
    if(test.length > 0) {
      console.log(test);
    }
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component="" />
          <Route exact path="/about" component="" />
          <Route exact path="/projects" component="" />
        </Switch>
        <div className="App">
        
        <div className="ui placeholder segment" >
          <div className="ui icon header">
            <i className="pdf file outline icon"></i>
            No documents are listed for this customer.
          </div>
          <div className="ui primary button">Add Document</div>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
