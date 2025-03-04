import React from "react";
import "../styles/cart.css"; 

const CartItem = ({ product }) => {
  return (
    <div className="cart-item">
      <img className="cart-item__image" src={product.portadaUrl} alt={product.nombre} />
      <div className="cart-item__details">
        <h4>{product.nombre}</h4>
        <p>{`$${product.precio}`} cantidad: {product.quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;