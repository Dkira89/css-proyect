import React from 'react';
import slide from './../img/slide_01.jpg'
import slide2 from './../img/slide_02.jpg'
import slide3 from './../img/slide_03.jpg'
const Slider = () => {
    return (
        <div>
            <section id="slider">
                <ul id="slippry">
                    <li>
                        <h3 className="left top_250 ">Tus momentos mas especiales</h3>
                        <p className="left top_300 ">Quiero frijoles con costilla
                        </p>
                        <button className="left top_375 black">Escribenos</button>
                        <img src={slide} alt="Slide slippry"/>
                    </li>
                    <li>
                        <h3 className="right top_250 white_bg cornerCircular">Tu evento</h3>
                        <p className="right top_325 white_bg cornerCircular">Amo a monica
                        </p>
                        <button className="right top_375 black">Escribenos</button>
                        <img src={slide2} alt="Slide slippry"/>
                    </li>
                    <li>
                        <h3 className="left top_250 white_bg cornerCircular">Blackparadox</h3>
                        <p className="left top_325 white_bg cornerCircular">Mato a yeison
                        </p>
                        <button className="left top_375 black">Contactanos</button>
                        <img src={slide3} alt="Slide slippry"/>
                    </li>
                </ul>
            </section>
        </div>
        
    );
};

export default Slider;