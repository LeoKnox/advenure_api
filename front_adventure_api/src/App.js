import React from 'react';
import logo from './logo.svg';
import RoomList from './rooms/roomslist'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Web App for Building Rooms
        </p>
        <h2>Adventure API</h2>
        <RoomList/>
      </header>
    </div>
  );
}

export default App;
