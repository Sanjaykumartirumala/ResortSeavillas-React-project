import React, { Component } from 'react';
import './resortbooking.css';

class ResortBookingForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',          // Initialize with empty string
          email: '',         // Initialize with empty string
          checkInDate: '',   // Initialize with empty string
          checkOutDate: '',  // Initialize with empty string
          numGuests: 1,
          isFormVisible: true    // Initialize with a default value, e.g., 1
        };
    }
    
        // Event handler for input changes
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  // Event handler for form submission
  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.checkInDate && this.state.checkOutDate) {
        // Dates are booked, show an alert
        alert('Dates booked have a nice day');
            // Dates are booked, hide the form
            this.setState({ isFormVisible: false });
      } else {
        // Dates are not filled out, you can show an error message
        alert('Please select check-in and check-out dates.');
      }
  };

  
  render() {
    const { name, email, checkInDate, checkOutDate, numGuests } = this.state;

    return (
      <div className="booking-form">
        <h2 id='head'>Resort Booking Form</h2>
        <form onSubmit={this.handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name" 
              name="name"
              value={name}
              onChange={this.handleInputChange}
              required
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
              required
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="checkInDate">Check-In Date:</label>
            <input
              type="date"
              id="checkInDate"
              name="checkInDate"
              value={checkInDate}
              onChange={this.handleInputChange}
              required
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="checkOutDate">Check-Out Date:</label>
            <input
              type="date"
              id="checkOutDate"
              name="checkOutDate"
              value={checkOutDate}
              onChange={this.handleInputChange}
              required
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="numGuests">Number of Guests:</label>
            <input
              type="number"
              id="numGuests"
              name="numGuests"
              value={numGuests}
              onChange={this.handleInputChange}
              min="1"
              required
              className="input-field"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="submit-button">Book Now</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ResortBookingForm;
