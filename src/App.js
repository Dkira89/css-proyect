import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.scss';
import './slippry.scss';
import Header from './components/Header';
import Slider from './components/Slider';
import Footer from './components/Footer';
import Routes from './components/routes/Routes';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header></Header>
          <Slider></Slider>
          <Routes></Routes>  
          <Footer></Footer>
        </div>
      </Router>
      
    );
  }
}

export default App;
