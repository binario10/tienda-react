
import React, { useState, useEffect } from "react";

import ProductList from "../components/ProductList";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar"; 
import { getProducts } from "../data/productService";

const Libros = ({ cart, addToCart, successMessage  }) => {
  const [products, setProducts] = useState([]);
  //const [cart, setCart] = useState([]);

  const findAll = async() =>{
    const data = await getProducts();
    setProducts(data["libroResponse"]["libro"]);
 }

  useEffect(() => {
    findAll();
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

export default Libros;
