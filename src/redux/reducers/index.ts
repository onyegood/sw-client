import { combineReducers } from 'redux';
import roots from "./rootReducers";

const rootReducer = combineReducers({
	roots
});


export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
