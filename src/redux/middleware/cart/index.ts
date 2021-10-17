import {ADD_CART, CLEAR_CART, CLOSE_CART, DELETE_CART_ITEM, OPEN_CART} from "../../action/cart";
import { Middleware } from 'redux';
import {message} from "antd";


const addCart: Middleware<unknown> =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);
    if (action.type === ADD_CART.START) {
        const name = action.payload.name;
      dispatch({ type: ADD_CART.SUCCESS, payload: action.payload });
        message.success(`${name} successfully added to cart`);

    }
  };

const clearCart: Middleware<unknown> = ({dispatch}) => (next) => (action) => {
    next(action);
    if(action.type === CLEAR_CART.START){
        dispatch({type: CLEAR_CART.SUCCESS})
    }
};

const closeCart: Middleware<unknown> = ({dispatch}) => (next) => (action) => {
    next(action);
    if(action.type === CLOSE_CART.START){
        dispatch({type: CLOSE_CART.SUCCESS})
    }
};

const openCart: Middleware<unknown> = ({dispatch}) => (next) => (action) => {
    next(action);
    if(action.type === OPEN_CART.START){
        dispatch({type: OPEN_CART.SUCCESS})
    }
};

const deleteCartItem: Middleware<unknown> = ({dispatch}) => (next) => (action) => {
    next(action);
    if(action.type === DELETE_CART_ITEM.START){
        dispatch({type: DELETE_CART_ITEM.SUCCESS, payload: action.payload})
    }
};

export default [addCart, clearCart, closeCart, openCart, deleteCartItem];
