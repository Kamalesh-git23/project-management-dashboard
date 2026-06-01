import React from 'react'
import { Link } from "react-router-dom";
import { FaProjectDiagram } from 'react-icons/fa';

function Sidebar() {
  return (
    <aside className='sidebar'>
        <Link to='/'>
          <FaProjectDiagram/> 
          {" "}Projects
        </Link>
    </aside>
  );
}

export default Sidebar;
