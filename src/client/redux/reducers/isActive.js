import { CURRENT_ACTION } from "../actions/types";

const initialState = {
  isActive: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CURRENT_ACTION:
      return {
        isActive: action.text
      };

    default:
      return state;
  }
}
