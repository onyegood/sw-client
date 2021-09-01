import { Col } from 'reactstrap';
import { ISocialMedia } from '../../models/ISocialMedia';
import { kids } from '../../assets';
import { Link } from 'react-router-dom';
import React from 'react';
import { socialMedia } from '../../static-data';

const SocialMediaLinks = () => (
	<Col className="social-media-links"
		xs="4"
	>
		<ul>
			{socialMedia.map((item: ISocialMedia) => (
				<li data-testid={item.name}
					key={item.id}
				>
					<Link to={item.url}>
						<img alt={item.name}
							src={item.icon}
						/>
					</Link>
				</li>
			))}
		</ul>
		<span className="kids">
			<Link to="#">
				<img alt="Star Wars Kids"
					src={kids}
				/>
			</Link>
		</span>
	</Col>
);

export default SocialMediaLinks;
