import React from 'react';
import { useFetch } from './useFetch';

function Result({ inputNumber }) {
  const url = `https://rickandmortyapi.com/api/character/${inputNumber}`;

  const res = useFetch(url);
  return <div>{JSON.stringify(res)}</div>;
}

export default Result;
