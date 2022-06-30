import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react';
import axios from 'axios';

function App() {
   useEffect(() => {
        axios.get('/Customers/login', {})
            .then(response => console.log("init called"));
   }, []);
  return (
    <div className="App">
      <header className="App-header">
        Demy Software Solutions
      </header>
    </div>
  );
}

export default App;
