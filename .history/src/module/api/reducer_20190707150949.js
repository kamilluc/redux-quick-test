import * as actions from "./actions";

const initialState = {
  isLoading: false,
  isError: false,
  tags: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_TAGS_REQUEST:
      return { ...state, isLoading: true };
    case actions.GET_TAGS_DONE:
      return { ...state, isLoading: false, tags: [...action.payload] };
    case actions.GET_TAGS_FAILED:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export default reducer;
