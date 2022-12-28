import logo from './logo.svg';
import './App.css';
import Sdk from './Sdk';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <button className="btn btn-primary btn-pri-dash" onClick={Login}>Login</button> */}
        <Sdk/>
      </header>
    </div>
  );
}

export default App;