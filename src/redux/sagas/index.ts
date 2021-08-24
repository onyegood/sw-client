import { takeLatest } from "redux-saga/effects";

import { FETCH_ROOTS, FETCH_ROOT_REQUEST } from "../types";
import { fetchRootSaga, fetchRootsSaga } from "./rootSaga";

export default function* appRootSaga() {
  yield takeLatest(FETCH_ROOTS, fetchRootsSaga);
  yield takeLatest(FETCH_ROOT_REQUEST, fetchRootSaga);
}