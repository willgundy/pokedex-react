import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [filter, setFilter] = useState('');

  async function getPokemon() {
    const response = await getPokemon(filter);
    
    setPokemon(response);
  }

  useEffect(() => {
    getPokemon();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    getPokemon();
  }


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input onChange={e => setFilter(e.target.value)}/>
        <button>Search</button>
      </form>
      <div>
        {pokemon.map((poke, i) => 
          <div key={i}>
            <h2>{poke.pokemon}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
