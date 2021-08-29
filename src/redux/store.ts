import appRootSaga from "./sagas";
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';

import { applyMiddleware, compose, createStore } from 'redux';

// Create sage middleware runner
const sagaMiddleware = createSagaMiddleware();

// Enable devtools access in development environment only
// @ts-ignore
const enhanceCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create redux store
export const store = createStore(
	rootReducer,
	enhanceCompose(applyMiddleware(sagaMiddleware))
);

// Run redux sage
sagaMiddleware.run(appRootSaga);