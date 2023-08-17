import React from 'react';
import Tetris from './components/Tetris';

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginLeft: '5vw',
};

const titleStyle = {
  flexGrow: 1, // Allow title to take available space
};

const App = () => {
  return (
    <div className='App'>
      <div style={containerStyle}>
        <div style={titleStyle}>
          <h1>Tetris</h1>
          <span>By FL Automations</span>
        </div>
        <Tetris />
      </div>
    </div>
  );
}

export default App;
