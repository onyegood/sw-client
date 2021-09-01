import { BigSearchContainer } from './style';
import React from 'react';

interface Props {
  name: string;
  value: string;
  page: string;
  onChange: (e: any) => void;
}
const BigSearchComponent = ({ name, value, page, onChange }: Props) => (
	<BigSearchContainer>
		<div className="search-wrapper mt-4"
			data-testid="search-wrapper"
		>
			<input
				data-testid="search-input"
				name={name}
				onChange={onChange}
				placeholder={`SEARCH ${page.toUpperCase()}`}
				type="text"
				value={value}
			/>
			{/* <Button onClick={onClick} data-testid="search-button">SEARCH</Button> */}
		</div>
	</BigSearchContainer>
);

export default BigSearchComponent;
