import BigSearchComponent from '../../components/big-search'
import CardComponent from '../../components/card'
import { CardsContainer } from '../../styles'
import EmptyStateComponent from '../../components/empty-state'
import LoadingComponent from '../../components/loading'
import React from 'react'
import { Row } from 'reactstrap'
import { useFetchData } from '../../hooks/useFetchRoot'
import useSearch from '../../hooks/useSearch'

const PeoplePage = () => {
  const { root, isLoading } = useFetchData({ path: 'people' })

  if (isLoading && !root) {
    return <LoadingComponent />
  }

  // const {filteredData} = useSearch();

  // const filteredPayload = filteredData(root?.results, "Luke Skywalker");

  // console.log(filteredPayload);

  return (
    <>
      <BigSearchComponent
        name='search'
        value=''
        page='people'
        onClick={() => {}}
        onChange={() => {}}
      />
      {root && root?.results.length > 0 ? (
        <CardsContainer>
          <Row className='mt-5'>
            {root?.results.map((item: any, index: number) => (
              <CardComponent key={index + 1} name={item.name} />
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
