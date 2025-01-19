
import React from "react";

import "../styles/Inicio.css"
import "../App.css";

const Inicio = () => {

  return (
    
    <div className="app">
        <div className="inicio">
           
          <img
            src="https://picsum.photos/id/405/800/600" 
            alt="Portada"
            className="inicio__image"
          />
          <div className="inicio__overlay">
            <h1 className="inicio__title">Bienvenido a la Mejor tienda de libros online</h1>
          </div>

        </div>
    </div>

      

  );
};

export default Inicio;
