import {
  GET_MOUNTS_DATA,
  CURRENT_MOUNT,
  GET_CURRENT_MOUNT_DATA
} from "../actions/types";

const initialState = {
  data: null,
  current: null,
  currentMountData: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MOUNTS_DATA:
      return {
        data: action.payload
      };
    case CURRENT_MOUNT:
      return {
        ...state,
        current: action.payload
      };
    case GET_CURRENT_MOUNT_DATA:
      return {
        ...state,
        currentMountData: action.payload
      };

    default:
      return state;
  }
}
