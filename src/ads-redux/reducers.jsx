import { Create_Ad, intialData, Delete_Ad } from "./actions/constants";

export const adsReducer = (state = [], action) => {
  switch (action.type) {
    case intialData:
      return action.payload.data;
    case Create_Ad:
      return [action.payload, ...state];
    case Delete_Ad:
      return state.filter((item, index) => index !== action.payload);
    default:
      return state;
  }
};
