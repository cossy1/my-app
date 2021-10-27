import { applyMiddleware, createStore } from "redux";
import { createBrowserHistory } from "history";
import customMiddleWares from './middleware';
import appReducers from "./reducer";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist'

export const history = createBrowserHistory();

const rootReducer = (state: any, action: any) => {
    if (action.type === "RESET_APP_STATE") {
        state = undefined;
    }
    return appReducers(state, action);
};

const persistConfig = {
    key: 'root',
    storage,
};

// add and apply the middleWares
const middleWares = [...customMiddleWares];

const persistedReducer = persistReducer(persistConfig, rootReducer);

let parseMiddleware = applyMiddleware(...middleWares);


const loadState = () => {
    try {
        const serializedState = localStorage.getItem("my-app");
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (e) {
        return undefined;
    }
};


//persist data to loadState
const persistedState = loadState();

// create the store
const store = createStore(persistedReducer, persistedState, parseMiddleware);


export default store;