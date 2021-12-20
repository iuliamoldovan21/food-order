import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";
import Checkout from "./components/Checkout/Checkout";

function App() {
  const [isCartTriggered, setIsCartTrigeered] = useState(false);
  const [isCheckoutTriggered, setIsCheckoutTriggered] = useState(false);

  const showCartHandler = () => {
    setIsCartTrigeered(true);
  };

  const closeCartHandler = () => {
    setIsCartTrigeered(false);
  };

  const showCheckoutHandler = () => {
    setIsCheckoutTriggered(true);
    setIsCartTrigeered(false);
  };

  const closeCheckoutHandler = () => {
    setIsCheckoutTriggered(false);
  };

  return (
    <CartProvider>
      {isCartTriggered && (
        <Cart onClose={closeCartHandler} onOrder={showCheckoutHandler} />
      )}
      <Header onShowCart={showCartHandler}></Header>
      <Meals></Meals>
      {isCheckoutTriggered && <Checkout onClose={closeCheckoutHandler} />}
    </CartProvider>
  );
}

export default App;
