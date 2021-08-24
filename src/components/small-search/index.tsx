import React from 'react'
import { Search } from '../../assets'

const SmallSearchComponent = () => (
  <div className='search-box'>
    <input
      id='nav-search-input'
      name='q'
      type='text'
      placeholder='Search Star Wars'
      value=''
      onChange={() => {}}
    />
    <img src={Search} alt='Search Star Wars' />
  </div>
)

export default SmallSearchComponent
