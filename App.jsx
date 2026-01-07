import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to React!</h1>
        <p>This is a basic React component example</p>
      </header>

      <main className="App-main">
        {/* Counter Section */}
        <section className="counter-section">
          <h2>Counter Example</h2>
          <div className="counter-display">
            <p className="count-value">{count}</p>
          </div>
          <div className="button-group">
            <button onClick={handleDecrement} className="btn btn-danger">
              - Decrease
            </button>
            <button onClick={handleReset} className="btn btn-secondary">
              Reset
            </button>
            <button onClick={handleIncrement} className="btn btn-success">
              + Increase
            </button>
          </div>
        </section>

        {/* Input Section */}
        <section className="input-section">
          <h2>Input Example</h2>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="name-input"
          />
          {name && (
            <p className="greeting">
              Hello, <strong>{name}</strong>! 👋
            </p>
          )}
        </section>
      </main>

      <footer className="App-footer">
        <p>Built with React ⚛️</p>
      </footer>
    </div>
  );
}

export default App;
