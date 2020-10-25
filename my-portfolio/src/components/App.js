import React, { Component } from 'react';
import '../css/App.css';
import db from '../firebase.js';
import store from '../store/index.js';

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
    console.log(test);
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div className="ui placeholder segment" >
          <div className="ui icon header">
            <i className="pdf file outline icon"></i>
            No documents are listed for this customer.
          </div>
          <div className="ui primary button">Add Document</div>
        </div>
      </div>
    );
  }
}

export default App;
