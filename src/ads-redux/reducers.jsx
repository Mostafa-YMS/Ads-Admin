import { intialData } from "./actions/constants";

export const adsReducer = (state = {}, action) => {
  switch (action.type) {
    case intialData:
      return action.payload;
    default:
      return state;
  }
};
