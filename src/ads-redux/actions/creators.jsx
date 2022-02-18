import { Create_Ad, intialData, Delete_Ad, Update_Ad } from "./constants";
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

export function createAd(newAd) {
  return {
    type: Create_Ad,
    payload: newAd,
  };
}

export function deleteAd(ad) {
  return {
    type: Delete_Ad,
    payload: ad,
  };
}

export function updateAd(data) {
  return {
    type: Update_Ad,
    payload: data,
  };
}
