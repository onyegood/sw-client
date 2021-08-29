import CardComponent from '.';
import {render} from '../../test-utils'
import { screen } from '@testing-library/react';

import * as React from 'react';

describe('<CardComponent/>', () => {
  it('should render card component without crash', () => {
    render(
      <CardComponent name="Luke Skywalker" url="people" />,
    );

    const {getByTestId} = screen;

    const cardTitle = getByTestId('card-title');
    const cardContainer = getByTestId('card-container');
    const placeholder = getByTestId('card-image-placeholder');
    


    expect(cardTitle).toBeInTheDocument();
    expect(cardTitle).toHaveTextContent('Luke Skywalker')

    expect(cardContainer).toBeInTheDocument();

    expect(placeholder).toBeInTheDocument();
    expect(placeholder).toHaveTextContent("Image Placeholder")
  });
});