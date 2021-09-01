import BigSearchComponent from '../../components/big-search';
import CardComponent from '../../components/card';
import { CardsContainer } from '../../styles';
import EmptyStateComponent from '../../components/empty-state';
import LoadingComponent from '../../components/loading';
import { Row } from 'reactstrap';
import { filteredData } from '../../helpers/searchHelper';
import { useFetchData } from '../../hooks/useFetchRoot';

import React, { useState } from 'react';
import useFavorites from '../../hooks/useFavorites';
import { showLabel } from '../../helpers';

const SpeciesPage = () => {
	const { root, isLoading } = useFetchData({ path: 'species' });
	const [state, setState] = useState({ name: '' });
	const { saveFavorite, isFavorite } = useFavorites('name', 'species');

	if (isLoading && !root)
		return <LoadingComponent />;

	const filtered = filteredData('name', state.name, root?.results);

	return (
		<>
			<BigSearchComponent
				name="search"
				onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
					setState({ name: e.target.value })
				}
				page="species"
				value={state.name}
			/>
			{filtered && filtered.length > 0 ? (
				<CardsContainer>
					<Row className="mt-5">
						{filtered.map((item: any, index: number) => (
							<CardComponent
								handleAddToFavorite={() => saveFavorite(item)}
								isFavorite={isFavorite('name', item.name)}
								key={index + 1}
								name={item.name}
								url={item.url}
								labelOne={showLabel('species', item)?.labelOne}
								labelTwo={showLabel('species', item)?.labelTwo}
								valueOne={showLabel('species', item)?.valueOne}
								valueTwo={showLabel('species', item)?.valueTwo}
							/>
						))}
					</Row>
				</CardsContainer>
			) : (
				<EmptyStateComponent />
			)}
		</>
	);
};

export default SpeciesPage;
