import { LoadingContainer } from './Style';
import React from 'react';
interface Props {
  text?: string
}

const LoadingComponent: React.FC<Props> = ({ text }) => (
	<LoadingContainer data-testid="loading-state">
		<div className="loader" />
		<p className="mt-20"
			data-testid="loading-text"
		>{text ? text : 'Fetching data...'}</p>
	</LoadingContainer>
);

export default LoadingComponent;
