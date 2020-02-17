import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    countdown: '',
    date: null,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }
  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }
  handleSubmit = event => {
    event.preventDefault();
  }
  render() {
    const { countdown, days, hours, minutes, seconds } = this.state;

    return (
      <div className="container">
        <h1>Countdown to {countdown}</h1>
        <form 
          className="form flex column"
          onSubmit={this.handleSubmit}
        >
          <label htmlFor="countdown">Event countdown </label>
          <input 
            type="text"
            name="countdown"
            id="countdown"
            className="input"
            value={countdown}
            onChange={this.handleChange}
          />
          <label htmlFor="countdown">Date of the next event </label>
          <input 
            type="date"
            name="date"
            id="date"
            className="input"
            onChange={this.handleChange}
          />
        </form>
        <div className="flex wrap justify-center">
          <div className="days timer flex column align-center">
            <div className="timer-number">{days}</div>
            <div className="timer-text">Days</div>
          </div>
          <div className="hours timer flex column align-center">
            <div className="timer-number">{hours}</div>
            <div className="timer-text">Hours</div>
          </div>
          <div className="minutes timer flex column align-center">
            <div className="timer-number">{minutes}</div>
            <div className="timer-text">Minutes</div>
          </div>
          <div className="seconds timer flex column align-center">
            <div className="timer-number">{seconds}</div>
            <div className="timer-text">Seconds</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
