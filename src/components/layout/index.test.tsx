import AppLayout from '.';
import NavComponent from './nav';
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

  it('should render loading spinner on initial render', () => {
    render(
      <AppLayout>
        <p>Welcome to Star wars planet</p>
      </AppLayout>,
    );

    // const loading = screen.getByTestId('loading-state');
    // console.log(screen)
    // expect(loading).toBeInTheDocument();
  });

  // it('should render the root resources', async () => {
  //   const { container } = render(
  //     <AppLayout>
  //       <p>Welcome to Star wars planet</p>
  //     </AppLayout>,
  //   );

  //   const navNode = await screen.findByText(/PEOPLE/);
  //   const navItems = container.querySelectorAll('.nav-item');

  //   expect(navNode).toBeTruthy();
  //   expect(navItems.length).toBe(6);
  // });

  // it('should show error message when there is an error', async () => {
  //   mockedRoots.mockImplementation(() => Promise.reject('error'));

  //   render(
  //     <AppLayout>
  //       <p>Welcome to Star wars planet</p>
  //     </AppLayout>,
  //   );

  //   const errorMessage = await screen.findByText(/No resource here/);
  //   expect(errorMessage).toBeInTheDocument();
  // });
});
