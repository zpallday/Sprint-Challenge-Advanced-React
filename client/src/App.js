import React from 'react';
import Player from './components/playerCard';
import './App.css';
import DarkModeButton from './components/DarkModeButton.js';



function App() {
  return (
    <div className="App">
      <header className="App-header">
       <DarkModeButton />
        <Player />
      </header>
    </div>
  );
}

export default App;
