import { IGeneric } from "../models/IGeneric";
import { IPerson } from "../models/IPerson";
import { IRoots } from "../models/IRoots";

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