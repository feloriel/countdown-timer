import React, { Component } from 'react';

class CountdownTimer extends Component {
  render() {
    const { name, days, hours, minutes, seconds } = this.props;

    return (
      <React.Fragment>
        <h2>Countdown to {name}</h2>
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
      </React.Fragment>
    )
  }
}

export default CountdownTimer;