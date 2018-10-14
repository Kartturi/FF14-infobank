import { CURRENT_ACTION } from "./types";

export const setCurrentAction = text => dispatch => {
  dispatch({
    type: CURRENT_ACTION,
    text
  });
};
