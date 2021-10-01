import {ADD_CART, CLEAR_CART} from "../../action/cart";
import { Middleware } from 'redux';


const addCart: Middleware<unknown> =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);
    if (action.type === ADD_CART.START) {
      dispatch({ type: ADD_CART.SUCCESS, payload: action.payload });
    }
  };

const clearCart: Middleware<unknown> = ({dispatch}) => (next) => (action) => {
    next(action);
    if(action.type === CLEAR_CART.START){
        dispatch({type: CLEAR_CART.SUCCESS})
    }
};

export default [addCart, clearCart];
