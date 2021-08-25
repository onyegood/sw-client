import React from 'react'

import { Card, CardBody, Col } from 'reactstrap'

interface Props {
  name?: string
}
const CardComponent = ({name}: Props) => (
  <Col md='3'>
    <Card className='mb-4'>
      <CardBody className='p-0'>
        <div className='thumbnail-container'>
          <h1>Image Placeholder</h1>
        </div>
        <div className='card-content-container'>
          <h5>{name}</h5>
          <div className='play-container'>
            {/* <span className="play" /> */}
            <p>Video</p>
          </div>
        </div>
      </CardBody>
    </Card>
  </Col>
)

export default CardComponent
