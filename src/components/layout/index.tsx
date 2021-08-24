import NavComponent from './nav'
import React from 'react'

const AppLayout = ({ children}: any) => {
  return (
    <>
      <NavComponent />
      {children}
    </>
  )
}

export default AppLayout
