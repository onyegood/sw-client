import AppLogo from '../../logo'
import CustomNavItem from './CustomNavItem'
import { Link } from 'react-router-dom'
import { NavContainer } from './Style'
import React from 'react'
import SocialMediaLinks from '../../social-media'
import useStoredData from '../../../hooks/useStoredData'

import { Col, Nav, Row } from 'reactstrap'
import Icon from '../../icons'

const NavComponent = () => {
  const { roots } = useStoredData()

  return (
    <NavContainer className='display-none'>
      <Row>
        <SocialMediaLinks />

        <Col xs='4' className='text-center'>
          <AppLogo />
        </Col>
        <Col xs='4' md={{ size: 2, offset: 2 }} className='text-right'>
          <div className="mr-4 md-4 favorite">
            <Link to='#'>
              <Icon id='love-icon' width='20' height='20' /> Favorites
            </Link>
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
