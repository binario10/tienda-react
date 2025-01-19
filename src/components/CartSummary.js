import React from "react";

const CartSummary = ({ cart }) => {
  const total = cart.reduce((sum, product) => sum + product.price*product.quantity, 0);
  return (
    <div className="cart-summary">
      <h4>Total: ${total}</h4>
      <button>Comprar</button>
    </div>
  );
};

export default CartSummary;
