import {FILTER_PRODUCTS_BY_CATEGORY, FILTER_PRODUCTS_BY_PRICE, GET_PRODUCTS} from "../../action/products";
import {filterProducts, filterProductsByPrice} from "../../../_shared/hooks";
import {Products} from "../../../_shared/dummyData";

export interface initialState {
    products: Record<string, any>[];
}

const initialStateDefault: initialState = {
    products: [],
};

const products = (state = initialStateDefault, action: any) => {

    switch (action.type) {
        case GET_PRODUCTS.SUCCESS: {
            return {...state, products: action.payload };
        }

        case FILTER_PRODUCTS_BY_CATEGORY.SUCCESS: {
            const filter = action.payload;
            const filteredProduct = filterProducts(Products, filter);
            return {
                ...state,
                products: [...filteredProduct]
            }
        }

        case FILTER_PRODUCTS_BY_PRICE.SUCCESS: {
            const filter = action.payload;

            const filteredPrice = filterProductsByPrice(Products, filter);
            return {
                ...state,
               products: [...filteredPrice]
            }
        }

        default:
            return state;
    }
};

export default products;
