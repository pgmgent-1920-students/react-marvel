import React from 'react';

import MarvelCharacter from './MarvelCharacter';

import './MarvelCharacterList.css';

class MarvelCharacterList extends React.Component {
  constructor(props) {
    super(props);    
  }

  render() {
    return (
      <div className="row marvel-list">
        {this.props.characters && this.props.characters.map((item, index) => { 
          return (
            <MarvelCharacter key={item.id} character={item} />
          )
        })}
      </div>
    );
  }
};

export default MarvelCharacterList;