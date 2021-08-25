import BigSearchComponent from '../../components/big-search'
import CardComponent from '../../components/card'
import { CardsContainer } from '../../styles'
import EmptyStateComponent from '../../components/empty-state'
import LoadingComponent from '../../components/loading'
import React from 'react'
import { Row } from 'reactstrap'
import { useFetchData } from '../../hooks/useFetchRoot'

const PlanetsPage = () => {
  const { root, isLoading } = useFetchData({ path: 'planets' })

  if (isLoading && !root) {
    return <LoadingComponent />
  }

  return (
    <>
      <BigSearchComponent
      name='search'
      value=''
      page='planets'
      onClick={() => {}}
      onChange={() => {}}
       />
      {root && root?.results.length > 0 ? (
        <CardsContainer>
          <Row className='mt-5'>
            {root?.results.map((item: any, index: number) => (
              <CardComponent
                key={index + 1}
                name={item.name}
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

export default PlanetsPage
