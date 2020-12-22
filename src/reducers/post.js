import { FETCH_ALL_POST, CREATE_POST } from "../types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_POST:
      return action.payload;

    case CREATE_POST:
      return [...state, action.payload];

    default:
      return state;
  }
};
