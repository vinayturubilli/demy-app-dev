import React, {useState, useEffect} from 'react';
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
      <li className="items">Internships</li>
      <li className="items">Courses</li>
      <li className="items">Team</li>
    </ul>
      )}

      <button onClick={toggleNav} className="btn">BTN</button>
    </nav>
  )
}