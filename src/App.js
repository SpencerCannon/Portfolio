import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Projects from './Components/Projects';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Projects" component={Projects} />
        <Route component={Error} />
      </Switch>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       
      </header>
    </div>
  );
}

export default App;
