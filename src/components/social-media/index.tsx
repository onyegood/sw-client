import { Col } from 'reactstrap'
import { ISocialMedia } from '../../models/ISocialMedia'
import { Kids } from '../../assets'
import { Link } from 'react-router-dom'
import React from 'react'
import { socialMedia } from '../../static-data'

const SocialMediaLinks = () => {
  return (
    <Col xs='4' className='social-media-links'>
      <ul>
        {socialMedia.map((item: ISocialMedia) => (
          <li key={item.id} data-testid={item.name}>
            <Link to={item.url}>
              <img src={item.icon} alt={item.name} />
            </Link>
          </li>
        ))}
      </ul>
      <span className='kids'>
        <Link to='#'>
          <img src={Kids} alt='Star Wars Kids' />
        </Link>
      </span>
    </Col>
  )
}

export default SocialMediaLinks
