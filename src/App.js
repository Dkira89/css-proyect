import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.scss';
import './slippry.scss';
import MainComponent from './container/MainComponent';

class App extends Component {
  renderHome = () => <MainComponent></MainComponent>;
  renderInfo = () => <h1>Nosotros</h1>;
  renderPortfolio = () => <h1>Portafolio</h1>;
  renderContact = () => <h1>Contacto</h1>;
  
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={this.renderHome}></Route>
          <Route exact path="/info" component={this.renderInfo}></Route>
          <Route exact path="/portfolio" component={this.renderPortfolio}></Route>
          <Route exact path="/contact" component={this.renderContact}></Route>
        </div>
      </Router>
      
    );
  }
}

export default App;
