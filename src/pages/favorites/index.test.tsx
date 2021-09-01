import { render } from '../../test-utils';

import * as React from 'react';

import { screen } from '@testing-library/react';
import FavoritesPage from '.';

describe('<FavoritesPage/>', () => {
	it('should render favorite page without crash', () => {
		render(
			<FavoritesPage />,
		);

		const { getByTestId } = screen;

		const emptyState = getByTestId('empty-state-text');

		// Insure that empty state is in the dom
		expect(emptyState).toBeInTheDocument();
	});
});
