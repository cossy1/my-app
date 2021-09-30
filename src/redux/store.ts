import { applyMiddleware, createStore } from "redux";
import { createBrowserHistory } from "history";
// import { routerMiddleware } from "connected-react-router";
// import throttle from "lodash.throttle";
import customMiddleWares from './middleware';
import appReducers from "./reducer";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist'

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

// add and aply the middleWares
const middleWares = [...customMiddleWares];

const persistedReducer = persistReducer(persistConfig, rootReducer);

let parseMiddleware = applyMiddleware(...middleWares);


const loadState = () => {
    try {
        const serializedState = localStorage.getItem("todo-nest-api");
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

export const  persistor = persistStore(store);

//subscribe to store
// store.subscribe(
//     throttle(() => {
//        // saveState({ auauthth: store.getState().auth });
//     }, 1000)
// );

export default store;

const saveState = (state: any) => {
    try {
        localStorage.setItem("my-app", JSON.stringify(state));
    } catch (e) {
        console.log(e)
    }
};