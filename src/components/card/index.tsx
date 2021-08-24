import { ImageOne } from '../../assets'
import React from 'react'

import { Card, CardBody, Col } from 'reactstrap'

const CardComponent = () => (
  <Col md='3'>
    <Card className='mb-4'>
      <CardBody className='p-0'>
        <div className='thumbnail-container'>
          <img src={ImageOne} alt='Hello' className='img-fluid' />
        </div>
        <div className='card-content-container'>
          <h5>Showdown - Star Wars: The Bad Batch</h5>
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
