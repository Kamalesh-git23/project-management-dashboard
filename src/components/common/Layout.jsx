import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function Layout({children, pageTitle,actionButton}) {
  return (
    <>
        <Navbar pageTitle={pageTitle} actionButton={actionButton}/>

        <div className="layout">
            <Sidebar/>

            <main className="content">
                {children}
            </main>
        </div>
    </>
  );
}

export default Layout;