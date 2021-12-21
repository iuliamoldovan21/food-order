import useInput from "../../hooks/use-input";
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

  const nameClasses = nameHasError ? classes.invalid : classes.control;
  const addressClasses = addressHasError ? classes.invalid : classes.control;
  const postalClasses = postalHasError ? classes.invalid : classes.control;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameClasses}>
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
      <div className={addressClasses}>
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
      <div className={postalClasses}>
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
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
