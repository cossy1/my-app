import {createActionType} from "../../../_shared/utils";

export const ADD_CART = createActionType("ADD_CART", "cart");
export const CLEAR_CART = createActionType("CLEAR_CART", "cart");
export const CLOSE_CART = createActionType("CLOSE_CART", "cart");
export const OPEN_CART = createActionType("OPEN_CART", "cart");


export const addCart = (payload: any) => ({
    type: ADD_CART.START,
    payload
});

export const clearCart = () => ({
    type: CLEAR_CART.START,
});

export const closeCart = () => ({
    type: CLOSE_CART.START,
});

export const openCart = () => ({
    type: OPEN_CART.START,
});
