import './App.css';
import {useEffect} from 'react';
import axios from 'axios';
import "./App.css";
import Navbar from './Components/Navbar/Navbar';

function App() {
   useEffect(() => {
        axios.get('/Customers/login', {})
            .then(response => console.log("init called"));
   }, []);
  return (
             <>
               <Navbar />
             </>
  );
}

export default App;
