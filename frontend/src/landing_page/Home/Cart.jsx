import React, { useContext } from "react";
import { CartContext } from "./CartContext";

function Cart() {
  const { cartItems, increaseQuantity, decreaseQuantity, removeItem } =
    useContext(CartContext);

  console.log("Cart Items: ", cartItems); // Add this to debug

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img 
                src={item.image} 
                alt={item.name} 
                className="cart-item-image" 
              />
              <div className="cart-item-details">
                <h2>{item.name}</h2>
                <p>{item.description || "No description available"}</p>
                <p>Price: ₹{item.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
                <button 
                  className="remove-button" 
                  onClick={() => removeItem(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Your cart is empty. Start adding items!</p>
      )}
      {cartItems.length > 0 && (
        <div className="cart-summary">
          <h2>Total: ₹{calculateTotal()}</h2>
          <button className="checkout-button">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
