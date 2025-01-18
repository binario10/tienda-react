import React from "react";
import "../styles/cart.css"; 
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

const Cart = ({ cart }) => {
  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          {cart.map((product, index) => (
            <CartItem key={index} product={product} />
          ))}
          <CartSummary cart={cart} />
        </>
      )}
    </div>
  );
};

export default Cart;
