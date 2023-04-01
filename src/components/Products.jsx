import React, { useState, useEffect } from "react";
import ProductDetailView from "./ProductDetailView";
import "../styles/products.scss";
const bt_add_cart = require("../assets/icons/bt_add_to_cart.svg");

const API = "https://api.escuelajs.co/api/v1/products?limit=20&offset=50";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [productView, setProductView] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);


  useEffect(async () => {
    await fetch(API)
      .then((response) => response.json())
      .then((data) => console.log(data) || setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  const handleCartAdd = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      const newProduct = {
        id: product.id,
        title: product.title,
        quantity: 1,
        price: product.price,
      };
      setCart([...cart, newProduct]);
    }
  };

  const handleProductView = (product) => {
    setSelectedProduct(product); // establecer el producto seleccionado
    setProductView(true);
  };

  const handleCloseProductView = () => {
    setSelectedProduct(null); // eliminar el producto seleccionado
    setProductView(false);
  };

  console.log(cart);

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
