import { useEffect, useState } from 'react';
import './App.css';
import { getPokemon } from './services/fetch-utils';
import Pokedex from './Pokedex';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [filter, setFilter] = useState('abra');
  const [isLoading, setIsLoading] = useState(false);

  async function loadPokemon() {
    setIsLoading(true);
    const { data } = await getPokemon(filter);
    setIsLoading(false);
    
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

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <form onSubmit={handleSubmit}>
        <input value={filter} onChange={e => setFilter(e.target.value)}/>
        <button>Search</button>
      </form>
      {isLoading ?         
        <div className='loadScreen'>
          <div className='bounceball'/>
          <h1>LOADING...</h1>
        </div> : <Pokedex pokemon={pokemon} />}
    </div>
  );
}

export default App;
