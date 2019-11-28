import React from "react";
import Link from "next/link";
import StarRating from "./StarRating";

type Product = {
  description: string;
  id: number;
  images: {
    alt: string;
    src: { large: string; medium: string; small: string };
  }[];
  name: string;
  price: number;
  rating: number;
  stock: number;
};

type ProductCard = {
  handleAddToCart: (Product) => void;
  product: Product;
};

const ProductCard: React.FC<ProductCard> = ({ handleAddToCart, product }) => (
  <li>
    <div className="product-card">
      <img src={product.images[0].src.small} alt={product.images[0].alt} />

      <h2>
        <Link href={`/products/${product.id}`}>
          <a>{product.name}</a>
        </Link>
      </h2>

      <div className="product-info">
        <div className="product-details">
          <div className="product-details-price">
            <p>€ {product.price}</p>
          </div>
          <div className="product-details-info">
            <StarRating rating={product.rating} />
            <p>{product.stock} in stock</p>
          </div>
        </div>
      </div>
      <button onClick={() => handleAddToCart(product)}>Add to cart</button>
    </div>
  </li>
);

export default ProductCard;
