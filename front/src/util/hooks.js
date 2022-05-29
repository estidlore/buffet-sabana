import {useEffect, useReducer, useState} from "react";

export const useForceUpdate = () =>
  useReducer(s => !s, false)[1];

export const useObjState = initState =>
  useReducer(
    (state, updates) => ({
      ...state,
      ...updates,
    }),
    initState
  );

export const useFetch = ({url, init, initState = {}, deps = []}) => {
  const [data, setData] = useState(initState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    const fetchData = async () => {
      setError(null);
      setLoading(true);
      fetch(url)
        .then(res => res.json()).then(res => {
          setData(res);
          setLoading(false);
        }).catch(err => {
          setError(err);
          setLoading(false);
        });
    };
    fetchData();
  }, deps);

  return {data, loading, error};
};