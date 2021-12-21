import useInput from "../../hooks/use-input";
import Modal from "../UI/Modal";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const {
    value: nameValue,
    hasError: nameHasError,
    changeValueHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: addressValue,
    hasError: addressHasError,
    changeValueHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
    reset: resetAddress,
  } = useInput((value) => value.trim() !== "");

  const {
    value: postalValue,
    hasError: postalHasError,
    changeValueHandler: postalChangeHandler,
    inputBlurHandler: postalBlurHandler,
    reset: resetPostal,
  } = useInput((value) => {
    let regex = /^[A-Z0-9]{1,10}$/;
    return regex.test(value);
  });

  const confirmHandler = (event) => {
    event.preventDefault();

    console.log("Checkout confirmed!");
    console.log(nameValue);
    console.log(addressValue);
    console.log(postalValue);

    resetName();
    resetAddress();
    resetPostal();
  };

  return (
    <Modal>
      <form className={classes.form} onSubmit={confirmHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={nameValue}
          ></input>
          {nameHasError && <p>Please enter a name.</p>}
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Your Full Address</label>
          <input
            type="text"
            id="address"
            onChange={addressChangeHandler}
            onBlur={addressBlurHandler}
            value={addressValue}
          ></input>
          {addressHasError && <p>Please enter a address.</p>}
        </div>
        <div className={classes.control}>
          <label htmlFor="postal">Postal Code</label>
          <input
            type="text"
            id="postal"
            onChange={postalChangeHandler}
            onBlur={postalBlurHandler}
            value={postalValue}
          ></input>
          {postalHasError && (
            <p>
              Please enter a valid postal code (capital letters and/or digits).
            </p>
          )}
        </div>
        <div className={classes.actions}>
          <button type="button" onClick={props.onClose}>
            Cancel
          </button>
          <button type="submit">Confirm</button>
        </div>
      </form>
    </Modal>
  );
};

export default Checkout;
