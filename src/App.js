import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import Meals from "./components/Meals/Meals";

function App() {
  const [isCartTriggered, setIsCartTrigeered] = useState(false);

  const showCartHandler = () => {
    setIsCartTrigeered(true);
  };

  const closeCartHandler = () => {
    setIsCartTrigeered(false);
  };

  return (
    <React.Fragment>
      {isCartTriggered && <Cart onClose={closeCartHandler} />}
      <Header onShowCart={showCartHandler}></Header>
      <Meals></Meals>
    </React.Fragment>
  );
}

export default App;
