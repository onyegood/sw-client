import { IRootState } from '../interfaces';
import { useEffect } from 'react';

import { fetchRootRequest, fetchRootsRequest, fetchSingleItemRequest } from '../redux/actions';
import { getCookie, setCookie } from '../helpers/storage';
import { useDispatch, useSelector } from 'react-redux';

export const useFetchData = ({ path = '', page = '' }) => {
	const dispatch = useDispatch();
	const payload = useSelector((state: IRootState) => state?.roots);
	const { roots, root, detail, isLoading } = payload;
	const links = getCookie('links');

	useEffect(() => {
		if (!links)
			dispatch(fetchRootsRequest());
	}, [dispatch, links]);

	useEffect(() => {
		if (roots && roots.films) {
			const keys = Object.keys(roots || {});

			setCookie('links', keys);
		}
	}, [roots, links]);

	useEffect(() => {
		if (path) {
			if (page)
				dispatch(fetchSingleItemRequest(path));
			else
				dispatch(fetchRootRequest(path));
		}
	}, [dispatch, path, page]);

	return { roots, root, detail, isLoading };
};
