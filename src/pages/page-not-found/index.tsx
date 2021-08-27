import React from 'react'
import styled from 'styled-components'

import { Col, Container, Row } from 'reactstrap'
const PageNotyFoundContainer = styled(Container) `
  text-align: center;
  margin-top: 6%;
`

const PageNotFound: React.FC = () => {
  return <PageNotyFoundContainer>
      <Row>
        <Col md="6" className="mx-auto">
          <h1>Ooh! page not found</h1>
        </Col>
      </Row>
    </PageNotyFoundContainer>
}

export default PageNotFound
