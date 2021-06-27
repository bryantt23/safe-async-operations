import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  const [isMounted, setIsMounted] = useState(true);
  const [inputNumber, setInputNumber] = useState(null);
  return (
    <div className='App'>
      {JSON.stringify(isMounted)}
      {JSON.stringify(inputNumber)}
      <input
        name='isGoing'
        type='checkbox'
        checked={isMounted}
        onChange={() => {
          setIsMounted(!isMounted);
        }}
      />
      Mount the search bar Fetch
      {isMounted && (
        <div>
          <label>
            {' '}
            <input
              name='numberOfGuests'
              type='number'
              value={inputNumber}
              placeholder=' Pick a number!'
              onChange={e => setInputNumber(e.target.value)}
            />
          </label>
          <button disabled={inputNumber === null}>Fetch</button>
          <p>Which Rick and Morty Character?</p>
        </div>
      )}
    </div>
  );
}

export default App;
