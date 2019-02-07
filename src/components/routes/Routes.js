import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from './../home/HomePage';
import ContactPage from './../contact/ContactPage';
import InfoPage from './../information/InfoPage';
import PortfolioPage from './../portfolio/PortfolioPage';

const Routes = () => {
    return (
        <div>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/info" component={InfoPage}></Route>
            <Route exact path="/portfolio" component={PortfolioPage}></Route>
            <Route exact path="/contact" component={ContactPage}></Route>
        </div>
    );
};

export default Routes;