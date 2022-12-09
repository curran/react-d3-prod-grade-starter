import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { Viz } from './Viz';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Viz />
    </div>
  );
}

export default App;
