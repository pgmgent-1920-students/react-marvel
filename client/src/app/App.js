import React, { useEffect, useState} from 'react';

import { MarvelApi } from './services';

import './App.css';
import { MarvelCharacterList } from './components';

function App() {
  const [searchCharactersResults, setSearchCharactersResults] = useState(null);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (q) => {
    const json = await MarvelApi.getCharactersResults(q);
    console.log(json)
    setSearchCharactersResults(json);
  };  

  return (
    <div className="app">
      <div className="container">
        <MarvelCharacterList characters={searchCharactersResults} />
      </div>      
    </div>
  );
}

export default App;
