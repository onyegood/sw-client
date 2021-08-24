import BigSearchComponent from '../../components/big-search'
import CardComponent from '../../components/card'
import { CardsContainer } from '../../styles'
import React from 'react'
import { Row } from 'reactstrap'

const SpeciesPage = () => {
  return (
    <>
      <BigSearchComponent />
      <CardsContainer>
        <Row className='mt-5'>
          <CardComponent />
        </Row>
      </CardsContainer>
    </>
  )
}

export default SpeciesPage
