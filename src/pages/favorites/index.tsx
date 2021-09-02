import BigSearchComponent from '../../components/big-search';
import CardComponent from '../../components/card';
import { CardsContainer } from '../../styles';
import EmptyStateComponent from '../../components/empty-state';
import LoadingComponent from '../../components/loading';
import { Row } from 'reactstrap';
import { filteredData } from '../../helpers/searchHelper';

import React, { useState } from 'react';
import useFavorites from '../../hooks/useFavorites';
import { useSelector } from 'react-redux';
import { IRootState } from '../../interfaces';
import { IGeneric } from '../../models/IGeneric';
import { showLabel } from '../../helpers';

const FavoritesPage = () => {
	const { isLoading } = useSelector((state: IRootState) => state.roots);
	const [state, setState] = useState({ name: '' });
	const { saveFavorite, isFavorite, favorites } = useFavorites('name');

	if (isLoading && !favorites)
		return <LoadingComponent />;

	const filtered = filteredData(state.name, favorites);

	return (
		<>
			<BigSearchComponent
				name="search"
				onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
					setState({ name: e.target.value })
				}
				page="favorites"
				value={state.name}
			/>
			{filtered && filtered.length > 0 ? (
				<CardsContainer>
					<Row className="mt-5"
						data-testid="favorites"
					>
						{filtered.map((item: IGeneric, index: number) => (
							<CardComponent
								handleAddToFavorite={() => saveFavorite(item)}
								isFavorite={isFavorite('name', item?.name)}
								key={index + 1}
								name={item?.name}
								url={item.url}
								labelOne={showLabel(item?.page, item)?.labelOne}
								labelTwo={showLabel(item?.page, item)?.labelTwo}
								valueOne={showLabel(item?.page, item)?.valueOne}
								valueTwo={showLabel(item?.page, item)?.valueTwo}
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

export default FavoritesPage;
