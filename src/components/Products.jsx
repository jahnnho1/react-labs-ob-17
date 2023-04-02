import React, { useState, useContext } from "react";
import ProductDetailView from "./ProductDetailView";
import useGetProducts from "../hooks/useGetProducts";
import AppContext from "../context/AppContext";
import "../styles/products.scss";
const bt_add_cart = require("../assets/icons/bt_add_to_cart.svg");
const API = "https://api.escuelajs.co/api/v1/products?limit=20&offset=50";

const Products = () => {
  const { addToCart } = useContext(AppContext);
  const [productView, setProductView] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const products = useGetProducts(API);

  const handleCartAdd = (product) => {
    addToCart(product);    
  };

  const handleProductView = (product) => {
    setSelectedProduct(product); 
    setProductView(true);
  };

  const handleCloseProductView = () => {
    setSelectedProduct(null);
    setProductView(false);
  };



  return (
    <>
      {productView ? (
        <ProductDetailView
          product={selectedProduct}
          onClose={handleCloseProductView}
          addCart={handleCartAdd}
        />
      ) : null}
      <section className="main-container">
        <div className="cards-container">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product.images[0]}
                alt={product.title}
                id={`product-${product.id}`}
                onClick={() => handleProductView(product)}
              />
              <div className="product-info">
                <div>
                  <p>$ {product.price}</p>
                  <p>{product.title}</p>
                </div>
                <figure onClick={() => handleCartAdd(product)}>
                  <img src={bt_add_cart} alt="" />
                </figure>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;
