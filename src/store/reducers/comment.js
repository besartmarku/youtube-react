import { SUCCESS } from "../actions";
import { WATCH_DETAILS } from "../actions/watch";
import { COMMENT_THREAD_LIST_RESPONSE } from "../api/youtube-api-response-types";

const initialState = {
  byVideo: {},
  byId: {}
};
export default function(state = initialState, action) {
  switch (action.type) {
    case WATCH_DETAILS[SUCCESS]:
      return reduceWatchDetails(action.response, action.videoId, state);
    default:
      return state;
  }
}

function reduceWatchDetails(responses, videoId, prevState) {
  const commentThreadResponse = responses.find(
    res => res.result.kind === COMMENT_THREAD_LIST_RESPONSE
  );
  return reduceCommentThread(commentThreadResponse.result, videoId, prevState);
}

function reduceCommentThread(response, videoId, prevState) {
  if (!response) {
    return prevState;
  }
  const newComments = response.items.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {});

  // if we have already fetched some comments for a particular video
  // we just append the ids for the new comments
  const prevCommentIds = prevState.byVideo[videoId]
    ? prevState.byVideo[videoId].ids
    : [];
  const commentIds = [...prevCommentIds, ...Object.keys(newComments)];

  const byVideoComment = {
    nextPageToken: response.nextPageToken,
    ids: commentIds
  };

  return {
    ...prevState,
    byId: {
      ...prevState.byId,
      ...newComments
    },
    byVideo: {
      ...prevState.byVideo,
      [videoId]: byVideoComment
    }
  };
}
