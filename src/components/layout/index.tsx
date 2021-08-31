import { Col, Container, Nav, Row } from 'reactstrap'
import NavComponent from './nav'
import React, { useState } from 'react'
import styled from 'styled-components'
import CustomNavItem from './nav/CustomNavItem'
import useStoredData from '../../hooks/useStoredData'
import { colors } from '../../theme/colors'
import AppLogo from '../logo'
import Icon from '../icons'

const LayoutContainer = styled(Container)`
  position: relative;
  .mobile-control {
    display: none;
  }
  .mobile-nave {
    display: none;
    background: #000000f7;
    position: absolute;
    height: 100vh;
    height: 100%;
    width: 100%;
    z-index: 1000;
    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      li {
        padding: 4px 38px;
        display: table-cell;
        width: auto;
        margin: 0;
        vertical-align: top;
        box-sizing: border-box;
        line-height: 3.5rem;

        a {
          color: ${colors.link};
          font-size: 0.85rem;
          p {
            margin: 0;
            padding: 0;
          }
          .link-container {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          &:hover {
            text-decoration: none;
          }
          &.active {
            color: ${colors.white};
          }
        }
      }
    }
  }
  .logo {
    img {
      width: 100px;
      height: 50px;
      margin-left: 20px;
      margin-bottom: 20px;
    }
  }
`
const AppLayout = ({ children }: any) => {
  const { roots } = useStoredData()
  const [show, setShow] = useState(false)

  return (
    <LayoutContainer fluid={true}>
      <Row className="mt-4 mobile-control">
        <Col className="logo">
          <AppLogo />
        </Col>
        <Col className="text-right">
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
