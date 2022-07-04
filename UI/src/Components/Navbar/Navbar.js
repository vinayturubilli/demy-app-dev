import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);


  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    };

  }, []);

  return (
    <nav>
          {(toggleMenu || screenWidth > 500) && (
          <ul className="list">
           <li className="items"><Link to="/">Home</Link></li>
           <li className="items"><Link to="internships">Internships</Link></li>
           <li className="items"><Link to="services">Services</Link></li>
           <li className="items"><Link to="about-us">About us</Link></li>
           <li className="items"><Link to="careers">Careers</Link></li>
        </ul>
      )}

      <button onClick={toggleNav} className="btn">BTN</button>
    </nav>
  )
}