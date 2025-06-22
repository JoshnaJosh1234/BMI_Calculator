import React, { useState } from 'react'
import "./BMICalculator.css";
function BMICalculator() {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [category, setCategory] = useState('');

    const calculateBMI = () => {
        if (height && weight) {
            const heightInMeters = height / 100; // Convert cm to meters
            const calculatedBMI = (weight / (heightInMeters * heightInMeters)).toFixed(2);
            setBmi(calculatedBMI);

            // Determine the category
            if (calculatedBMI < 18.5) {
                setCategory('Underweight');
            } else if (calculatedBMI >= 18.5 && calculatedBMI < 24.9) {
                setCategory('Normal weight');
            } else if (calculatedBMI >= 25 && calculatedBMI < 29.9) {
                setCategory('Overweight');
            } else {
                setCategory('Obesity');
            }
        } else {
            alert("Please enter both weight and height.");
        }
    }
  return (
    <div className='bmi-card'>
        <h2>BMI Calculator</h2>
        <div className='input-group'>
            <label>Weight (kg)</label>
            <input 
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder='Enter your weight'
            />
        </div>
        <div className='input-group'>
            <label>Height (cm)</label>
            <input 
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder='Enter your height'
             />
        
        </div>
        <button className='calculate-btn' onClick={calculateBMI}>Calculate BMI</button>
        {
            bmi && (
                <div className='result'>
                    <h3>Your BMI is: {bmi}</h3>
                    <h4>Category: {category}</h4>
                </div>
            )
        }
        </div>
    
  )
}

export default BMICalculator