import apiReducer from "./api";
import { combineReducers } from "redux";
import videosReducer from "./videos";
import channelsReducer from "./channels";
import commentsReducer from "./comment";

export default combineReducers({
  api: apiReducer,
  videos: videosReducer,
  channels: channelsReducer,
  comments: commentsReducer
});
