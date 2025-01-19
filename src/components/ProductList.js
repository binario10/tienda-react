import React from "react";
import "../styles/product-list.css";
import ProductCard from "./ProductCard";

const ProductList = ({ products, addToCart, successMessage }) => {
  return (
    <>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      {successMessage && <div className="success-message">{successMessage}</div>}

    </>
   
  );
};

export default ProductList;
