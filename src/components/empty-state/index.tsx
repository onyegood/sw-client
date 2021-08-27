import React from 'react'
import styled from 'styled-components'

import { Col, Container, Row } from 'reactstrap'

interface Props {
  text?: string
}

const EmptyStateContainer = styled(Container) `
  text-align: center;
  margin-top: 6%;
`

const EmptyStateComponent: React.FC<Props> = ({ text }) => {
  return (
    <EmptyStateContainer>
      <Row>
        <Col md="6" className="mx-auto">
          <h1>{text ? text : 'No data found'}</h1>
        </Col>
      </Row>
    </EmptyStateContainer>
  )
}

export default EmptyStateComponent
