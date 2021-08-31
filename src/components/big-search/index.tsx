import { BigSearchContainer } from './style'
import { Button } from 'reactstrap'
import React from 'react'

interface Props {
  name: string;
  value: string;
  page: string;
  onChange: (e: any) => void;
}
const BigSearchComponent = ({ name, value, page, onChange }: Props) => (
  <BigSearchContainer>
    <div className='search-wrapper mt-4' data-testid="search-wrapper">
      <input
        name={name}
        type='text'
        placeholder={`SEARCH ${page.toUpperCase()}`}
        value={value}
        onChange={onChange}
        data-testid="search-input"
      />
      {/* <Button onClick={onClick} data-testid="search-button">SEARCH</Button> */}
    </div>
  </BigSearchContainer>
)

export default BigSearchComponent
