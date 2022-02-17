import { intialData } from "./constants";
import axios from "axios";

export function getIntialData() {
  return async (dispatch, getState) => {
    try {
      const res = await axios("https://signal.creatbots.com");
      dispatch({
        type: intialData,
        payload: res,
      });
    } catch (err) {
      console.log(err);
    }
  };
}
