const initialState = {
	isLoading: true,
	error: void 0,
	root: {
		count: 0,
		next: '',
		previous: null,
		results: [],
	},
	roots: {
		people: '',
		planets: '',
		films: '',
		species: '',
		vehicles: '',
		starships: '',
	},
	detail: {},
};

export default initialState;
