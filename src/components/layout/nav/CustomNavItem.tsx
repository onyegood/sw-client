import { NavItem } from 'reactstrap';
import React from 'react';

import { Link, useLocation } from 'react-router-dom';

interface Props {
  title: string;
	onClick?: () => void;
}

/**
 * @useLocation
 * extract pathname from useLocation
 * set active link by checking if pathname includes route name
 */

const CustomNavItem: React.FC<Props> = ({ title, onClick }) => {
	const { pathname } = useLocation();

	return (
		<NavItem data-testid="navitem">
			<Link
				onClick={onClick}
				className={pathname.includes(title) ? 'active' : ''}
				data-testid={title}
				to={`/${title}`}
			>
				<div className="link-container">
					{title.toUpperCase()}
					<span />
				</div>
			</Link>
		</NavItem>
	);
};

export default CustomNavItem;
