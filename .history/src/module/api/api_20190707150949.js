import axios from "axios";
import * as actions from "./actions";

export function getTags() {
  return dispatch => {
    dispatch(actions.getTagsRequest());

    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => dispatch(actions.getTagsDone(response.data)))
      .catch(err => dispatch(actions.getTagsFailed(err)));
  };
}
