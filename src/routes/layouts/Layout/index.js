import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';

export const Layout = () => {
  const theme = 'lavender';

  return (
    // wraps entire page
    <div id="wrapper"
      className={` p-0 flex flex-col min-h-[100vh]
       bg-${theme}-dark text-${theme}-light
      `}
    >
      <Nav />

      {/* == Main Content */}
      <div id="content-wrapper" className={`flex p-0 m-0 grow`} >

        <Outlet />

      </div>
    </div>
  );
};

export default Layout;