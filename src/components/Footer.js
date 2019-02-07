import React from 'react';
import square1 from './../img/square_01.jpg';
import square2 from './../img/square_02.jpg';
import square3 from './../img/square_03.jpg';
import square4 from './../img/square_04.jpg';
import square5 from './../img/square_05.jpg';
import square6 from './../img/square_06.jpg';
import square7 from './../img/square_07.jpg';
import square8 from './../img/square_08.jpg';
import square9 from './../img/square_09.jpg';
import square10 from './../img/square_10.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fab } from '@fortawesome/'
// import { facebook } from '@fortawesome/free-solid-svg-icons';
import {Link}  from 'react-router-dom';

const Footer = (img) => {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">
                            <p className="white">
                                <strong>
                                    Mapa del sitio
                                </strong>
                            </p>
                            <ul className="white">
                                <li className="small">Inicio</li>
                                <li className="small">Nosotros</li>
                                <li className="small">Portafolio</li>
                                <li className="small">Contacto</li>
                                <br/>
                                <li className="small">Contrato</li>
                                <li className="small">Servicios</li>
                                <li className="small">Facturación</li>
                                <li className="small">Terminos y condiciones</li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <p className="white"><strong>Tumblr</strong></p>
                            <img src={square1} alt="" className="tumblr"/>
                            <img src={square2} alt="" className="tumblr"/>
                            <img src={square3} alt="" className="tumblr"/>
                            <img src={square4} alt="" className="tumblr"/>
                            <img src={square5} alt="" className="tumblr"/>
                            <img src={square6} alt="" className="tumblr"/>
                            <img src={square7} alt="" className="tumblr"/>
                            <img src={square8} alt="" className="tumblr"/>
                            <img src={square9} alt="" className="tumblr"/>
                            <img src={square10} alt="" className="tumblr"/>
                        </div>
                        <div className="col-lg-4">
                            <p className="white"><strong>Contacto</strong></p>
                            <ul class="white">
                                <li className="small">+55 12345678</li>
                                <li className="small">darkcris@gmail.com</li>
                                <li className="small">Christian Zuleta <i>Desarrollador Web</i></li>
                            </ul>
                            <br/>
                            <p className="white"><strong>Redes Sociales</strong></p>
                            <ul className="social-networks">
                                <li><FontAwesomeIcon icon={["fab","facebook-f"]}></FontAwesomeIcon></li>
                                <li><i className="fa fa-facebook"></i></li>
                                <li><i className="fa fa-twiter"></i></li>
                                <li><i className="fa fa-youtube"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="copy">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="small">
                                &copy; 2019 Todos los derechos reservados por <Link to="/">Blackparadox</Link>.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;