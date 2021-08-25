import BigSearchComponent from '../../components/big-search'
import CardComponent from '../../components/card'
import { CardsContainer } from '../../styles'
import EmptyStateComponent from '../../components/empty-state'
import LoadingComponent from '../../components/loading'
import React from 'react'
import { Row } from 'reactstrap'
import { useFetchData } from '../../hooks/useFetchRoot'

const VehiclesPage = () => {
  const { root, isLoading } = useFetchData({ path: 'vehicles' })

  if (isLoading && !root) {
    return <LoadingComponent />
  }

  return (
    <>
      <BigSearchComponent 
      name='search'
      value=''
      page='Vehicles'
      onClick={() => {}}
      onChange={() => {}}
      />
      {root && root?.results.length > 0 ? (
        <CardsContainer>
          <Row className='mt-5'>
            {root?.results.map((item: any) => (
              <CardComponent
                key={item.name}
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

export default VehiclesPage
