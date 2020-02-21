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
            required
            id="name"
            className="input"
            value={name}
            onChange={handleNameChange}
          />
          <label htmlFor="countdown">Event date </label>
          <input 
            type="date"
            name="date"
            required
            min={(new Date(new Date().getTime() + 24 * 60 * 60 * 1000)).toISOString().split("T")[0]}
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