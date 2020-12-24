import { FETCH_ALL_POST, CREATE_POST, UPDATE_POST } from "../types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_POST:
      return action.payload.data;

    case CREATE_POST:
      return [...state, action.payload.postCreated];

    case UPDATE_POST:
      return state.map((p) =>
        p._id === action.payload._id ? action.payload : p
      );

    default:
      return state;
  }
};
