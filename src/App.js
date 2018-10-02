import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Hero from './Components/hero/hero.js';
import SideNav from './Components/sidenav/sidenav';

class App extends Component {
  render() {
    return (
      <div className="App">

        <SideNav/>
                
      </div>
    );
  }
}

export default App;
