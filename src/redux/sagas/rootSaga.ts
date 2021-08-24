import { call, put } from 'redux-saga/effects';
import { fetchRootFailure, fetchRootSuccess, fetchRootsFailure, fetchRootsSuccess } from '../actions/rootsAction';
import { getRoot, getRoots } from '../../api';

export function* fetchRootsSaga(action: any) {
  try {
    // @ts-ignore
    const response = yield call(getRoots, action);
    yield put(fetchRootsSuccess(response));
  } catch (errors) {
    console.log(errors);
    yield put(fetchRootsFailure(errors));
  }
}

export function* fetchRootSaga(action: any) {
  try {
    // @ts-ignore
    const response = yield call(getRoot, action.payload);
    yield put(fetchRootSuccess(response));
  } catch (errors) {
    console.log(errors);
    yield put(fetchRootFailure(errors));
  }
}