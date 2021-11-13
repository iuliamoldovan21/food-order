import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    // if (state.items.includes(action.item)) {
    //   const existentItem = state.items.find((item) => {
    //     return item.id === action.item.id;
    //   });

    //   const updatedItemAmount = existentItem.amount + action.item.amount;
    //   existentItem.amount = updatedItemAmount;
    //   const updatedItems = state.items.find(item => item === existentItem).
    // } else {
    // }
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
