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

const FilmsPage = () => {
  const { root, isLoading } = useFetchData({ path: 'films' })
  const [state, setState] = useState({ name: '' })
  const { saveFavorite, isFavorite } = useFavorites('title')

  if (isLoading && !root) {
    return <LoadingComponent />
  }

  const filtered = filteredData('title', state.name, root?.results)

  return (
    <>
      <BigSearchComponent
        name='search'
        value={state.name}
        page='fielm'
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
          setState({ name: e.target.value })
        }
      />
      {filtered && filtered.length > 0 ? (
        <CardsContainer>
          <Row className='mt-5'>
            {filtered.map((item: any, index: number) => (
              <CardComponent
                key={index + 1}
                name={item.title}
                url={item.url}
                isFavorite={isFavorite('title', item.title)}
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

export default FilmsPage
