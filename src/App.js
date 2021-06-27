import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Result from './Result';

function App() {
  const [isMounted, setIsMounted] = useState(true);
  const [inputNumber, setInputNumber] = useState(null);
  const [searchCharacter, setSearchCharacter] = useState(false);

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
          setSearchCharacter(false);
          setInputNumber(null);
        }}
      />
      Mount the search bar Fetch
      {isMounted && (
        <div>
          <label>
            <input
              name='numberOfGuests'
              type='number'
              value={inputNumber}
              placeholder=' Pick a number!'
              onChange={e => setInputNumber(e.target.value)}
            />
          </label>
          <button
            disabled={inputNumber === null}
            onClick={() => {
              setSearchCharacter(false);
              setSearchCharacter(true);
            }}
          >
            Fetch
          </button>
          <p>Which Rick and Morty Character?</p>
        </div>
      )}
      {searchCharacter && <Result inputNumber={inputNumber} />}
    </div>
  );
}

export default App;
