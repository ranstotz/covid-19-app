import React from 'react';
import logo from './logo.svg';
import './App.css';
import LineChart from './LineChart';
import LineChartCountry from './LineChartCountry';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <h1>Coronavirus Dashboard</h1>
      <LineChart name="Total Worldwide Cases" />
      <LineChartCountry name="Total Worldwide Cases" />
      <div style={{ paddingBottom: '20px' }}></div>
    </div>
  );
}

export default App;
