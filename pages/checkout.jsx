import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(localCart);

    // const productInCart = cart.find(
    //   cartProduct => cartProduct.id === product.id
    // );

    // if (productInCart) {
    //   cart.map(productInCart => {
    //     if (product.id === productInCart.id) return (productInCart.amount += 1);
    //   });
    // } else {
    //   product.amount = 1;
    //   cart = [...cart, product];
    // }

    // localStorage.setItem("cart", JSON.stringify(cart));
  }, []);

  console.log(cart);

  return (
    <div>
      <h1>Checkout</h1>
      <ul className="checkout-basket">
        {cart.length > 0 &&
          cart.map(item => (
            <li>
              <img src={item.images[0].src.small} alt={item.images[0].alt} />
              <p>{item.name}</p>{" "}
              <p className="checkout-basket-quantity">{item.amount}</p>
            </li>
          ))}
      </ul>

      <button
        className="checkout-order-button"
        onClick={() => setOrderPlaced(!orderPlaced)}
      >
        Place your order
      </button>
      {orderPlaced && (
        <div className="checkout-order-placed">🎉 Order placed! 🎉</div>
      )}
    </div>
  );
};

export default Cart;
