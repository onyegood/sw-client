import { NavItem } from 'reactstrap'
import {NavLink} from "react-router-dom"
import React from 'react'

interface Props {
  title: string;
}

const CustomNavItem: React.FC<Props> = ({ title }) => {
  return (
    <NavItem>
      <NavLink to={`/${title}`}>
        <div className='link-container'>
          {title.toUpperCase()}
          <span />
        </div>
      </NavLink>
    </NavItem>
  )
}

export default CustomNavItem
