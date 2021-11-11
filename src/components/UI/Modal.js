import React from "react";
import Cart from "../Cart/Cart";
import Card from "./Card";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <Cart></Cart>
    </Card>
  );
};

const Modal = () => {
  return (
    <React.Fragment>
      <Backdrop></Backdrop>
      <ModalOverlay></ModalOverlay>
    </React.Fragment>
  );
};

export default Modal;
