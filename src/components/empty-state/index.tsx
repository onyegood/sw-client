import React from 'react'

import { Col, Container, Row } from 'reactstrap'

interface Props {
  text?: string
}

const EmptyStateComponent: React.FC<Props> = ({ text }) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>{text ? text : 'No data found'}</h1>
        </Col>
      </Row>
    </Container>
  )
}

export default EmptyStateComponent
