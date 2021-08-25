import { LoadingContainer } from './Style'
import React from 'react'
interface Props {
  text?: string
}

const LoadingComponent: React.FC<Props> = ({ text }) => {
  return (
    <LoadingContainer>
      <div className='loader' />
      <h1 className="mt-20">{text ? text : 'Fetching data...'}</h1>
    </LoadingContainer>
  )
}

export default LoadingComponent
