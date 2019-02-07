import React from 'react';

const Imagenes = ({img,alt,className, text, textButton}) => {
    return (
        <div>
            <div className="col-lg-4 center">
                <img src={img} alt={alt} className={className}/>
                <h2>{alt}</h2>
                <p>{text}</p>
                <button>{textButton}</button> 
            </div>
        </div>
    );
};

export default Imagenes;