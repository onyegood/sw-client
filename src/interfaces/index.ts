import { IGeneric } from "../models/IGeneric";
import { IPerson } from "../models/IPerson";
import { IRoots } from "../models/IRoots";

export interface IActions {
	FETCH_ROOTS: string;
	FETCH_ROOTS_SUCCESS: string;
	FETCH_ROOTS_FAILURE: string;
}

export interface IFetchRoots {
  type: IActions['FETCH_ROOTS'];
}
export interface IFetchRootsSuccess {
  type: IActions['FETCH_ROOTS_SUCCESS'];
	payload: any
}

export interface IFetchRootsFailure {
  type: IActions['FETCH_ROOTS_FAILURE'];
	payload: any
}

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