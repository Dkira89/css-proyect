import React from 'react';
import {Link} from 'react-router-dom'
import logo from './..//img/logo.svg';
const Header = () => {
    return (
        <div>
            <nav className="nav">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-2">
                            <Link className="logo" to="/">
                                <img src={logo} alt="LogoBlackParadox"/>
                            </Link>
                        </div>
                        <div className="col-lg-10">
                            <ul>
                                <li><a href="/" >Inicio</a></li>
                                <li><a href="/info">Nosotros</a></li>
                                <li><a href="/portfolio" >Portafolio</a></li>
                                <li><a href="/contact" >Contacto</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;