import { configMarvelApi } from '../config';

const MARVEL_API_CHARACTERS = `${configMarvelApi.marvelBaseUrl}characters?apikey=${configMarvelApi.apiKey}`;

class MarvelApi {
  static getCharactersResults = async (q) => {
    const url = `${MARVEL_API_CHARACTERS}`;
    const response = await fetch(url);
    let jsonData = await response.json();
    const jsonDataString = JSON.stringify(jsonData).replace(/http/gi, 'https');
    jsonData = JSON.parse(jsonDataString);
    return jsonData;
  }
}

export default MarvelApi;