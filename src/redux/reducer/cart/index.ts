import {ADD_CART, CLEAR_CART, CLOSE_CART, DELETE_CART_ITEM, OPEN_CART} from "../../action/cart";

export interface initialState {
  carts: Record<string, any>[];
  showCart: boolean;
}

const initialStateDefault: initialState = {
  carts: [],
  showCart: false,
};

const cart = (state = initialStateDefault, action: any) => {

  switch (action.type) {
    case ADD_CART.SUCCESS: {
      return {...state, carts: [...state.carts, action.payload], showCart: true };
    }

    case CLEAR_CART.SUCCESS:
      return {...state, carts: [], showCart: false};


    case CLOSE_CART.SUCCESS:
      return {...state, showCart: false};

    case OPEN_CART.SUCCESS:
      return {...state, showCart: true};

    case DELETE_CART_ITEM.SUCCESS:{
      const filteredCart = state.carts.filter(e => e.id !== action.payload.id);
      return {...state, carts: filteredCart};
    }


    default:
      return state;
  }
};

export default cart;
