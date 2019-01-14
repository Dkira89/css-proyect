import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import NavBar_Component from './components/navBar_component';

class App extends Component {
  render() {
    return (
     <div className="">
        <NavBar_Component></NavBar_Component>
     </div>
    );
  }
}

export default App;
