import LoadingComponent from '../../components/loading'
import React from 'react'
import styled from 'styled-components'
import { useFetchData } from '../../hooks/useFetchRoot'
import { useParams } from 'react-router-dom'

import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import { ImagePlaceholder, VideoPlaceholder } from '../../assets'
import { capitalize } from '../../helpers/capsInitial'

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
          <div className='banner-placeholder' data-testid='banner'></div>
        </Col>
        <Col md='4'>
          <Card>
            <CardBody>
              <h3 data-testid='title' className='mb-4'>
                {detail?.name || detail?.title}
              </h3>
              {detail?.diameter && (
                <span>
                  <p className='m-0'>Diameter</p>
                  <p>{detail?.diameter}</p>
                </span>
              )}
              {detail?.population && (
                <span>
                  <p className='m-0'>Population</p>
                  <p>{detail?.population}</p>
                </span>
              )}
              {detail?.director && (
                <span>
                  <p className='m-0'>Director</p>
                  <p>{capitalize(detail?.director)}</p>
                </span>
              )}
              {detail?.episode_id && (
                <span>
                  <p className='m-0'>Episode ID</p>
                  <p>{detail?.episode_id}</p>
                </span>
              )}
              {detail?.producer && (
                <span>
                  <p className='m-0'>Producer</p>
                  <p>{capitalize(detail?.producer)}</p>
                </span>
              )}
              {detail?.classification && (
                <span>
                  <p className='m-0'>Classification</p>
                  <p>{capitalize(detail?.classification)}</p>
                </span>
              )}
              {detail?.average_height && (
                <span>
                  <p className='m-0'>Average Height</p>
                  <p>{detail?.average_height}</p>
                </span>
              )}
              {detail?.cargo_capacity && (
                <span>
                  <p className='m-0'>Cargo Capacity</p>
                  <p>{detail?.cargo_capacity}</p>
                </span>
              )}
              {detail?.model && (
                <span>
                  <p className='m-0'>Model</p>
                  <p>{capitalize(detail?.model)}</p>
                </span>
              )}
              {detail?.gender && (
                <span>
                  <p className='m-0'>Gender</p>
                  <p>{capitalize(detail?.gender)}</p>
                </span>
              )}
              {detail?.eye_color && (
                <span>
                  <p className='m-0'>Eye Color</p>
                  <p>{capitalize(detail?.eye_color)}</p>
                </span>
              )}
              {detail?.opening_crawl && (
                <span>
                  <p className='m-0'>Opening Crawl</p>
                  <p data-testid='detail'>{detail?.opening_crawl}</p>
                </span>
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </DetailsContainer>
  )
}

export default DetailsPage
