import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Countdown to :</h1>
      <div className="flex">
        <div className="days timer flex column align-center">
          <div className="timer-number">22</div>
          <div className="timer-text">Days</div>
        </div>
        <div className="hours timer flex column align-center">
          <div className="timer-number">11</div>
          <div className="timer-text">Hours</div>
        </div>
        <div className="minutes timer flex column align-center">
          <div className="timer-number">53</div>
          <div className="timer-text">Minutes</div>
        </div>
        <div className="seconds timer flex column align-center">
          <div className="timer-number">40</div>
          <div className="timer-text">Seconds</div>
        </div>
      </div>
    </div>
  );
}

export default App;
