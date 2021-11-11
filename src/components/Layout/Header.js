import React, { useState } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import Modal from "../UI/Modal";
const Header = (props) => {
  const [isCartTriggered, setIsCartTrigeered] = useState(false);

  const openCartHandler = () => {
    setIsCartTrigeered(true);
  };

  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>BestMeals</h1>
        <HeaderCartButton onClick={openCartHandler}>Cart</HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of food!" />
      </div>
      {isCartTriggered && <Modal></Modal>}
    </React.Fragment>
  );
};

export default Header;
