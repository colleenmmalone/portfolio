import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Settings from "../pages/Settings";
import Gallery from "../pages/Gallery";
import AboutMe from "../pages/AboutMe";
// import GuestBook from "../pages/GuestBook";


const RoutesComp = () => {

  return (
    <Router>
          <Routes>
            <Route element={<Layout />}>

              {/* Actual Routes  */}
              <Route path="/portfolio" element={<Home />}  />
              <Route path="/settings" element={<Settings />}  />
              <Route path="/gallery" element={<Gallery />}  />
              <Route path="/about" element={<AboutMe />}  />
              {/* <Route path="/guestbook" element={<GuestBook />}  /> */}

              {/* Error page for all undefined paths  */}
              <Route path="*" element={<NotFound />} />

            </Route>
          </Routes>

    </Router>
  );
};

export default RoutesComp;