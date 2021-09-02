import { IGeneric } from "../models/IGeneric";

export const filteredData = (searchQuery: string | RegExp, data: IGeneric[]) => {
	if (data && data.length > 0) {
		const result = data.filter((item: IGeneric) => {

			const regex = new RegExp(searchQuery, 'gi');

			return (
				// eslint-disable-next-line
				item?.name && item?.name.match(regex) ||
				// eslint-disable-next-line
				item?.gender && item?.gender.match(regex) ||
				// eslint-disable-next-line
				item?.eye_color && item?.eye_color.match(regex) ||
				// eslint-disable-next-line
				item?.diameter && item?.diameter.match(regex) ||
				// eslint-disable-next-line
				item?.population && item?.population.match(regex) ||
				// eslint-disable-next-line
				item?.director && item?.director.match(regex) ||
				// eslint-disable-next-line
				// item?.episode_id && item?.episode_id.match(regex) ||
				// eslint-disable-next-line
				item?.classification && item?.classification.match(regex) ||
				// eslint-disable-next-line
				item?.average_height && item?.average_height.match(regex) ||
				// eslint-disable-next-line
				item?.cargo_capacity && item?.cargo_capacity.match(regex) ||
				// eslint-disable-next-line
				item?.model && item?.model.match(regex)
			)
		});

		return result;
	}

	return data;
};
