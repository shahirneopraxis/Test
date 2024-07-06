import React, {useState} from 'react'
import Popup from './components/popup/Popup';

const MainPopup = () => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
      setShowPopup(!showPopup);
    };
  
    return (
      <div>
        <h1>React Popup Example</h1>
        <button onClick={togglePopup}>Show Popup</button>
        <Popup show={showPopup} handleClose={togglePopup}>
          <h2>This is a Popup</h2>
          <p>You can put any content you like here.</p>
        </Popup>
      </div>
    );
  }

export default MainPopup
