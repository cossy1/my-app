import {createActionType, createActionString} from "../../../_shared/utils";

export const ADD_CART = createActionType("ADD_CART", "cart");
export const CLEAR_CART = createActionType("ADD_CART", "cart");


export const addCart = (payload: any) => ({
    type: ADD_CART.START,
    payload
});

export const clearCart = (payload: any) => ({
    type: CLEAR_CART.START,
    payload
});
