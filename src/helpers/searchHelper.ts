export const filteredData = (key: string, searchQuery: string | RegExp, data: any[]) => {
	if (data && data.length > 0) {
		const result = data.filter((item: any) => {
			const regex = new RegExp(searchQuery, 'gi');

			return (
        item[key]?.match(regex));
		});

		return result;
	}

	return data;
};
