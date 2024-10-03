import { useState } from 'react'
import './App.css'


function App() {
  const [number, setNumber] = useState('');
  const [fibonacciSeries, setFibonacciSeries] = useState([]);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = () => {
    const num = parseInt(number);
    if (isNaN(num) || num <= 0) {
      setError('Please enter a valid positive number');
      setFibonacciSeries([]);
    } else {
      setError('');
      setFibonacciSeries(generateFibonacci(num));
    }
  };

  const generateFibonacci = (n) => {
    const series = [0, 1];
    for (let i = 2; i < n; i++) {
      series.push(series[i - 1] + series[i - 2]);
    }
    return series.slice(0, n);
  };

  return (
    <div>
      <h1>Fibonacci Sequence Generator</h1>
      <input
        type="text"
        value={number}
        onChange={handleChange}
        placeholder="Enter a number"
      />
      <button onClick={handleSubmit}>Generate</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {fibonacciSeries.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
