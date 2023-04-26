import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';
import { useSelector } from "react-redux";

export const Layout = () => {
  const theme = useSelector((state) => state.changeTheme.theme);

  return (
    // wraps entire page
    <div id="wrapper"
      className={` p-0 flex flex-col min-h-[100vh]
        bg-${theme}-light dark:bg-${theme}-dark text-${theme}-dark dark:text-${theme}-light
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