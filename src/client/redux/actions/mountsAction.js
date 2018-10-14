import axios from "axios";
import {
  GET_MOUNTS_DATA,
  CURRENT_MOUNT,
  GET_CURRENT_MOUNT_DATA
} from "./types";

export const getMountData = () => dispatch => {
  axios
    .get("/api/mounts")
    .then(res => {
      dispatch({
        type: GET_MOUNTS_DATA,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_MOUNTS_DATA,
        payload: {}
      });
    });
};

export const storeCurrent = (mountName, mountId) => dispatch => {
  axios
    .post("/api/mount-info", {
      mountId
    })
    .then(res => {
      dispatch({
        type: GET_CURRENT_MOUNT_DATA,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_CURRENT_MOUNT_DATA,
        payload: {}
      });
    });
  dispatch({
    type: CURRENT_MOUNT,
    payload: mountName
  });
};
