import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    name: '',
    now: null,
    date: null,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }
  componentDidMount () {
    this.setState({
      now: new Date()
    });
  }
  handleChange = event => {
    const { name, value } = event.target;
    name === 'date' ?
    this.setState({
      [name]: new Date(value)
    }) :
    this.setState({
      [name]: value
    })
  }
  handleSubmit = event => {
    event.preventDefault();
    this.calcDate();
  }
  calcDate = () => {
    const { now, date } = this.state;
    const milliseconds = date - now;
    const seconds = milliseconds / 1000;
    const minutes = milliseconds / (60 * 1000);
    const hours = milliseconds / (60 * (60 * 1000));
    console.log(milliseconds, seconds, minutes, hours);
  }
  render() {
    const { name, days, hours, minutes, seconds } = this.state;

    return (
      <div className="container">
        <h1>Countdown to {name}</h1>
        <form 
          className="form flex column"
          onSubmit={this.handleSubmit}
        >
          <label htmlFor="name">Event name </label>
          <input 
            type="text"
            name="name"
            id="name"
            className="input"
            value={name}
            onChange={this.handleChange}
          />
          <label htmlFor="countdown">Event date </label>
          <input 
            type="date"
            name="date"
            id="date"
            className="input"
            onChange={this.handleChange}
          />
          <input 
            type="submit" 
            value="Start counter"
            className="input"
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
