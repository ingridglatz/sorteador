import { useState } from 'react';
import './App.css';

function App() {
  const [sortear, setSortear] = useState(0);

  return (
    <div className="container">
      <h1 id="title">Bem-vindo ao sorteador!</h1>

      <div className="content">
        <h2 id="number">{sortear}</h2>

        <button id="raffle" onClick={() => setSortear(Math.floor(Math.random() * 6))}>
          Sortear
        </button>
      </div>
    </div>
  );
}

export default App;
