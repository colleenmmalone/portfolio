import React from "react";

import Logo from "../Logo";
import NavLinks from "../NavLinks";


const Nav = () => {

  return (
    <>
      {/* || °.°.° NAV CONTAINER °.°.° ||  */}
      <div
        className={`bg-darkest text-white w-full m-0 py-0 flex 
        h-[75px] 
        px-[25px] sm:px-[40px] xl:px-[55px] 3xl:px-[60px]
        content-center`}>
        <Logo />
        <NavLinks />
      </div>
    </>
  )
}

export default Nav;