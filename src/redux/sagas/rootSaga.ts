
import { call, put } from 'redux-saga/effects';
import { fetchRootFailure, fetchRootSuccess, fetchRootsFailure, fetchRootsSuccess, fetchSingleItemFailure, fetchSingleItemSuccess } from '../actions/rootsAction';
import { getRoot, getRoots } from '../../api';
import { RootsActions } from '../../interfaces';

export function* fetchRootsSaga() {
	try {
		// @ts-ignore
		const response = yield call(getRoots);

		yield put(fetchRootsSuccess(response));
	} catch (errors) {
		yield put(fetchRootsFailure(errors));
	}
}

export function* fetchRootSaga(action: RootsActions) {
	try {
		// @ts-ignore
		const response = yield call(getRoot, action.payload);

		yield put(fetchRootSuccess(response));
	} catch (errors) {
		yield put(fetchRootFailure(errors));
	}
}

export function* fetchSingleItemSaga(action: RootsActions) {
	try {
		// @ts-ignore
		const response = yield call(getRoot, action.payload);

		yield put(fetchSingleItemSuccess(response));
	} catch (errors) {
		yield put(fetchSingleItemFailure(errors));
	}
}
