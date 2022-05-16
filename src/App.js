import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    async function getPokemon() {
      const response = await getPokemon(filter);
      
      setPokemon(response);
    }
    getPokemon();
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
        write mapping for Pokemon here
      </div>
    </div>
  );
}

export default App;
