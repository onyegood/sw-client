import BigSearchComponent from '../../components/big-search'
import CardComponent from '../../components/card'
import { CardsContainer } from '../../styles'
import EmptyStateComponent from '../../components/empty-state'
import LoadingComponent from '../../components/loading'
import { Row } from 'reactstrap'
import { filteredData } from '../../helpers/searchHelper'
import { useFetchData } from '../../hooks/useFetchRoot'

import React, { useState } from 'react'

const StarshipsPage = () => {
  const { root, isLoading } = useFetchData({ path: 'starships' })
  const [state, setState] = useState({ name: '' })
  
  if (isLoading && !root) {
    return <LoadingComponent />
  }

  const filtered = filteredData('name', state.name, root?.results);

  const handleFilterData = () => {}

  return (
    <>
      <BigSearchComponent
      name='search'
        value={state.name}
        page='starships'
        onClick={() => handleFilterData()}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
          setState({ name: e.target.value })
        }
      />
      {filtered && filtered.length > 0 ? (
        <CardsContainer>
          <Row className='mt-5'>
            {filtered.map((item: any) => (
              <CardComponent
                key={item.name}
                name={item.name}
                url={item.url}
              />
            ))}
          </Row>
        </CardsContainer>
      ) : (
        <EmptyStateComponent />
      )}
    </>
  )
}

export default StarshipsPage
