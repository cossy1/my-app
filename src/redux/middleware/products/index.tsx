import { Middleware } from 'redux';
import {FILTER_PRODUCTS_BY_CATEGORY, FILTER_PRODUCTS_BY_PRICE, GET_PRODUCTS} from "../../action/products";


const getProducts: Middleware<unknown> =
    ({ dispatch }) =>
        (next) =>
            (action) => {
                next(action);
                if (action.type === GET_PRODUCTS.START) {
                    dispatch({ type: GET_PRODUCTS.SUCCESS, payload: action.payload });
                }
            };

const filterProductsByCategory: Middleware<unknown> =
    ({ dispatch }) =>
        (next) =>
            (action) => {
                next(action);
                if (action.type === FILTER_PRODUCTS_BY_CATEGORY.START) {
                    dispatch({ type: FILTER_PRODUCTS_BY_CATEGORY.SUCCESS, payload: action.payload });
                }
            };

const filterProductsByPrice: Middleware<unknown> =
    ({ dispatch }) =>
        (next) =>
            (action) => {
                next(action);
                if (action.type === FILTER_PRODUCTS_BY_PRICE.START) {
                    dispatch({ type: FILTER_PRODUCTS_BY_PRICE.SUCCESS, payload: action.payload });
                }
            };



export default [getProducts, filterProductsByCategory, filterProductsByPrice];
