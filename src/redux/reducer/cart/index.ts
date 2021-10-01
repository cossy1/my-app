import { ADD_CART, CLEAR_CART } from "../../action/cart";

interface initialState {
  carts: Record<string, any>[];
}

const initialStateDefault: initialState = {
  carts: [],
};

export default (state = initialStateDefault, action: any) => {
  if (action.type === ADD_CART.SUCCESS) {
    const newCart = [...state.carts, action.payload];
    return { carts: newCart };
  }

  if (action.type === CLEAR_CART.SUCCESS) {
      return {carts: []};
  } else {
    return state;
  }
};
