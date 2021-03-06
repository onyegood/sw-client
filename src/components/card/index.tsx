import React from 'react'
import { useHistory } from 'react-router'

import { Card, CardBody, Col } from 'reactstrap'
import Icon from '../icons'

interface Props {
  name?: string;
  url: string;
  labelOne?: string;
  labelTwo?: string;
  valueOne?: string | number;
  valueTwo?: string | number;
  handleAddToFavorite?: () => any;
  isFavorite?: () => boolean;
}
const CardComponent = ({
  name,
  url,
  handleAddToFavorite,
  isFavorite,
  labelOne,
  labelTwo,
  valueOne,
  valueTwo,
}: Props) => {
  const history = useHistory()
  const singlItemUrl = url.split('/api')[1]

  return (
    <Col
      data-testid="card-container"
      md="4"
      onClick={() => history.push(`/more${singlItemUrl}`)}
    >
      <Card className="mb-4">
        <CardBody className="p-0">
          <div className="thumbnail-container">
            <Icon
              className="text-white"
              height="30"
              id={isFavorite ? 'love-icon' : 'love-outline-icon'}
              // @ts-ignore
              onClick={(e: { stopPropagation: (arg0: any) => Function }) => e.stopPropagation(handleAddToFavorite())}
              width="30"
            />
          </div>
          <div className="card-content-container">
            <h5 data-testid="card-title">{name}</h5>
            <div className="other-info">
              <span>
                <p className="small">{labelOne}</p>
                <p>{valueOne}</p>
              </span>

              <span>
                <p className="small">{labelTwo}</p>
                <p>{valueTwo}</p>
							</span>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default CardComponent
