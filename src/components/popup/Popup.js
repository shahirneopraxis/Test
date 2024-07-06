import React from 'react'
import './Popup.css'

const Popup = ({ show, handleClose, children }) => {
    return (
      <div className={`popup ${show ? 'show' : ''}`}>
        <div className="popup-inner">
          <button className="close-btn" onClick={handleClose}>
            &times;
          </button>
          {children}
        </div>
      </div>
    );
  };

export default Popup
