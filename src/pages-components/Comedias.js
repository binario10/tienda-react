
import React, { useState, useEffect } from "react";

import ProductList from "../components/ProductList";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar"; 
import dataJson from "../data/comedia.json";

//import "../App.css"; // Importa el archivo CSS global

const Comedias = ({ cart, addToCart, successMessage }) => {
  const [products, setProducts] = useState([]);
  //const [cart, setCart] = useState([]);

  useEffect(() => {
    setProducts(dataJson);
  }, []);

  return (
    <div className="app">
      <div className="container">
        <Header />
        <SearchBar /> {/* Posiciona el buscador debajo del encabezado */}
        <ProductList products={products} addToCart={addToCart} successMessage={ successMessage}/>
        <Footer/>
      </div>
     </div>
  );
};

export default Comedias;
