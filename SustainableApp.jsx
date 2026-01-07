import React, { useState } from 'react';
import './SustainableApp.css';

function SustainableApp() {
  // State for calculator
  const [meat, setMeat] = useState(0);
  const [dairy, setDairy] = useState(0);
  const [vegetables, setVegetables] = useState(0);
  const [grains, setGrains] = useState(0);
  const [result, setResult] = useState('');

  // Function to calculate carbon footprint
  function calculateFootprint() {
    // Check if all values are zero
    if (meat === 0 && dairy === 0 && vegetables === 0 && grains === 0) {
      setResult('Please enter at least one value!');
      return;
    }

    // Calculate CO2
    const meatCO2 = meat * 6.6;
    const dairyCO2 = dairy * 1.3;
    const vegCO2 = vegetables * 0.4;
    const grainCO2 = grains * 0.9;
    const total = meatCO2 + dairyCO2 + vegCO2 + grainCO2;

    // Determine impact level
    let message = '';
    if (total < 20) {
      message = `Great job! Your carbon footprint is ${total.toFixed(2)} kg CO2 per week. That's LOW impact! 🌱`;
    } else if (total < 50) {
      message = `Your carbon footprint is ${total.toFixed(2)} kg CO2 per week. That's MODERATE impact. 🌾`;
    } else {
      message = `Your carbon footprint is ${total.toFixed(2)} kg CO2 per week. That's HIGH impact. 🌍`;
    }

    setResult(message);
  }

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1>Sustainable Eating Guide</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#recipes">Recipes</a>
          <a href="#tips">Tips</a>
          <a href="#calculator">Calculator</a>
          <a href="#about">About</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <h2>Eat Smart • Live Green</h2>
        <p>Explore simple ways to eat healthy while protecting our planet.</p>
      </section>

      {/* Cards Section */}
      <section className="cards">
        <div className="card">
          <h3>Eco-Friendly Recipes</h3>
          <p>Discover plant-based, seasonal and low-waste recipes.</p>
        </div>
        <div className="card">
          <h3>Sustainable Tips</h3>
          <p>Learn easy habits that help reduce environmental impact.</p>
        </div>
        <div className="card">
          <h3>Carbon Calculator</h3>
          <p>Calculate how your food choices impact the planet.</p>
        </div>
      </section>

      {/* Recipes Section */}
      <section className="recipes" id="recipes">
        <h2>Eco-Friendly Recipes</h2>
        <div className="recipe-list">
          <div className="recipe">
            <h3>Vegetable Stir-Fry</h3>
            <p>A quick and healthy plant-based meal using seasonal vegetables.</p>
          </div>
          <div className="recipe">
            <h3>Lentil Soup</h3>
            <p>Protein-rich and sustainable soup perfect for any season.</p>
          </div>
          <div className="recipe">
            <h3>Quinoa Salad</h3>
            <p>Fresh and nutritious salad with minimal environmental impact.</p>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="tips" id="tips">
        <h2>Sustainable Eating Tips</h2>
        <div className="tip-list">
          <div className="tip">
            <h3>1. Buy Local and Seasonal</h3>
            <p>Choose fruits and vegetables that are in season and grown locally.</p>
          </div>
          <div className="tip">
            <h3>2. Reduce Meat Consumption</h3>
            <p>Try having meatless meals a few times a week.</p>
          </div>
          <div className="tip">
            <h3>3. Minimize Food Waste</h3>
            <p>Plan your meals and use leftovers creatively.</p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="calculator" id="calculator">
        <h2>Carbon Footprint Calculator</h2>
        <div className="calculator-container">
          <div className="calculator-form">
            <h3>Enter Your Weekly Servings:</h3>
            
            <label>Meat servings:</label>
            <input 
              type="number" 
              value={meat} 
              onChange={(e) => setMeat(Number(e.target.value))}
              min="0"
            />

            <label>Dairy servings:</label>
            <input 
              type="number" 
              value={dairy} 
              onChange={(e) => setDairy(Number(e.target.value))}
              min="0"
            />

            <label>Vegetable servings:</label>
            <input 
              type="number" 
              value={vegetables} 
              onChange={(e) => setVegetables(Number(e.target.value))}
              min="0"
            />

            <label>Grain servings:</label>
            <input 
              type="number" 
              value={grains} 
              onChange={(e) => setGrains(Number(e.target.value))}
              min="0"
            />

            <button onClick={calculateFootprint}>Calculate</button>
          </div>

          <div className="calculator-result">
            {result ? (
              <div className="result-box">
                <h3>Your Result:</h3>
                <p>{result}</p>
              </div>
            ) : (
              <p>Fill in the form and click Calculate!</p>
            )}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <h2>About Sustainable Eating</h2>
        <div className="about-content">
          <h3>Our Mission</h3>
          <p>We believe small changes in eating habits can make a big difference for our planet.</p>
          
          <h3>Why It Matters</h3>
          <p>Food production accounts for about 25% of global greenhouse gas emissions.</p>
          
          <h3>What We Offer</h3>
          <ul>
            <li>Simple plant-based recipes</li>
            <li>Practical tips for reducing food waste</li>
            <li>Tools to calculate your environmental impact</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Sustainable Eating Guide. All rights reserved.</p>
        <p>Eat Smart • Live Green • Save the Planet</p>
      </footer>
    </div>
  );
}

export default SustainableApp;
