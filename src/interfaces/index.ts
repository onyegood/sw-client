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

export interface SocialMediaObject {
	id: number;
	name: string;
	icon: string;
	url: string;
}