import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Hero from './Components/hero/hero.js';
import SideNavWrapper from './Components/sidenav/sidenav';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
        <SideNavWrapper/>
      </div>
    );
  }
}

export default App;
