import React, { useState, useEffect, useContext } from "react";
import "../styles/cartView.scss";
const flechita = require("../assets/icons/flechita.svg");
const iconClose = require("../assets/icons/icon_close.png");
import AppContext from "../context/AppContext";

const CartView = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const cart = state.cart;
  const [total, setTotal] = useState(0);

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  const totalCart = () => {
    let total = 0;
    cart.forEach((product) => {
      total += product.price * product.quantity;
    });
    setTotal(total);
  };

  useEffect(() => {
    totalCart();
  }, [cart]);

  return (
    <aside className="product-detail-cartView">
      <div className="title-container">
        <img src={flechita} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {cart.map((product, index) => (
          <div key={index} className="shopping-cart">
            <figure>
              <img src={product.images[0]} alt={product.title} />
            </figure>
            <p>{product.title} <br /> <small>Cantidad:{product.quantity} </small>  </p> 
            <p>${product.price}</p>
            <img
              className="icon-close"
              src={iconClose}
              alt="close"
              onClick={() => handleRemove(product)}
            />
          </div>
        ))}
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${total}</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};

export default CartView;
