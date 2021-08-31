import AppLogo from '../../logo'
import CustomNavItem from './CustomNavItem'
import DarkModeControl from '../../dark-mode-button'
import { Link } from 'react-router-dom'
import { NavContainer } from './Style'
import React from 'react'
import SocialMediaLinks from '../../social-media'
import useStoredData from '../../../hooks/useStoredData'

import { Col, Nav, Row } from 'reactstrap'

const NavComponent = () => {
  const { roots } = useStoredData()

  return (
    <NavContainer className='display-none'>
      <Row >
        <SocialMediaLinks />

        <Col xs='4' className='text-center'>
          <AppLogo />
        </Col>
        <Col xs='4' md={{ size: 2, offset: 2 }} className='text-right'>
          <DarkModeControl />
          <div className='text-right mt-1 auth'>
            <Link to='#'>LOG IN</Link>
            <span className='slash'> / / </span>
            <Link to='#'>SIGN UP</Link>
          </div>
        </Col>
      </Row>
      <Row className='nav-bar'>
        <Col md='7 mx-auto'>
          <Nav>
            {roots.map((k: string) => (
              <CustomNavItem key={k} title={k} />
            ))}
          </Nav>
        </Col>
      </Row>
    </NavContainer>
  )
}

export default NavComponent
