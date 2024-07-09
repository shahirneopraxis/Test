import React, { useState } from 'react';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);  // State to manage popup visibility

  const togglePopup = () => {
    setIsOpen(!isOpen);  // Toggles the isOpen state
  }

  return (
    <div className="popup-container">
      <button onClick={togglePopup}>Open Popup</button>

      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>Popup Content</h2>
            <p>This is the content of the popup.</p>
            <button onClick={togglePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;

