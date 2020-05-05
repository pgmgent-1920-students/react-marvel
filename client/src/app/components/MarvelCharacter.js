import React from 'react';

const MarvelCharacter = ({character}) => {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card marvel-character">
        <picture className="card-img-top picture">
          <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
        </picture>
        <div className="card-body">
          <h5 className="card-title">{character.name}</h5>
          <p className="card-text">{character.description}</p>
        </div>
        <div className="card-body">
          
        </div>
      </div>
    </div>
  );
};

export default MarvelCharacter;