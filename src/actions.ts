import { Dispatch } from 'react';
import { getRoots } from './api';

import {
	FETCH_ROOTS,
	FETCH_ROOTS_FAILURE,
	FETCH_ROOTS_SUCCESS,
} from './constants';
import { IFetchRoots, IFetchRootsFailure, IFetchRootsSuccess } from './interfaces/index';

export const fetchRoots = () => (dispatch: Dispatch<IFetchRoots | IFetchRootsSuccess | IFetchRootsFailure>) => {
	dispatch({ type: FETCH_ROOTS });

	const request = getRoots();

	return request.then(
		resp => dispatch({ type: FETCH_ROOTS_SUCCESS, payload: resp }),
		error => dispatch({ type: FETCH_ROOTS_FAILURE, payload: error }),
	);
};
