import BigSearchComponent from '../../components/big-search'
import CardComponent from '../../components/card'
import { CardsContainer } from '../../styles'
import EmptyStateComponent from '../../components/empty-state'
import LoadingComponent from '../../components/loading'
import { Row } from 'reactstrap'
import { filteredData } from '../../helpers/searchHelper'
import { useFetchData } from '../../hooks/useFetchRoot'

import React, { useState } from 'react'

const SpeciesPage = () => {
  const { root, isLoading } = useFetchData({ path: 'species' })
  const [state, setState] = useState({ name: '' })

  if (isLoading && !root) {
    return <LoadingComponent />
  }

  const filtered = filteredData('name', state.name, root?.results);

  return (
    <>
      <BigSearchComponent
        name='search'
        value={state.name}
        page='species'
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
          setState({ name: e.target.value })
        }
      />
      {filtered && filtered.length > 0 ? (
        <CardsContainer>
          <Row className='mt-5'>
            {filtered.map(
              (item: any, index: number) => (
                <CardComponent key={index + 1} name={item.name} url={item.url} />
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

export default SpeciesPage
