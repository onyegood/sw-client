import LoadingComponent from '../../components/loading'
import React from 'react'
import styled from 'styled-components'
import { useFetchData } from '../../hooks/useFetchRoot'
import { useParams } from 'react-router-dom'

import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import { ImagePlaceholder, VideoPlaceholder } from '../../assets'

interface Params {
  tab: string;
  id: string;
}
const DetailsPage = () => {
  const { tab, id }: Params = useParams()
  const { detail, isLoading } = useFetchData({
    path: `${tab}/${id}`,
    page: 'detail'
  })

  if (isLoading && !detail) {
    return <LoadingComponent />
  }

  const DetailsContainer = styled(Container)`
    margin-top: 2%;
    .banner-placeholder {
      background: #242424;
      height: 400px;
      background-image: url(${tab === 'films' ? VideoPlaceholder : ImagePlaceholder});
      background-position: center;
      background-blend-mode: overlay;
    }
  `

  return (
    <DetailsContainer>
      <Row>
        <Col md='8'>
          <div className='banner-placeholder' data-testid="banner"></div>
        </Col>
        <Col md='4'>
          <Card>
            <CardBody>
              <h3 data-testid="title">{detail?.name || detail?.title}</h3>
              <p data-testid="detail">{detail?.opening_crawl}</p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </DetailsContainer>
  )
}

export default DetailsPage
