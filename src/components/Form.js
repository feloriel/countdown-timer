import React, { Component } from 'react';

class Form extends Component {
  render() {
    const { handleSubmit, name, handleNameChange, handleDateChange } = this.props;
    return (
      <React.Fragment>
        <h2>Fill the form below to start counter.</h2>
        <form 
          className="form flex column"
          onSubmit={handleSubmit}
        >
          <label htmlFor="name">Event name </label>
          <input 
            type="text"
            name="name"
            id="name"
            className="input"
            value={name}
            onChange={handleNameChange}
          />
          <label htmlFor="countdown">Event date </label>
          <input 
            type="datetime-local"
            name="date"
            id="date"
            className="input"
            onChange={handleDateChange}
          />
          <input 
            type="submit" 
            value="Start counter"
            className="input"
          />
        </form>
      </React.Fragment>
    )
  }
}

export default Form;