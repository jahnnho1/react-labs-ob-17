import React from "react";
import "../styles/productDetailView.scss";
const icon_close = require('../assets/icons/icon_close.png');
const bt_add_to_cart = require('../assets/icons/bt_add_to_cart.svg');


const ProductDetailView = (props) => {
    const { product, onClose, addCart } = props;  
    return (
      <aside className="product-detail-view">
        <div className="product-detail-close" onClick={onClose}>
          <img src={icon_close} alt="close" />
        </div>
        <img
          src={product.images[0]}
          alt={product.title}
        />
        <div className="product-info-view">
          <p>$ {product.price}</p>
          <p>{product.title}</p>
          <p>{product.description}</p>
          <button className="primary-button add-to-cart-button" onClick={() => addCart(product)}>
            <img src={bt_add_to_cart} alt="add to cart" />
            Add to cart
          </button>
        </div>
      </aside>
    );
  };
  

export default ProductDetailView;
