import {createActionType} from "../../../_shared/utils";

export const GET_PRODUCTS = createActionType("GET_PRODUCTS", "products");
export const FILTER_PRODUCTS_BY_CATEGORY = createActionType("FILTER_PRODUCTS_BY_CATEGORY", "products");
export const FILTER_PRODUCTS_BY_PRICE = createActionType("FILTER_PRODUCTS_BY_PRICE", "products");


export const getProducts = (payload: any) => ({
    type: GET_PRODUCTS.START,
    payload
});

export const filterProductsByCategory = (payload: string[]) => ({
    type: FILTER_PRODUCTS_BY_CATEGORY.START,
    payload
});

export const filterProductsByPrice = (payload: string[]) => ({
    type: FILTER_PRODUCTS_BY_PRICE.START,
    payload
});