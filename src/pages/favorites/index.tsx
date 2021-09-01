import BigSearchComponent from '../../components/big-search'
import CardComponent from '../../components/card'
import { CardsContainer } from '../../styles'
import EmptyStateComponent from '../../components/empty-state'
import LoadingComponent from '../../components/loading'
import { Row } from 'reactstrap'
import { filteredData } from '../../helpers/searchHelper'

import React, { useState } from 'react'
import useFavorites from '../../hooks/useFavorites'
import { useSelector } from 'react-redux'
import { IRootState } from '../../interfaces'

const FavoritesPage = () => {
  const {isLoading} = useSelector((state: IRootState) => state.roots)
  const [state, setState] = useState({ name: '' })
  const key = 'name' || 'title';
  const { saveFavorite, isFavorite, favorites } = useFavorites(key)
  

  if (isLoading && !favorites) {
    return <LoadingComponent />
  }

  const filtered = filteredData('title', state.name, favorites)

  console.log('favorites = == ', favorites);

  return (
    <>
      <BigSearchComponent
        name='search'
        value={state.name}
        page='favorites'
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
          setState({ name: e.target.value })
        }
      />
      {favorites && favorites.length > 0 ? (
        <CardsContainer>
          <Row className='mt-5' data-testid='favorites'>
            {favorites.map((item: any, index: number) => (
              <CardComponent
                key={index + 1}
                name={item?.name || item?.title}
                url={item.url}
                isFavorite={isFavorite(item?.name ? 'name' : 'title', item?.name || item?.title)}
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

export default FavoritesPage
