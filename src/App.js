import React, { Component } from 'react';
import Form from './components/Form';
import CountdownTimer from './components/CountdownTimer';
import './App.css';

class App extends Component {
  state = {
    name: '',
    date: null,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isSubmitted: false
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
    this.setState({ isSubmitted: true });
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
    const { name, days, hours, minutes, seconds, isSubmitted } = this.state;

    return (
      <div className="container">
        <h1>Countdown timer</h1>
        {isSubmitted === false ? 
          <Form
            name={name}
            handleSubmit={this.handleSubmit}
            handleNameChange={this.handleNameChange}
            handleDateChange={this.handleDateChange}
          />
        :
          <CountdownTimer
            name={name}
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
          />
        }
      </div>
    );
  }
}

export default App;
