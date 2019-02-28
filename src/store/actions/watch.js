import {
  createAction,
  createRequestTypes,
  FAILURE,
  REQUEST,
  SUCCESS
} from "./index";

export const WATCH_DETAILS = createRequestTypes("WATCH_DETAILS");
export const details = {
  request: videoId => createAction(WATCH_DETAILS[REQUEST], { videoId }),
  success: response => createAction(WATCH_DETAILS[SUCCESS], { response }),
  failure: response => createAction(WATCH_DETAILS[FAILURE], { response })
};
