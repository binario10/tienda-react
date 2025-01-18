
import React, { useState, useEffect } from "react";

import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar"; 
import Menu from "../components/Menu"; 
import dataJson from "../data/misterio.json";

const Misterio = ({ cart, setCart }) => {
  const [products, setProducts] = useState([]);
  //const [cart, setCart] = useState([]);

  useEffect(() => {
    setProducts(dataJson);
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="app">
     <Header />
     <SearchBar /> {/* Posiciona el buscador debajo del encabezado */}
     <ProductList products={products} addToCart={addToCart} />
     <Footer />
 </div>
  );
};

export default Misterio;
