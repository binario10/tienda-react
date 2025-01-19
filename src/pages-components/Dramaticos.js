
import React, { useState, useEffect } from "react";

import ProductList from "../components/ProductList";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar"; 
import dramaData from "../data/drama.json";



const Dramaticos = ({ cart, addToCart, successMessage  }) => {
  const [products, setProducts] = useState([]);
  //const [cart, setCart] = useState([]);

  useEffect(() => {
    setProducts(dramaData);
  }, []);


  return (
    <div className="app">
      <div className="container">
        <Header />
        <SearchBar /> 
        <ProductList products={products} addToCart={addToCart} successMessage={ successMessage} />
        <Footer/>
      </div>
     </div>
  );
};

export default Dramaticos;
