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

const StarshipsPage = () => {
	const { root, isLoading } = useFetchData({ path: 'starships' });
	const [state, setState] = useState({ name: '' });
	const { saveFavorite, isFavorite } = useFavorites('name', 'starships');

	if (isLoading && !root)
		return <LoadingComponent />;

	const filtered = filteredData(state.name, root?.results);

	return (
		<>
			<BigSearchComponent
				name="search"
				onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
					setState({ name: e.target.value })
				}
				page="starships"
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
								labelOne={showLabel('vehicles', item)?.labelOne}
								labelTwo={showLabel('vehicles', item)?.labelTwo}
								valueOne={showLabel('vehicles', item)?.valueOne}
								valueTwo={showLabel('vehicles', item)?.valueTwo}
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

export default StarshipsPage;
