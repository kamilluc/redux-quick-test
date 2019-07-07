export const GET_POSTS_REQUEST = "GET_POSTS_REQUEST";
export const GET_POSTS_DONE = "GET_POSTS_DONE";
export const GET_POSTS_FAILED = "GET_POSTS_FAILED";

export function getPostsRequest() {
  return {
    type: GET_POSTS_REQUEST
  };
}

export function getPostsDone(data) {
  return {
    type: GET_POSTS_DONE,
    payload: data
  };
}

export function getPostsFailed(error) {
  return {
    type: GET_POSTS_FAILED,
    payload: error
  };
}
