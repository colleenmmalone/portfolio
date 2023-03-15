import React from 'react';
import { Outlet } from 'react-router-dom';
import NavDesktop from '../components/NavDesktop';

export const Layout = () => {

  return (
    // wraps entire page
    <div id="wrapper" className='h-screen p-0 flex flex-col'>

      {/* <Header /> */}
      <NavDesktop />

      {/* == Main Content */}
      <div id="content-wrapper" className={`flex-1 bg-blue p-0 m-0`} >

        <Outlet />

      </div>
    </div>
  );
};

export default Layout;