import { Col, Nav, Row } from 'reactstrap';
import NavComponent from './nav';
import React, { useState } from 'react';
import CustomNavItem from './nav/CustomNavItem';
import useStoredData from '../../hooks/useStoredData';
import AppLogo from '../logo';
import Icon from '../icons';
import { LayoutContainer } from './Style';

const AppLayout = ({ children }: any) => {
	const { roots } = useStoredData();
	const [show, setShow] = useState(false);

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
