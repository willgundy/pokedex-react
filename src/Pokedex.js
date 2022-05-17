import React from 'react';
import PokemonCard from './PokemonCard';

export default function Pokedex({ pokemon }) {

  return (
    <div className='cardContainer'>
      {pokemon.map((poke, i) => 
        <PokemonCard poke={poke} key={i}/>
      )}
    </div>
  );
}
