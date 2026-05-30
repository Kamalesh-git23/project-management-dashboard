import React from 'react'
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className='sidebar'>
        <Link to='/'>Projects</Link>
    </aside>
  );
}

export default Sidebar;
