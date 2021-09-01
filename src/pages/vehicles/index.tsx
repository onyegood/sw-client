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

const VehiclesPage = () => {
	const { root, isLoading } = useFetchData({ path: 'vehicles' });
	const [state, setState] = useState({ name: '' });
	const { saveFavorite, isFavorite } = useFavorites('name', 'vehicles');

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
				page="Vehicles"
				value={state.name}
			/>
			{filtered && filtered.length > 0 ? (
				<CardsContainer>
					<Row className="mt-5">
						{filtered.map((item: any) => (
							<CardComponent
								handleAddToFavorite={() => saveFavorite(item)}
								isFavorite={isFavorite('name', item.name)}
								key={item.name}
								name={item.name}
								url={item.url}
								labelOne={showLabel('starships', item)?.labelOne}
								labelTwo={showLabel('starships', item)?.labelTwo}
								valueOne={showLabel('starships', item)?.valueOne}
								valueTwo={showLabel('starships', item)?.valueTwo}
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

export default VehiclesPage;
