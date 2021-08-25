import { fetchRootRequest, fetchRootsRequest } from "../redux/actions";
import { getCookie, setCookie } from "../helpers/storage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';

export const useFetchData = ({ path = '' }) => {
  const dispatch = useDispatch();
  const roots = useSelector((state: any) => state?.roots);
  const { payload, root, isLoading } = roots;
  const links = getCookie('links');
  const [linkPayload, setPayload] = useState([])

  useEffect(() => {
    if (payload) {
      const keys = Object.keys(payload || {});
      setCookie("links", keys);
    }
    // @ts-ignore
    if (!links) {
      dispatch(fetchRootsRequest())
    }
    setPayload(links ? JSON.parse(links) : []);

  }, [dispatch, payload, links, setPayload]);

  useEffect(() => {
    if (path) {
      dispatch(fetchRootRequest(path))
    }
  }, [dispatch, path]);

  return { linkPayload, payload, root, isLoading };
};

