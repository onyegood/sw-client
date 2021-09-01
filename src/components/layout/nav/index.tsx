import AppLogo from '../../logo';
import CustomNavItem from './CustomNavItem';
import { Link } from 'react-router-dom';
import { NavContainer } from './Style';
import React from 'react';
import SocialMediaLinks from '../../social-media';
import useStoredData from '../../../hooks/useStoredData';

import { Col, Nav, Row } from 'reactstrap';
import Icon from '../../icons';

const NavComponent = () => {
	const { roots } = useStoredData();

	return (
		<NavContainer className="display-none">
			<Row>
				<SocialMediaLinks />

				<Col className="text-center"
					xs="4"
				>
					<AppLogo />
				</Col>
				<Col className="text-right"
					md={{ size: 2, offset: 2 }}
					xs="4"
				>
					<div className="mr-4 md-4 favorite">
						<Link to="/favorites">
							<Icon height="20"
								id="love-icon"
								width="20"
							/> Favorites
						</Link>
					</div>
				</Col>
			</Row>
			<Row className="nav-bar">
				<Col md="7 mx-auto">
					<Nav>
						{roots.map((k: string) => (
							<CustomNavItem key={k}
								title={k}
							/>
						))}
					</Nav>
				</Col>
			</Row>
		</NavContainer>
	);
};

export default NavComponent;
