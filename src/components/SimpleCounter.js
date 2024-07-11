import React, { useState } from 'react';

function SimpleCounter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2 style={{ marginBottom: '10px' }}>Simple Counter</h2>
      <p style={{ fontSize: '24px' }}>Count: {count}</p>
      <div>
        <button style={buttonStyle} onClick={() => setCount(count + 1)}>Increment</button>
        <button style={buttonStyle} onClick={() => setCount(count - 1)}>Decrement</button>
        <button style={buttonStyle} onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

const buttonStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  padding: '10px 20px',
  margin: '0 5px',
  cursor: 'pointer',
  borderRadius: '5px',
};

export default SimpleCounter;

