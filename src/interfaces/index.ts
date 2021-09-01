import { IGeneric } from '../models/IGeneric';
import { IPerson } from '../models/IPerson';
import { IRoots } from '../models/IRoots';
import { FETCH_ROOTS_FAILURE, FETCH_ROOTS_SUCCESS, FETCH_ROOTS, FETCH_ROOT_REQUEST, FETCH_ROOT_SUCCESS, FETCH_ROOT_FAILURE, FETCH_SINGLE_ITEM_REQUEST, FETCH_SINGLE_ITEM_SUCCESS, FETCH_SINGLE_ITEM_FAILURE} from '../redux/types';
export interface IRootState {
	roots: {
		isLoading: boolean,
		error: string | null,
		root: {
			count?: number,
			next?: string,
			previous: null,
			results: IPerson[]
		},
		detail: IGeneric,
		roots: IRoots
	}
}
export interface IFetchRootsSuccessPayload {
	roots: IRoots;
}
export interface IFetchRootsRequest {
	type: typeof FETCH_ROOTS;
}

export type IFetchRootsSuccess = {
	type: typeof FETCH_ROOTS_SUCCESS;
	payload: IFetchRootsSuccessPayload;
};

export type IFetchRootsFailure = {
	type: typeof FETCH_ROOTS_FAILURE;
	payload: string;
};
export interface IFetchRootSuccessPayload {
	root: {
		count?: number,
		next?: string,
		previous: null,
		results: IPerson[]
	};
}
export interface IFetchRootRequest {
	type: typeof FETCH_ROOT_REQUEST;
	payload: string;
}

export type IFetchRootSuccess = {
	type: typeof FETCH_ROOT_SUCCESS;
	payload: IFetchRootSuccessPayload;
};

export type IFetchRootFailure = {
	type: typeof FETCH_ROOT_FAILURE;
	payload: string;
};
export interface IFetchSingleItemSuccessPayload {
	detail: IGeneric
}
export interface IFetchSingleItemRequest {
	type: typeof FETCH_SINGLE_ITEM_REQUEST;
	payload: string;
}

export type IFetchSingleItemSuccess = {
	type: typeof FETCH_SINGLE_ITEM_SUCCESS;
	payload: IFetchSingleItemSuccessPayload;
};

export type IFetchSingleItemFailure = {
	type: typeof FETCH_SINGLE_ITEM_FAILURE;
	payload: string;
};

export type RootsActions =
	IFetchRootsRequest
	| IFetchRootsSuccess
	| IFetchRootsFailure
	|	IFetchRootRequest
	|	IFetchRootSuccess
	|	IFetchRootFailure
	| IFetchSingleItemRequest
	| IFetchSingleItemSuccess
	| IFetchSingleItemFailure
