import * as actions from "./actions";

const initialState = {
  isLoading: false,
  isError: false,
  posts: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_POSTS_REQUEST:
      return { ...state, isLoading: true };
    case actions.GET_POSTS_DONE:
      return { ...state, isLoading: false, posts: [...action.payload] };
    case actions.GET_POSTS_FAILED:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export default reducer;
