import BigSearchComponent from '../../components/big-search'
import CardComponent from '../../components/card'
import { CardsContainer } from '../../styles'
import EmptyStateComponent from '../../components/empty-state'
import LoadingComponent from '../../components/loading'
import { Row } from 'reactstrap'
import { filteredData } from '../../helpers/searchHelper'
import { useFetchData } from '../../hooks/useFetchRoot'

import React, { useState } from 'react'

const VehiclesPage = () => {
  const { root, isLoading } = useFetchData({ path: 'vehicles' })
  const [state, setState] = useState({ name: '' })

  if (isLoading && !root) {
    return <LoadingComponent />
  }

  const handleFilterData = () => {}

  const filtered = filteredData('name', state.name, root?.results);

  return (
    <>
      <BigSearchComponent
        name='search'
        value={state.name}
        page='Vehicles'
        onClick={() => handleFilterData()}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
          setState({ name: e.target.value })
        }
      />
      {filtered && filtered.length > 0 ? (
        <CardsContainer>
          <Row className='mt-5'>
            {filtered.map(
              (item: any) => (
                <CardComponent key={item.name} name={item.name} />
              )
            )}
          </Row>
        </CardsContainer>
      ) : (
        <EmptyStateComponent />
      )}
    </>
  )
}

export default VehiclesPage
