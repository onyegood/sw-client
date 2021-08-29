import { BigSearchContainer } from './style'
import { Button } from 'reactstrap'
import React from 'react'

interface Props {
  name: string;
  value: string;
  page: string;
  onClick: () => void;
  onChange: (e: any) => void;
}
const BigSearchComponent = ({ name, value, page, onClick, onChange }: Props) => (
  <BigSearchContainer>
    <div className='search-wrapper' data-testid="search-wrapper">
      <input
        name={name}
        type='text'
        placeholder={`SEARCH ${page.toUpperCase()}`}
        value={value}
        onChange={onChange}
        data-testid="search-input"
      />
      <Button onClick={onClick} data-testid="search-button">SEARCH</Button>
    </div>
  </BigSearchContainer>
)

export default BigSearchComponent
