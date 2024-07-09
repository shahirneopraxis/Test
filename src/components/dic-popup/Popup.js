import React, { useState } from 'react';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const popupContainerStyle = {
    position: 'relative',
    margin: '20px',
  };

  const popupStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    border: '1px solid #ccc',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
    display: isOpen ? 'block' : 'none', // Toggle display based on isOpen state
  };

  const popupContentStyle = {
    textAlign: 'center',
  };

  const closeButtonStyle = {
    marginTop: '10px',
    padding: '5px 10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  };

  const overlayStyle = {
    display: isOpen ? 'block' : 'none',
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999,
  };

  return (
    <div>
      <div className="popup-container" style={popupContainerStyle}>
        <button onClick={togglePopup}>Open Popup</button>

        <div className="popup" style={popupStyle}>
          <div className="popup-content" style={popupContentStyle}>
            <h2>Popup Content</h2>
            <p>This is the content of the popup.</p>
            <button onClick={togglePopup} style={closeButtonStyle}>Close</button>
          </div>
        </div>
      </div>

      <div className="overlay" style={overlayStyle}></div>
    </div>
  );
};

export default Popup;
