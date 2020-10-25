import '../css/App.css';
import db from '../firebase.js';

db.collection('test').get().then(querySnapshot => { 
  const data = querySnapshot.docs.map(doc => doc.data());
  console.log(data);
});

function App() {
  // const firebaseApp = firebase.firestore('test/Jk7wyTHGfkrsC7KOPL0V');
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
      {/* <div>
      <h1>React & Firebase</h1>
      <h2>By @farazamiruddin</h2>
      <code>
        <pre>{JSON.stringify(firebaseApp)}</pre>
      </code>
    </div> */}
    </div>
  );
}

export default App;
