import rootReducer from 'reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from 'redux';


export default () => {
	return createStore(
		rootReducer,
		composeWithDevTools(applyMiddleware(thunk))
	);
};
