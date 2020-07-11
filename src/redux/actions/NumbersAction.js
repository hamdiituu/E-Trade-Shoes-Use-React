import { get } from "../../utils/Networking";
import * as types from "../types/NumbersTypes";

export const FetchNumbers = () => {
  return function action(dispatch) {
    let url = "/numbers";
    let action;
    get(url)
      .then((res) => res.json)
      .then((res) => {
        dispatch( {
          type: types.FETCH_NUMBERS_SUCCESS,
          payload: res,
        })
      })
      .catch((err) => {
        dispatch({
          type: types.FETCH_NUMBERS_FAILERE,
          payload: err,
        })
      });
  };
};
