import React from 'react';
import logo from './logo.svg';
import './App.css';
import LineChart from './LineChart';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <LineChart name="Total Worldwide Cases" />
    </div>
  );
}

export default App;
