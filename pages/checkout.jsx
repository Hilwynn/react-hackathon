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
    //     if (product.id === productInCart.id) return (productInCart.quantity += 1);
    //   });
    // } else {
    //   product.quantity = 1;
    //   cart = [...cart, product];
    // }

    // localStorage.setItem("cart", JSON.stringify(cart));
  }, []);

  console.log(cart);

  return (
    <div>
      <h1>Checkout</h1>
      {cart.length === 0 ? (
        <div>Your cart is empty</div>
      ) : (
        <>
          <ul className="checkout-basket">
            {cart.length > 0 &&
              cart.map(item => (
                <li>
                  <img
                    src={item.images[0].src.small}
                    alt={item.images[0].alt}
                  />
                  <p className="checkout-basket-name">{item.name}</p>
                  <div className="checkout-basket-price">
                    <p>€ {item.price}</p>
                    <p className="checkout-basket-quantity">{item.quantity}</p>
                  </div>
                </li>
              ))}
          </ul>

          <button
            className="checkout-order-button"
            onClick={() => setOrderPlaced(!orderPlaced)}
          >
            Place your order
          </button>
        </>
      )}

      {orderPlaced && (
        <div className="checkout-order-placed">🎉 Order placed! 🎉</div>
      )}
    </div>
  );
};

export default Cart;
