import BigSearchComponent from '../../components/big-search'
import CardComponent from '../../components/card'
import { CardsContainer } from '../../styles'
import EmptyStateComponent from '../../components/empty-state'
import LoadingComponent from '../../components/loading'
import { Row } from 'reactstrap'
import { filteredData } from '../../helpers/searchHelper'
import { useFetchData } from '../../hooks/useFetchRoot'

import React, { useState } from 'react'
import useFavorites from '../../hooks/useFavorites'

const PeoplePage = () => {
  const { root, isLoading } = useFetchData({ path: 'people' })
  const [state, setState] = useState({ name: '' })
  const { saveFavorite, isFavorite } = useFavorites('name')

  if (isLoading && !root) {
    return <LoadingComponent />
  }

  const filtered = filteredData('name', state.name, root?.results)

  return (
    <>
      <BigSearchComponent
        name='search'
        value={state.name}
        page='people'
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
          setState({ name: e.target.value })
        }
      />
      {filtered && filtered.length > 0 ? (
        <CardsContainer>
          <Row className='mt-5' data-testid='people'>
            {filtered.map((item: any, index: number) => (
              <CardComponent
                key={index + 1}
                name={item.name}
                url={item.url}
                isFavorite={isFavorite('name', item.name)}
                handleAddToFavorite={() => saveFavorite(item)}
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

export default PeoplePage
