import BigSearchComponent from '../../components/big-search'
import CardComponent from '../../components/card'
import { CardsContainer } from '../../styles'
import EmptyStateComponent from '../../components/empty-state'
import LoadingComponent from '../../components/loading'
import { Row } from 'reactstrap'
import { filteredData } from '../../helpers/searchHelper'
import { useFetchData } from '../../hooks/useFetchRoot'

import React, { useState } from 'react'

const PlanetsPage = () => {
  const { root, isLoading } = useFetchData({ path: 'planets' })
  const [state, setState] = useState({ name: '' })

  if (isLoading && !root) {
    return <LoadingComponent />
  }

  const handleFilterData = () => {}

  return (
    <>
      <BigSearchComponent
        name='search'
        value={state.name}
        page='planets'
        onClick={() => handleFilterData()}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
          setState({ name: e.target.value })}
      />
      {root && root?.results.length > 0 ? (
        <CardsContainer>
          <Row className='mt-5'>
            {filteredData('name', state.name, root?.results).map(
              (item: any, index: number) => (
                <CardComponent key={index + 1} name={item.name} />
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

export default PlanetsPage
