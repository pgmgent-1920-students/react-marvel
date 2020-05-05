import { configMarvelApi } from '../config';

const MARVEL_API_CHARACTERS = `${configMarvelApi.marvelBaseUrl}characters?apikey=${configMarvelApi.apiKey}`;

class MarvelApi {
  static getCharactersResults = async (q) => {
    const url = `${MARVEL_API_CHARACTERS}`;
    const response = await fetch(url);
    const jsonData = await response.json();
    return jsonData;
  }
}

export default MarvelApi;