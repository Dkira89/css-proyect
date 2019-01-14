import React from 'react';
import Logo from './../img/logo.svg';

const NavBar_Component = () => {
    return (
        <div>
            <nav id="nav">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2">
                            <a href="http/www.blackparadox.com">
                                <img src={Logo} alt="LogoBlackParadox"/>   
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar_Component;