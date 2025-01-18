
import React, { useState, useEffect } from "react";

import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar"; 
import Menu from "../components/Menu"; 
import productsData from "../data/products.json";

import "../App.css"; // Importa el archivo CSS global

const Inicio = ({ cart, setCart }) => {
  const [products, setProducts] = useState([]);
  //const [cart, setCart] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="app">
    <Menu />
    <div className="container">
     <Header />
     <SearchBar /> {/* Posiciona el buscador debajo del encabezado */}
     <ProductList products={products} addToCart={addToCart} />
     <Cart cart={cart} />
    
   </div>
   <Footer />
 </div>
  );
};

export default Inicio;
