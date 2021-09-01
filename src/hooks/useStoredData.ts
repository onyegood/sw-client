import { IRootState } from '../interfaces';
import { getCookie } from '../helpers/storage';
import { useSelector } from 'react-redux';

import { useEffect, useState } from 'react';

const useStoredData = () => {
	const links = getCookie('links');
	const [roots, setRoots] = useState<string[]>([]);
	const { isLoading } = useSelector((state: IRootState) => state?.roots);

	useEffect(() => {
		if (links)
			setRoots(links ? JSON.parse(links) : []);
	}, [links, isLoading]);

	return {
		roots,
	};
};

export default useStoredData;
