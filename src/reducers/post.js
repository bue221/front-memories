import { FETCH_ALL_POST, CREATE_POST } from "../types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_POST:
      return (state = action.payload.data);

    case CREATE_POST:
      return (state = [...state, action.payload.postCreated]);

    default:
      return state;
  }
};
