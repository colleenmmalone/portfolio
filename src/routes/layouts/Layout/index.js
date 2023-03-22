import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';
import { useSelector } from "react-redux";

export const Layout = () => {
  const theme = useSelector((state) => state.changeTheme.theme);

  return (
    // wraps entire page
    <div id="wrapper" className={`lg:h-screen p-0 flex flex-col bg-${theme}-light dark:bg-${theme}-dark text-${theme}-dark dark:text-${theme}-light`}>
      {/* <Header /> */}
      <Nav />

      {/* == Main Content */}
      <div id="content-wrapper" className={`flex-1 bg-blue p-0 m-0`} >

        <Outlet />

      </div>
    </div>
  );
};

export default Layout;