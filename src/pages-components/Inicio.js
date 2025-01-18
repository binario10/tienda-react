
import React from "react";

import "../styles/Inicio.css"
import "../App.css";

const Inicio = ({ cart, setCart }) => {

  return (
    
    <div className="app">
        <div className="inicio">
           
          <img
            src="https://picsum.photos/2000/1000" // Reemplaza con la URL de tu imagen
            alt="Portada"
            className="inicio__image"
          />
          <div className="inicio__overlay">
            <h1 className="inicio__title">Bienvenido a Nuestra Tienda</h1>
          </div>

        </div>
    </div>

      

  );
};

export default Inicio;
