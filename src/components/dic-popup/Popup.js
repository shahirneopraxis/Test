import React, { Component } from 'react';

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false  // Initially, the popup is closed
    };
  }

  togglePopup = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen  // Toggles the isOpen state
    }));
  }

  render() {
    return (
      <div className="popup-container">
        <button onClick={this.togglePopup}>Open Popup</button>

        {this.state.isOpen && (
          <div className="popup">
            <div className="popup-content">
              <h2>Popup Content</h2>
              <p>This is the content of the popup.</p>
              <button onClick={this.togglePopup}>Close</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Popup;

