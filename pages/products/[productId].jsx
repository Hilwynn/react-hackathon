import React, { useEffect, useState } from "react";
import Head from "next/head";
import Router from "next/router";
import axios from "axios";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { productId } = Router.query;

      try {
        const { data } = await axios.get(
          `https://was-react-hackathon-fall-2019.firebaseio.com/products/${productId}.json`
        );
        console.log(data);

        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  // This is how you can get the productId from the URL:
  // const { productId } = Router.query;

  if (!product) return <div>Loading...</div>;

  return (
    <>
      <h1 className="product-detail-title">{product.name}</h1>
      <p className="product-detail-rating">Rated {product.rating} / 5</p>
      <div className="product-detail">
        <div className="product-detail-image">
          <img src={product.images[0].src.small} alt={product.images[0].alt} />
        </div>
        <div className="product-detail-info">
          <p className="product-detail-price">€ {product.price}</p>

          <p>{product.description}</p>

          <p>{product.stock} in stock</p>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
