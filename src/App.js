import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard name="Corey Rose" age={29} haircolor="Black">
      </PersonCard>
      <PersonCard name="Axel Foley" age={47} haircolor="Black"></PersonCard>
      <PersonCard name="Ariele The Mermaid" age={38} haircolor="Red"></PersonCard>
      <PersonCard name="Baby" age={4} haircolor="Brown"></PersonCard>
    </div>
  );
}

export default App;
