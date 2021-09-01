import PageNotFound from '.';
import { render } from '../../test-utils';
import { screen } from '@testing-library/react';

import * as React from 'react';

describe('<VehiclesPage/>', () => {
	it('should render starships page without crash', () => {
		render(
			<PageNotFound />,
		);

		const { getByTestId, getByText } = screen;

		const wrapper = getByTestId('page-not-fount-container');

		expect(wrapper).toBeInTheDocument();

		// Insure that isLoading is in the dom
		expect(getByText('Ooh! page not found')).toBeInTheDocument();
	});
});
