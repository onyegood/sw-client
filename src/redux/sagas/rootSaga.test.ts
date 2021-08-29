import { RouteNames } from '../../static-data/route-names';

import { call, put } from 'redux-saga/effects';
import { fetchRootRequest, fetchRootSuccess, fetchRootsRequest, fetchRootsSuccess } from '../actions';
import { fetchRootSaga, fetchRootsSaga } from './rootSaga';
import { getRoot, getRoots } from '../../api';
import { peoplePayload, personPayload } from '../../static-data/people-payload';

describe('Fetch data using saga', () => {
  it('fetch all root links successfully', () => {
    const fetchRootLinks = fetchRootsSaga(fetchRootsRequest());
    const response = { RouteNames };

    // console.log(fetchRootLinks.next())

    // expect(fetchRootLinks.next().value).toEqual(call(getRoots));

    // expect(fetchRootLinks.next(response).value).toEqual(
    //   put(fetchRootsSuccess(RouteNames)),
    // );
  });

  it('fetch all root links successfully', () => {
    const url = 'person';

    const fetchPerson = fetchRootSaga(fetchRootRequest(url));
    
    const response = { ...personPayload };

    expect(fetchPerson.next().value).toEqual(call(getRoot, url));

    expect(fetchPerson.next(response).value).toEqual(
      put(fetchRootSuccess(personPayload)),
    );
  });
});
