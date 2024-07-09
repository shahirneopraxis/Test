// src/RenderPopup.js
import React, { useState } from 'react';
import Popup from './components/dic-popup/Popup';

const RenderPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <h1 style={{ color: 'yellow', backgroundColor: 'blue' }}>Aleeenaaaaa</h1>
      <button onClick={togglePopup}>Show Popup</button>
      <Popup show={showPopup} handleClose={togglePopup}>
        <h2>This is a Popup</h2>
        <p>Some content inside the popup.</p>
      </Popup>
    </div>
  );
};

export default RenderPopup;

