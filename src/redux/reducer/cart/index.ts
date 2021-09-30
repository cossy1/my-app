import {ADD_CART} from "../../action/cart";

interface initialState {
    carts: Record<string, any>[];
}

const initialStateDefault: initialState = {
    carts: []
};

export default (state = initialStateDefault, action: any) => {
    if (action.type === ADD_CART.SUCCESS) {
        console.log('REDUCER HITS::::',action.payload);
        const newCart = [...state.carts, action.payload];
        return { carts: [...state.carts, action.payload] };

    } else {
        return state;
    }
};