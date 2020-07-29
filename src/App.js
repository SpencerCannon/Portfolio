import React from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import About from './Components/About';


function App() {
  return (
    <div className="App">
      <Navigation/>
      <header className="App-header">
        <Home/>
        <Projects/>
        <About/>  
      </header>
    </div>
  );
}

export default App;
