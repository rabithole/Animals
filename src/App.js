import React from 'react';
import logo from './logo.svg';
import './App.css';
import Animals from './components/animalsData';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      animals: animals
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <h1>Welcome to the zoo, we have Animals here!</h1>
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
          </p>   
        </header>
      </div>
    );
  }
}

export default App;
