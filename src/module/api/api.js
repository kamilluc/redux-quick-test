import axios from "axios";
import * as actions from "./actions";

export function getPosts() {
  return dispatch => {
    dispatch(actions.getPostsRequest());

    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => dispatch(actions.getPostsDone(response.data)))
      .catch(err => dispatch(actions.getPostsFailed(err)));
  };
}
