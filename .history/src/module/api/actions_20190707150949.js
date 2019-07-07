export const GET_TAGS_REQUEST = "GET_TAGS_REQUEST";
export const GET_TAGS_DONE = "GET_TAGS_DONE";
export const GET_TAGS_FAILED = "GET_TAGS_FAILED";

export function getTagsRequest() {
  return {
    type: GET_TAGS_REQUEST
  };
}

export function getTagsDone(data) {
  return {
    type: GET_TAGS_DONE,
    payload: data
  };
}

export function getTagsFailed(error) {
  return {
    type: GET_TAGS_FAILED,
    payload: error
  };
}
