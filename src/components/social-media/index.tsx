import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import React from 'react'
import { SocialMediaObject } from '../../interfaces'

import { Facebook, Instergram, Kids, Twitter, Youtube } from '../../assets'

const socialMedia = [
  {
    id: 1,
    name: 'Facebook',
    icon: Facebook,
    url: '#'
  },
  {
    id: 2,
    name: 'Instergram',
    icon: Instergram,
    url: '#'
  },
  {
    id: 3,
    name: 'Twitter',
    icon: Twitter,
    url: '#'
  },
  {
    id: 4,
    name: 'Youtube',
    icon: Youtube,
    url: '#'
  }
]

const SocialMediaLinks = () => {
  return (
    <Col xs='4' className='social-media-links'>
      <ul>
        {socialMedia.map((item: SocialMediaObject) => (
          <li key={item.id}>
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
