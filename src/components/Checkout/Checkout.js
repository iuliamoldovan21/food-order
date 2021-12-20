import Modal from "../UI/Modal";
import classes from './Checkout.module.css';


const Checkout = (props) => {
  const confirmHandler = (event) => {
    event.preventDefault();
    console.log('pap')
  };
  return (
    <Modal>
      <form className={classes.form} onSubmit={confirmHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name"></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Your Full Address</label>
          <input type="text" id="address"></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="postal">Postal Code</label>
          <input type="text" id="postal"></input>
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
