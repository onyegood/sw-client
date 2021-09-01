import { Provider } from 'react-redux';
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import createSagaMiddleware from 'redux-saga';

import { RenderOptions, render as rtlRender } from '@testing-library/react';
import { Store, applyMiddleware, compose, createStore } from 'redux';
import rootReducer, { RootState } from '../src/redux/reducers';

const sagaMiddleware = createSagaMiddleware();

const render = (
	ui: React.ReactElement,
	{
		initialState,
		store = createStore(
			rootReducer,
			initialState,
			compose(applyMiddleware(sagaMiddleware)),
		),
		...renderOptions
	}: {
    initialState?: RootState;
    store?: Store<RootState>;
    renderOptions?: RenderOptions;
  } = {},
) => {
	const history = createMemoryHistory();

	const Wrapper: React.FC = ({ children }) => (
		<Provider store={store}>
			<Router history={history}>{children}</Router>
		</Provider>
	);

	return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { render };
