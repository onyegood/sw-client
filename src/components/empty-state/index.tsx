import React from 'react'
import styled from 'styled-components'

import { Col, Container, Row } from 'reactstrap'

interface Props {
  text?: string
}

const EmptyStateContainer = styled(Container) `
  text-align: center;
  margin-top: 6%;
  .f-60{
    font-size: 60px;
  }
  .f-30{
    font-size: 30px;
  }
`

const EmptyStateComponent: React.FC<Props> = ({ text }) => {
  return (
    <EmptyStateContainer>
      <Row data-testid="empty-state-wrapper">
        <Col md="6" className="mx-auto">
          <span className="f-60" role="img" aria-label="emoji">😭</span>
          <p className='f-30' data-testid="empty-state-text">{text ? text : 'Uh-oh! No result found.'}</p>
        </Col>
      </Row>
    </EmptyStateContainer>
  )
}

export default EmptyStateComponent
