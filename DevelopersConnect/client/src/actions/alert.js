import { SET_ALERT, REMOVE_ALERT } from "./types";
import * as uuid from "uuid";

export const setAlert = (msg, alertType, timeout = 1000) => (dispatch) => {
  const id = uuid.v4();
  dispatch({
    type: SET_ALERT,
    payload: {
      id: id,
      msg,
      alertType,
    },
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
