import { AnyAction } from 'redux';
import initialState from './initial-state';

import {
	FETCH_ROOTS,
	FETCH_ROOTS_FAILURE,
	FETCH_ROOTS_SUCCESS,
	FETCH_ROOT_FAILURE,
	FETCH_ROOT_REQUEST,
	FETCH_ROOT_SUCCESS,
	FETCH_SINGLE_ITEM_FAILURE,
	FETCH_SINGLE_ITEM_REQUEST,
	FETCH_SINGLE_ITEM_SUCCESS
} from '../types';

export default (state = initialState, action: AnyAction) => {
	switch (action.type) {
		case FETCH_ROOTS:
		case FETCH_ROOT_REQUEST:
		case FETCH_SINGLE_ITEM_REQUEST:
			return { isLoading: true };

		case FETCH_ROOTS_FAILURE:
		case FETCH_ROOT_FAILURE:
		case FETCH_SINGLE_ITEM_FAILURE:
			return {
				isLoading: false,
				error: action.payload,
			};

		case FETCH_ROOTS_SUCCESS:
			return {
				...state,
				isLoading: false,
				roots: action.payload,
			};

		case FETCH_ROOT_SUCCESS:
			return {
				...state,
				isLoading: false,
				root: action.payload,
			};

		case FETCH_SINGLE_ITEM_SUCCESS:
			return {
				...state,
				isLoading: false,
				detail: action.payload,
			};
		default:
			return state;
	}
}