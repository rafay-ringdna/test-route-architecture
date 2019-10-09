import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LinkRoute from './LinkRoute';

function App() {
  return (
    <BrowserRouter basename="/calendar">
      <div className="App">
        <header className="App-header">

          <Switch>
            <Route path="/link1" component={LinkRoute}/>
          </Switch>

          <img src={logo} className="App-logo" alt="logo" />
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
      </div>
    </BrowserRouter>
  );
}

export default App;
