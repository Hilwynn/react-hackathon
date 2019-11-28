import React, { useEffect, useState } from "react";
import Head from "next/head";
import ProductCard from "../../components/ProductCard";
import API from "../../helpers/API";
import { objectToArray } from "../../helpers/functions";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await API.get("products");

        setProducts(objectToArray(data));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = product => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const productInCart = cart.find(
      cartProduct => cartProduct.id === product.id
    );

    if (productInCart) {
      cart.map(productInCart => {
        if (product.id === productInCart.id)
          return (productInCart.quantity += 1);
      });
    } else {
      product.quantity = 1;
      cart = [...cart, product];
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <div>
      <h1>Products</h1>

      {products.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <ul className="product-list">
          {products.map(product => (
            <ProductCard
              key={product.id}
              handleAddToCart={handleAddToCart}
              product={product}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
