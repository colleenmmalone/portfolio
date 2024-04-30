import React from "react";

import Logo from "../Logo";
import NavLinks from "../NavLinks";


const Nav = () => {

  return (
    <>
      {/* || °.°.° NAV CONTAINER °.°.° ||  */}
      <nav
        className={`bg-darkest text-white w-full m-0 py-0 flex flex-col md:flex-row 
        h-[110px] md:h-[75px] gap-0
        px-[25px] sm:px-[40px] xl:px-[55px] 3xl:px-[60px]
        content-center`}>
        <Logo />
        <NavLinks />
      </nav>
    </>
  )
}

export default Nav;