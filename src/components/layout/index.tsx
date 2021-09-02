import { Col, Nav, NavItem, Row } from 'reactstrap';
import NavComponent from './nav';
import React, { useState } from 'react';
import CustomNavItem from './nav/CustomNavItem';
import useStoredData from '../../hooks/useStoredData';
import AppLogo from '../logo';
import Icon from '../icons';
import { LayoutContainer } from './Style';
import { Link, useLocation } from 'react-router-dom';

const AppLayout = ({ children }: any) => {
	const { roots } = useStoredData();
	const [show, setShow] = useState(false);
	const { pathname } = useLocation();

	return (
		<LayoutContainer fluid>
			<Row className="mt-4 mobile-control">
				<Col className="logo">
					<AppLogo />
				</Col>
				<Col className="text-right">
					<span className="p-4"
						onClick={() => setShow(!show)}
					>
						<Icon
							className="text-white"
							height="40"
							id={show ? 'close-icon' : 'menue-icon'}
							width="40"
						/>
					</span>
				</Col>
			</Row>

			<div className={show ? 'mobile-nave' : 'display'}>
				<Row>
					<Col className="mt-5"
						md="4"
					>
						<Nav>
							{roots.map((k: string) => (
								<CustomNavItem key={k}
									title={k}
								/>
							))}
							<NavItem data-testid="navitem">
								<Link
									className={pathname.includes('favorites') ? 'active' : ''}
									data-testid=""
									to="/favorites"
								>
									<div className="link-container">
										{'Favorites'.toUpperCase()}
										<span />
									</div>
								</Link>
							</NavItem>
						</Nav>
					</Col>
				</Row>
			</div>
			<NavComponent />
			{children}
		</LayoutContainer>
	);
};

export default AppLayout;
