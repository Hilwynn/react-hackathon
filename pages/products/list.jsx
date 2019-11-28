import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import API from "../../helpers/API";

/**
 * This is how you can link to a productDetail:
 * href: is the link you want the user to be sent to
 * as: is how you want the url to look like
 *
 * <Link href="" as="">
 *   <a>Place link text here</a>
 * </Link>
 * */

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await API.get("products");
        console.log(data);

        const dataArray = Object.keys(data).map(key => {
          return data[key];
        });

        setProducts(dataArray);
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
        if (product.id === productInCart.id) return (productInCart.amount += 1);
      });
    } else {
      product.amount = 1;
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
            <li key={product.id}>
              <div className="product-card">
                <img
                  src={product.images[0].src.small}
                  alt={product.images[0].alt}
                />

                <h2>
                  <Link href={`/products/${product.id}`}>
                    <a>{product.name}</a>
                  </Link>
                </h2>

                <div className="product-info">
                  <p className="product-description">{product.description}</p>
                  <div className="product-details">
                    <div className="product-details-price">
                      <p>€ {product.price}</p>
                    </div>
                    <div className="product-details-info">
                      <p>{product.rating} ⭐</p>
                      <p>{product.stock} in stock</p>
                    </div>
                  </div>
                </div>
                <button onClick={() => handleAddToCart(product)}>
                  Add to cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
