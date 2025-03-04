import React from "react";

import Button from "./Button"

import "../styles/product-card.css";  // Importa el archivo CSS de la tarjeta de producto

//ojo: La key es un identificador especial que React utiliza para distinguir elementos en una lista. por eso no es enviado
const ProductCard = ({ product, addToCart, successMessage }) => {
  return (
    <div className="product-card">
      <img src={product.portadaUrl} alt={product.titulo} />
      <h3>{product.titulo}</h3>
      <p>{product.descripcion}</p>
      <span>{`$${product.precio.toFixed(2)}`}</span> 
      <Button
        label="Agregar al carrito"
        onClick={() => addToCart(product)}
        className="product-card__button"
      />
      
    </div>
  );
};

export default ProductCard;

/* <button onClick={() => addToCart(product)}>Agregar al carrito</button> */