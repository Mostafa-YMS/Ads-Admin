import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { adsReducer } from "./reducers";

export const store = createStore(adsReducer, applyMiddleware(thunk));
