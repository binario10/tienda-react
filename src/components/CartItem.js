import React from "react";
import "../styles/cart.css"; 

const CartItem = ({ product }) => {
  return (
    <div className="cart-item">
      <img className="cart-item__image" src={product.image} alt={product.name} />
      <div className="cart-item__details">
        <h4>{product.name}</h4>
        <p>{`$${product.price}`} cantidad: {product.quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;