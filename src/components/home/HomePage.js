import React from 'react';
import square03 from './../../img/square_03.jpg';
import square2 from './../../img/square_02.jpg';
import square10 from './../../img/square_10.jpg';
import Imagenes from './../Imagenes';
const parrafos =  "Aenean et nisl fermentum leo hendrerit dapibus. Curabitur ultricies finibus dignissim." +
    "Pellentesque ac neque sit amet urna ullamcorper fermentum. In eu congue leo. Aenean "+
    " eget urna eget tortor commodo facilisis. Vivamus ac quam sem. In eget tincidunt quam, "+
    "eget viverra mauris. Aenean eros sem, sollicitudin ac risus a, porttitor ornare eros.";

const HomePage = () => {
    return (
   
        <div>
            <div className="pad_200" id="nosotros">
                <div className="container">
                    <di className="row">
                        <div className="col">
                            <h1 className="center main-title">Estos somos nosotros</h1>
                        </div>
                    </di>
                    <div className="row">
                        <div className="d-flex align-items-center">
                            <div className="col-lg-6">
                                <div className="diamante">
                                </div>
                            </div>
                            <div className="col-lg-6 margin_200">
                                    <h3><strong>Blackparadox</strong> <span>va a tus eventos</span></h3>
                                    <p>Aenean et nisl fermentum leo hendrerit dapibus. Curabitur ultricies finibus dignissim. 
                                        Pellentesque ac neque sit amet urna ullamcorper fermentum. In eu congue leo. Aenean 
                                        eget urna eget tortor commodo facilisis. Vivamus ac quam sem. In eget tincidunt quam, 
                                        eget viverra mauris. Aenean eros sem, sollicitudin ac risus a, porttitor ornare eros.</p>
                                    <button>Contactenos</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pad_200">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1 className="center main-title">
                                Nuestros servicios
                            </h1>
                        </div>
                        <h3 className="center">
                            Capturamos tu <strong>vida</strong>
                        </h3>
                    </div>
                    <div className="row">
                        <Imagenes img={square03} alt ={"Eventos"} className={"rounded-circle"} text={parrafos} textButton={"leer mas"} ></Imagenes>
                        <Imagenes img={square2} alt ={"Bodas"} className={"rounded-circle"} text={parrafos} textButton={"leer mas"} ></Imagenes>
                        <Imagenes img={square10} alt ={"XV Años"} className={"rounded-circle"} text={parrafos} textButton={"leer mas"} ></Imagenes> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;