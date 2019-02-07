import React, { Component } from 'react';
import Header from './../components/Header';
import Slider from './../components/Slider';
import Contenido from '../components/Contenido';
import Footer from './../components/Footer';

class MainComponent extends Component {
    
    render() {

        return (
            <div>
                <Header></Header>
                <Slider></Slider>
                <Contenido ></Contenido>
                <Footer></Footer>
            </div>
        );
    }
}

export default MainComponent;