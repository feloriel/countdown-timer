import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    name: '',
    date: null,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }
  handleNameChange = event => {
    const { value } = event.target;
    this.setState({
      name: value
    });
  }
  handleDateChange = event => {
    const { value } = event.target;
    this.setState({
      date: new Date(value),
    });
  }
  handleSubmit = event => {
    event.preventDefault();
    this.calcDate();
  }
  calcDate = () => {
    const { date } = this.state; 
    const milliseconds = date - new Date();
    const days = parseInt(milliseconds / (24 * (60 * (60 * 1000))));
    const daysBalance = milliseconds % (24 * (60 * (60 * 1000)));
    const hours = parseInt(daysBalance / (60 * (60 * 1000)));
    const hoursBalance = daysBalance % (60 * (60 * 1000));
    const minutes = parseInt(hoursBalance / (60 * 1000));
    const minutesBalance = hoursBalance % (60 * 1000);
    const seconds = parseInt(minutesBalance / 1000);
    this.setState({
      days,
      hours,
      minutes,
      seconds
    });
    this.startCounter();
  }
  startCounter = () => {
    const { date } = this.state;
    if (new Date() < date) {
      setTimeout(() => {
        this.calcDate();
      }, 1000);
    } 
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
            onChange={this.handleNameChange}
          />
          <label htmlFor="countdown">Event date </label>
          <input 
            type="datetime-local"
            name="date"
            id="date"
            className="input"
            onChange={this.handleDateChange}
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
