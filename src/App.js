import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [isCartTriggered, setIsCartTrigeered] = useState(false);

  const showCartHandler = () => {
    setIsCartTrigeered(true);
  };

  const closeCartHandler = () => {
    setIsCartTrigeered(false);
  };

  return (
    <CartProvider>
      {isCartTriggered && <Cart onClose={closeCartHandler} />}
      <Header onShowCart={showCartHandler}></Header>
      <Meals></Meals>
    </CartProvider>
  );
}

export default App;
