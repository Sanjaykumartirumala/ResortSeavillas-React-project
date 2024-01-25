import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import ResortBookingForm from './components/resortbooking'; // Check and adjust the import path

function Navbar() {
  const [isBookingFormVisible, setBookingFormVisible] = useState(false);

  const toggleBookingForm = () => {
    setBookingFormVisible(!isBookingFormVisible);
  };

  return (
    <nav className="navbar"> {/* Make sure you have CSS classes for styling */}
      <div className="company-name">
        <Link to="/"></Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/Rooms">Room</Link>
        <Link to="/Dins">Dinning</Link>
        <Link to="/Bars">Bar</Link>
        <button className="book-button" onClick={toggleBookingForm}>
          Book Now
        </button>
      </div>
      {isBookingFormVisible &&(<div className="booking-overlay">
          <div className="booking-form">
            <ResortBookingForm />
            <button className="close-button" onClick={toggleBookingForm}>
            x
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
