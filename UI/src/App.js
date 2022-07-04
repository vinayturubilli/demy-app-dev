import './App.css';
import {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from 'axios';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Internships from './Components/Internships/Internships';
import AboutUs from './Components/AboutUs/AboutUs';
import Careers from './Components/Careers/Careers';
import Services from './Components/Services/Services';

function App() {
   useEffect(() => {
        axios.get('/Customers/login', {})
            .then(response => console.log("init called"));
   }, []);
  return (
             <>
                  <Router>
                          <Navbar />
                          <div className="content-alignment">
                              <Routes>
                                  <Route exact path='/' element={<Home />} />
                                  <Route path="internships" element={<Internships/>} />
                                  <Route path="services" element={<Services/>} />
                                  <Route path="about-us" element={<AboutUs/>} />
                                  <Route path="careers" element={<Careers/>} />
                              </Routes>
                          </div>
                  </Router>
             </>
  );
}

export default App;
