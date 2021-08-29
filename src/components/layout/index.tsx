import { Container } from 'reactstrap'
import NavComponent from './nav'
import React from 'react'
const AppLayout = ({ children}: any) => {
  return (
    <Container fluid={true}>
      <NavComponent />
      {children}
    </Container>
  )
}

export default AppLayout
