import { RouteNames } from '../../static-data/route-names';
import { personPayload } from '../../static-data/people-payload';

import { call, put } from 'redux-saga/effects';
import {
	fetchRootFailure,
	fetchRootRequest,
	fetchRootSuccess,
	fetchRootsFailure,
	fetchRootsRequest,
	fetchRootsSuccess,
	fetchSingleItemFailure,
	fetchSingleItemRequest,
	fetchSingleItemSuccess,
} from '../actions';
import { fetchRootSaga, fetchRootsSaga, fetchSingleItemSaga } from './rootSaga';
import { getRoot, getRoots } from '../../api';

describe('Fetch data using saga', () => {
	it('fetch all root links successfully', () => {
		const fetchRootLinks = fetchRootsSaga(fetchRootsRequest());
		const response = { ...RouteNames };

		expect(fetchRootLinks.next().value).toEqual(call(getRoots));

		expect(fetchRootLinks.next(response).value).toEqual(
			put(fetchRootsSuccess(RouteNames)),
		);
	});

	it('fetch all root links failed', () => {
		const error = 'Oops! something went wrong.';
		const gen = fetchRootsSaga(fetchRootsRequest());

		gen.next();
		expect(gen.throw('Oops! something went wrong.').value).toEqual(put(fetchRootsFailure(error)));
	});

	it('fetch all persons successfully', () => {
		const url = 'person';

		const fetchPerson = fetchRootSaga(fetchRootRequest(url));

		const response = { ...personPayload };
		
		expect(fetchPerson.next().value).toEqual(call(getRoot, url));

		expect(fetchPerson.next(response).value).toEqual(
			put(fetchRootSuccess(personPayload)),
		);
	});

	it('fetch all persons failed', () => {
		const url = 'person';
		const error = 'Oops! something went wrong.';
		const gen = fetchRootSaga(fetchRootRequest(url));

		gen.next();
		expect(gen.throw('Oops! something went wrong.').value).toEqual(put(fetchRootFailure(error)));
	});

	it('fetch a single item successfully', () => {
		const url = 'people/3';

		const fetchPerson = fetchSingleItemSaga(fetchSingleItemRequest(url));

		const response = { ...personPayload };

		expect(fetchPerson.next().value).toEqual(call(getRoot, url));

		expect(fetchPerson.next(response).value).toEqual(
			put(fetchSingleItemSuccess(personPayload)),
		);
	});

	it('fetch a single item failed', () => {
		const url = 'people/3';
		const error = 'Oops! something went wrong.';
		const gen = fetchSingleItemSaga(fetchSingleItemRequest(url));

		gen.next();
		expect(gen.throw('Oops! something went wrong.').value).toEqual(put(fetchSingleItemFailure(error)));
	});
});
