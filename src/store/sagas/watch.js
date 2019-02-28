import { fork, take, all, put, call } from "redux-saga/effects";
import * as watchActions from "../actions/watch";
import { buildVideoDetailRequest } from "../api/youtube-api";
import { REQUEST } from "../actions";

export function* watchWatchDetails() {
  while (true) {
    const { videoId } = yield take(watchActions.WATCH_DETAILS[REQUEST]);
    yield fork(fetchWatchDetails, videoId);
  }
}

export function* fetchWatchDetails(videoId) {
  let requests = [buildVideoDetailRequest.bind(null, videoId)];

  try {
    const responses = yield all(requests.map(fn => call(fn)));
    yield put(watchActions.details.success(responses));
  } catch (error) {
    yield put(watchActions.details.failure(error));
  }
}
