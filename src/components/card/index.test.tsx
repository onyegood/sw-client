import CardComponent from '.';
import {render} from '../../test-utils'

import * as React from 'react';

import { fireEvent, screen } from '@testing-library/react';

describe('<CardComponent/>', () => {
  it('should render card component without crash', () => {
    render(
      <CardComponent name="Luke Skywalker" url="people" />,
    );

    const {getByTestId} = screen;

    const cardTitle = getByTestId('card-title');
    const cardContainer = getByTestId('card-container');

    // Insure that card container is in the dom
    expect(cardContainer).toBeInTheDocument();
    
    // Simulate that card container was clicked
    fireEvent.click(cardContainer);
    
    // Insure that card title is in the dom
    expect(cardTitle).toBeInTheDocument();

    // Insure that card title has the text
    expect(cardTitle).toHaveTextContent('Luke Skywalker')
  });
});