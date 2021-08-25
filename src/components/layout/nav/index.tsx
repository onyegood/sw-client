import CustomNavItem from './CustomNavItem'
import { Link } from 'react-router-dom'
import { Logo } from '../../../assets'
import { NavContainer } from './Style'
import React from 'react'
import SmallSearchComponent from '../../small-search'
import SocialMediaLinks from '../../social-media'
import { useFetchData } from '../../../hooks/useFetchRoot'

import { Col, Nav, Row } from 'reactstrap'

const NavComponent = () => {
  const {linkPayload} = useFetchData({});

  return (
    <NavContainer fluid={true}>
      <Row>
        <SocialMediaLinks />

        <Col xs='4' className='text-center'>
          <img src={Logo} alt='Star Wars Logo' />
        </Col>
        <Col xs='4' md={{ size: 2, offset: 2 }}>
          <SmallSearchComponent />
          <div className='text-right mt-1 auth'>
            <Link to='#'>LOG IN</Link>
            <span className='slash'> / / </span>
            <Link to='#'>SIGN UP</Link>
          </div>
        </Col>
      </Row>
      <Row className='nav-bar'>
        <Col md='7' className='mx-auto'>
          <Nav>
            {linkPayload.map((k: string) => (
              <CustomNavItem key={k} title={k} />
            ))}
          </Nav>
        </Col>
      </Row>
    </NavContainer>
  )
}

export default NavComponent
