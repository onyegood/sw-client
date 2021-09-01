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

const FilmsPage = () => {
	const { root, isLoading } = useFetchData({ path: 'films' });
	const [state, setState] = useState({ name: '' });
	const { saveFavorite, isFavorite } = useFavorites('title', 'films');

	if (isLoading && !root)
		return <LoadingComponent />;

	const filtered = filteredData('title', state.name, root?.results);

	return (
		<>
			<BigSearchComponent
				name="search"
				onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
					setState({ name: e.target.value })
				}
				page="fielm"
				value={state.name}
			/>
			{filtered && filtered.length > 0 ? (
				<CardsContainer>
					<Row className="mt-5">
						{filtered.map((item: IGeneric, index: number) => (
							<CardComponent
								handleAddToFavorite={() => saveFavorite(item)}
								isFavorite={isFavorite('title', item.title)}
								key={index + 1}
								name={item.title}
								url={item.url}
								labelOne={showLabel('films', item)?.labelOne}
								labelTwo={showLabel('films', item)?.labelTwo}
								valueOne={showLabel('films', item)?.valueOne}
								valueTwo={showLabel('films', item)?.valueTwo}
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

export default FilmsPage;
