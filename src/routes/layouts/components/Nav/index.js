import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


const Nav = () => {
 
  const theme = useSelector((state) => state.changeTheme.theme);

  const linkActive = `text-${theme}-special font-bold`;

  return (
    <>
      {/* || °.°.° NAV CONTAINER °.°.° ||  */}
      <div
        className={`bg-${theme}-nav text-white w-full m-0 py-1 flex h-auto xl:h-[53px] 
        px-[25px] sm:px-[40px] xl:px-[55px] 3xl:px-[60px]
   `}>

        {/* || °.°.° MY NAME °.°.° ||  */}
        <NavLink to="/portfolio" className={'mr-auto'}>
          <div className="mr-auto my-auto p-0" >
            <p className="text-[1.2rem] text-right xl:hidden" >Colleen<br />Malone</p>
            <p className="text-[1.9rem] hidden xl:block flex-nowrap" >Colleen Malone</p>
          </div>
        </NavLink>


        {/* || °.°.° NAV ICONS °.°.° ||  */}

        <div className="flex h-fit ml-auto my-auto text-2xl space-x-9">
          <div className="hidden xl:inline-flex  space-x-9">

            <NavLink to="/portfolio" className={({ isActive }) => isActive ? linkActive : `hover:text-${theme}-med`} >
              <p className="">Home</p>
            </NavLink>

            <NavLink to="/gallery" className={({ isActive }) => isActive ? linkActive : `hover:text-${theme}-med`}>
              <p className="">Gallery</p>
            </NavLink>

            <NavLink to="/about" className={({ isActive }) => isActive ? linkActive : `hover:text-${theme}-med`}>
              <p className="">About</p>
            </NavLink>


          </div>
          <i className="bx bx-menu text-3xl my-auto xl:hidden" />

          <NavLink to="/settings" className={({ isActive }) => isActive ? linkActive : `hover:text-${theme}-med`}>
            <p className="flex space-x-2">
              <i className="bx bxs-cog text-2xl my-auto" exact />
            </p>
          </NavLink>


        </div>

      </div>
    </>
  )
}

export default Nav;