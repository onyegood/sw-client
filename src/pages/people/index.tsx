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
import { IGeneric } from '../../models/IGeneric';
import { showLabel } from '../../helpers';

const PeoplePage = () => {
	const { root, isLoading } = useFetchData({ path: 'people' });
	const [state, setState] = useState({ name: '' });
	const { saveFavorite, isFavorite } = useFavorites('name', 'people');

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
				page="people"
				value={state.name}
			/>
			{filtered && filtered.length > 0 ? (
				<CardsContainer>
					<Row className="mt-5"
						data-testid="people"
					>
						{filtered.map((item: IGeneric, index: number) => (
							<CardComponent
								handleAddToFavorite={() => saveFavorite(item)}
								isFavorite={isFavorite('name', item.name)}
								key={index + 1}
								name={item.name}
								url={item.url}
								labelOne={showLabel('people', item)?.labelOne}
								labelTwo={showLabel('people', item)?.labelTwo}
								valueOne={showLabel('people', item)?.valueOne}
								valueTwo={showLabel('people', item)?.valueTwo}
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

export default PeoplePage;
