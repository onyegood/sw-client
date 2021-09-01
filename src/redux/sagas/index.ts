import { takeLatest } from 'redux-saga/effects';

import { FETCH_ROOTS, FETCH_ROOT_REQUEST, FETCH_SINGLE_ITEM_REQUEST } from '../types';
import { fetchRootSaga, fetchRootsSaga, fetchSingleItemSaga } from './rootSaga';

export default function *appRootSaga() {
	yield takeLatest(FETCH_ROOTS, fetchRootsSaga);
	yield takeLatest(FETCH_ROOT_REQUEST, fetchRootSaga);
	yield takeLatest(FETCH_SINGLE_ITEM_REQUEST, fetchSingleItemSaga);
}
