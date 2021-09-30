import { ADD_CART } from "../../action/cart";
import { Middleware } from 'redux';


const addCart: Middleware<unknown> =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);
    if (action.type === ADD_CART.START) {
        console.log("I Am here now!!!!!");
        console.log("value::::", action.payload);
      dispatch({ type: ADD_CART.SUCCESS, payload: action.payload });
    }
  };

export default [addCart];
