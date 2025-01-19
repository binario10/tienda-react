import React from "react";
import Cart from "../components/Cart";
import Footer from "../components/Footer";

const CarritoCompras = ({ cart }) => {
  return (
    <div className="app">
      <div className="container">
        <Cart cart={cart} />
        <Footer />
      </div>
    </div>
  );
};

export default CarritoCompras;
