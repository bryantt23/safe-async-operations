import logo from './logo.svg';
import './App.css';
import {useState}from 'react'
function App() {
  const [isMounted, setIsMounted]=useState(true)
  return (
    <div className="App">
    {JSON.stringify(isMounted)}

          <input
            name="isGoing"
            type="checkbox"
            checked={isMounted}
            onChange={()=>{setIsMounted(!isMounted)}} />
            Mount the search bar

    </div>
  );
}

export default App;
