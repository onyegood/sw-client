import PeoplePage from '.';
import { getRoot } from '../../api';
import { peoplePayload } from '../../static-data/people-payload';
import {render} from '../../test-utils'

import * as React from 'react';

import { fireEvent, screen } from '@testing-library/react';

jest.mock('../../api');

const mockedRoots = getRoot as jest.Mock<Promise<any>>;

const mockFetchPeople = () =>
  mockedRoots.mockImplementation(() =>
    Promise.resolve(peoplePayload),
  );
  
describe('<PeoplePage/>', () => {
  beforeEach(() => mockFetchPeople());

  it('should render people page without crash', () => {
    const {container} = render(
      <PeoplePage />,
    );

    const {getByTestId, getByText} = screen;
    
    const isLoading = getByTestId('loading-state');
    const isLoadingText = getByTestId('loading-text');
    
    // Insure that isLoading is in the dom
    expect(isLoading).toBeInTheDocument();
    expect(isLoadingText).toBeInTheDocument();
    expect(getByText("Fetching data...")).toBeInTheDocument()
  });
});