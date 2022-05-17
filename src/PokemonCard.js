import React from 'react';

export default function PokemonCard({ poke }) {
  function capitalizeFirstLetter(pokemon) {
    return pokemon.charAt(0).toUpperCase() + pokemon.slice(1);
  }
  return (
    <div className='card' key={poke.id} style={{ backgroundColor: poke.color_1 }}>
      <h2>{capitalizeFirstLetter(poke.pokemon)}</h2>
      <img src={poke.url_image}/>
      <label className='flex-column'>
        Type:
        <p className='attribute'>{capitalizeFirstLetter(poke.type_1)}</p>
      </label>
      <label className='flex-column'>
        HP:
        <p className='attribute'>{poke.hp}</p>
      </label>
      <label className='flex-column'>
        Speed:
        <p className='attribute'>{poke.speed}</p>
      </label>
    </div>
  );
}
