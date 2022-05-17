import { useEffect, useState } from 'react';
import './App.css';
import { getPokemon } from './services/fetch-utils';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [filter, setFilter] = useState('');

  async function loadPokemon() {
    const { data } = await getPokemon(filter);
    
    setPokemon(data.results);
  }

  useEffect(() => {
    loadPokemon();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    loadPokemon();
  }

  function capitalizeFirstLetter(pokemon) {
    return pokemon.charAt(0).toUpperCase() + pokemon.slice(1);
  }

  console.log(pokemon);

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={e => setFilter(e.target.value)}/>
        <button>Search</button>
      </form>
      <div className='cardContainer'>
        {pokemon.map((poke, i) => 
          <div className='card' key={poke.id + i} style={{ backgroundColor: poke.color_1 }}>
            <h2>{capitalizeFirstLetter(poke.pokemon)}</h2>
            <img src={poke.url_image}/>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
