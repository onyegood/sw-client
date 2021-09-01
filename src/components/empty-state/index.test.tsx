import EmptyStateComponent from '.';
import { render } from '../../test-utils';
import { screen } from '@testing-library/react';

import * as React from 'react';

describe('<BigSearchComponent/>', () => {
	it('should render search component without crash', () => {
		render(
			<EmptyStateComponent />,
		);

		const { getByTestId } = screen;

		const wrapper = getByTestId('empty-state-wrapper');
		const text = getByTestId('empty-state-text');

		// Insure that search component is in the dom
		expect(wrapper).toBeInTheDocument();

		// Insure that search text field is in the dom
		expect(text).toBeInTheDocument();

		expect(text).toHaveTextContent('Uh-oh! No result found.');
	});

	it('should render search component without crash', () => {
		render(
			<EmptyStateComponent text="Oops!" />,
		);

		const { getByTestId } = screen;
		const text = getByTestId('empty-state-text');

		expect(text).toHaveTextContent('Oops!');
	});
});
