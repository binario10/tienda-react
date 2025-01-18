import React from "react";
import Cart from "../components/Cart";
import Footer from "../components/Footer";

const Contacto = ({ cart, setCart }) => {
  return (
    <div className="app">
      <div className="container">
        <Cart cart={cart} />
      </div>
    <Footer />
    </div>
  );
};

export default Contacto;
