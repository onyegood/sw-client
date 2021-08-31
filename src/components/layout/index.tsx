import { Col, Nav, Row } from 'reactstrap'
import NavComponent from './nav'
import React, { useState } from 'react'
import CustomNavItem from './nav/CustomNavItem'
import useStoredData from '../../hooks/useStoredData'
import AppLogo from '../logo'
import Icon from '../icons'
import { LayoutContainer } from './Style'

const AppLayout = ({ children }: any) => {
  const { roots } = useStoredData()
  const [show, setShow] = useState(false)

  return (
    <LayoutContainer fluid={true}>
      <Row className='mt-4 mobile-control'>
        <Col className='logo'>
          <AppLogo />
        </Col>
        <Col className='text-right'>
          <span onClick={() => setShow(!show)} className='p-4'>
            <Icon
              id={show ? 'close-icon' : 'menue-icon'}
              className='text-white'
              width='40'
              height='40'
            />
          </span>
        </Col>
      </Row>

      <div className={show ? 'mobile-nave' : 'display'}>
        <Row>
          <Col md='4' className='mt-5'>
            <Nav>
              {roots.map((k: string) => (
                <CustomNavItem key={k} title={k} />
              ))}
            </Nav>
          </Col>
        </Row>
      </div>
      <NavComponent />
      {children}
    </LayoutContainer>
  )
}

export default AppLayout
