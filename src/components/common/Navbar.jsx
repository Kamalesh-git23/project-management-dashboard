import React from 'react'
import { FaProjectDiagram } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className='navbar'>
        <h1>
          <FaProjectDiagram/>
          {" "}Project Management Dashboard</h1>
    </nav>
  );
}

export default Navbar;
