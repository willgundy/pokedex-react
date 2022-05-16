import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [query, setQuery] = useState('');


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input onChange={e => setQuery(e.target.value)}/>
        <button>Search</button>
      </form>
      <div>
        write mapping for Pokemon here
      </div>
    </div>
  );
}

export default App;
