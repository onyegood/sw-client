import BigSearchComponent from '../../components/big-search'
import CardComponent from '../../components/card'
import { CardsContainer } from '../../styles'
import EmptyStateComponent from '../../components/empty-state'
import LoadingComponent from '../../components/loading'
import React from 'react'
import { Row } from 'reactstrap'
import { useFetchData } from '../../hooks/useFetchRoot'

const FilmsPage = () => {
  const { root, isLoading } = useFetchData({ path: 'films' })

  if (isLoading && !root) {
    return <LoadingComponent />
  }

  return (
    <>
      <BigSearchComponent 
      name='search'
      value=''
      page='films'
      onClick={() => {}}
      onChange={() => {}}
      />
      {root && root?.results.length > 0 ? (
        <CardsContainer>
          <Row className='mt-5'>
            {root?.results.map((item: any, index: number) => (
              <CardComponent key={index + 1} name={item.title} />
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
