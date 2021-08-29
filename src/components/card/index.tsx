import React from 'react'
import { useHistory } from 'react-router'

import { Card, CardBody, Col } from 'reactstrap'

interface Props {
  name?: string,
  url: string
}
const CardComponent = ({ name, url }: Props) => {
  const history = useHistory();
  const singlItemUrl = url.split('/api')[1]

  return (
    <Col md='3' onClick={() => history.push(`/more${singlItemUrl}`)} data-testid="card-container">
      <Card className='mb-4'>
        <CardBody className='p-0'>
          <div className='thumbnail-container'>
            <h1 data-testid="card-image-placeholder">Image Placeholder</h1>
          </div>
          <div className='card-content-container'>
            <h5 data-testid="card-title">{name}</h5>
            <div className='play-container'>
              {/* <span className="play" /> */}
              <p>Video</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default CardComponent
