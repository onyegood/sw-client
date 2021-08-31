import BigSearchComponent from '.'
import { render } from '../../test-utils'

import * as React from 'react'

import { fireEvent, screen } from '@testing-library/react'

describe('<BigSearchComponent/>', () => {
  it('should render search component without crash', () => {
    render(
      <BigSearchComponent
        name='search'
        value='Search Item'
        page='People'
        onChange={() => jest.fn()}
      />
    )

    const { getByTestId } = screen

    const wrapper = getByTestId('search-wrapper')
    const input = getByTestId('search-input')

    // Insure that search component is in the dom
    expect(wrapper).toBeInTheDocument()

    // Insure that search input field is in the dom
    expect(input).toBeInTheDocument()

    // Simulate searching items
    fireEvent.change(input, {target: {value: 'a'}})
  })
})
