import React from 'react'
import { useHistory } from 'react-router'

import { Card, CardBody, Col } from 'reactstrap'
import Icon from '../icons';


interface Props {
  name?: string,
  url: string,
  handleAddToFavorite?: () => void,
  isFavorite?: () => boolean
}
const CardComponent = ({ name, url, handleAddToFavorite, isFavorite }: Props) => {
  const history = useHistory();
  const singlItemUrl = url.split('/api')[1]

  return (
    <Col md='3' onClick={() => history.push(`/more${singlItemUrl}`)} data-testid="card-container">
      <Card className='mb-4'>
        <CardBody className='p-0'>
          <div className='thumbnail-container'>
            <Icon 
              id={isFavorite ? "love-icon" : "love-outline-icon"}
              height="30" 
              width="30" 
              className="text-white"
              // @ts-ignore
              onClick={(e: void) => e.stopPropagation(handleAddToFavorite())} 
            />
          </div>
          <div className='card-content-container'>
            <h5 data-testid="card-title">{name}</h5>
            <div className="other-info">
              <span>
                <p className="small">Gender</p>
                <p>Male</p>
              </span>

              <span>
                <p className="small">Birth Year</p>
                <p>20/03/2019</p>
              </span>
            </div>
            {/* <div className='play-container'>
              <span className="play" />
              <p>Video</p>
            </div> */}
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default CardComponent
