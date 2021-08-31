import AppLayout from '.';
import { RouteNames } from '../../static-data/route-names';
import { getRoots } from '../../api';
import {render} from '../../test-utils'
import { screen } from '@testing-library/react';

import * as React from 'react';

jest.mock('../../api');

const mockedRoots = getRoots as jest.Mock<Promise<any>>;

const mockFetchRoots = () =>
  mockedRoots.mockImplementation(() =>
    Promise.resolve(RouteNames),
  );

describe('<AppLayout/>', () => {
  beforeEach(() => mockFetchRoots());

  it('should render layout component without crashing', () => {
    render(
      <AppLayout>
        <p>Welcome to Star wars planet</p>
      </AppLayout>,
    );

    const logo = screen.getByTestId('logo');
    const facebookIcon = screen.getByTestId('Facebook');
    const instergramIcon = screen.getByTestId('Instergram');
    const twitterIcon = screen.getByTestId('Twitter');
    const youtubeIcon = screen.getByTestId('Youtube');

    // Ensure that star wars logo is visible
    expect(logo).toBeVisible();

    // Ensure that Facebook icon is visible
    expect(facebookIcon).toBeVisible()
        
    // Ensure that instergram icon is visible
    expect(instergramIcon).toBeVisible()
    
    // Ensure that twitter icon is visible
    expect(twitterIcon).toBeVisible()

    // Ensure that youtube icon is visible
    expect(youtubeIcon).toBeVisible()
  });
});
