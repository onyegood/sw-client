import React from 'react'
import styled from 'styled-components'

import { Col, Container, Row } from 'reactstrap'

const PageNotyFoundContainer = styled(Container) `
  text-align: center;
  margin-top: 6%;
`

const PageNotFound: React.FC = () => {
  return <PageNotyFoundContainer>
      <Row data-testid="page-not-fount-container">
        <Col md="6" className="mx-auto">
          <h1 data-testid="page-not-fount-text">Ooh! page not found</h1>
        </Col>
      </Row>
    </PageNotyFoundContainer>
}

export default PageNotFound
