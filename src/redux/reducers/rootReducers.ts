import initialState from './initial-state';

import { FETCH_ROOTS, FETCH_ROOTS_FAILURE, FETCH_ROOTS_SUCCESS, FETCH_ROOT_FAILURE, FETCH_ROOT_REQUEST, FETCH_ROOT_SUCCESS } from '../types';

export default (state = initialState.roots, action: { type: string; payload: string; }) => {
	switch (action.type) {
		case FETCH_ROOTS:
		case FETCH_ROOT_REQUEST:
			return { isLoading: true };

		case FETCH_ROOTS_FAILURE:
		case FETCH_ROOT_FAILURE:
			return {
				isLoading: false,
				error: action.payload,
			};

		case FETCH_ROOTS_SUCCESS:
			return {
				...state,
				isLoading: false,
				payload: action.payload,
			};
			
		case FETCH_ROOT_SUCCESS:
			return {
				...state,
				isLoading: false,
				root: action.payload,
			};
		default:
			return state;
	}
}
