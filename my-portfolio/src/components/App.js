import '../css/App.css';

function App() {
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
        <div class="ui icon header">
          <i class="pdf file outline icon"></i>
          No documents are listed for this customer.
        </div>
        <div class="ui primary button">Add Document</div>
      </div>
    </div>
  );
}

export default App;
