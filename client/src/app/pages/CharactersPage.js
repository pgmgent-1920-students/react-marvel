import React, { useEffect, useState } from 'react';

import { MarvelApi } from '../services';
import { MarvelCharacterList } from '../components';

const CharactersPage = () => {
  const [searchCharactersResults, setSearchCharactersResults] = useState(null);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (q) => {
    const json = await MarvelApi.getCharactersResults(q);
    console.log(json);
    setSearchCharactersResults(json);
  }; 

  return (
    <div className="page page--characters">
      <div className="container">
        <MarvelCharacterList characters={(searchCharactersResults !== null)? searchCharactersResults.data.results:[]} />
      </div> 
    </div>
  );
};

export default CharactersPage;