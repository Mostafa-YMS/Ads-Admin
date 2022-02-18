import { Create_Ad, intialData } from "./actions/constants";

export const adsReducer = (state = [], action) => {
  switch (action.type) {
    case intialData:
      return action.payload.data;
    case Create_Ad:
      return [action.payload, ...state]
    default:
      return state;
  }
};
