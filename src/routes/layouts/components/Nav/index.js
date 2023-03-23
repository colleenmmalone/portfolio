import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { toggleDarkMode } from "../../../../store/slices/toggleDarkModeSlice";

const Nav = () => {
  const isDark = useSelector((state) => state.toggleDarkMode.toggled);
  const theme = useSelector((state) => state.changeTheme.theme);

  const dispatch = useDispatch();

  const linkActive = `text-${theme}-special`;

  return (
    <>
    {/* || °.°.° NAV CONTAINER °.°.° ||  */}
    <div 
      className={`bg-${theme}-nav text-white w-full m-0 py-1 flex h-auto xl:h-[53px] 
        px-[25px] sm:px-[40px] xl:px-[55px] 3xl:px-[60px]
   `}>

        {/* || °.°.° MY NAME °.°.° ||  */}
        <NavLink to="/portfolio"   className={ ({ isActive }) => isActive ? linkActive : "" }
        >
    <div className="mr-auto my-auto p-0" >
        <p className="text-[1.2rem] text-right xl:hidden" >Colleen<br />Malone</p>
        <p className="text-[1.9rem] hidden xl:block flex-nowrap" >Colleen Malone</p>
    </div>
    </NavLink>

{/* || °.°.° LIGHT / DARK TOGGLE °.°.° ||  */}
      <div className="flex flex-col m-auto ">
        <label className="inline-flex relative items-center mx-auto cursor-pointer ">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isDark}
            readOnly
          />
          <div
            onClick={() => {
              dispatch(toggleDarkMode());
            }}
            className={`w-[62px] h-6 bg-${theme}-special rounded-full peer peer-checked:after:translate-x-[37.5px] peer-checked:after:bg-${theme}-light after:content-[''] after:absolute after:top-[1.5px] after:left-[2px]  after:bg-${theme}-light after:border-[#fff2] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-${theme}-special opacity-75 peer-checked:opacity-100 flex`}
          >
            <span
              className={`mx-2 ${isDark ? "mr-auto" : "ml-auto"
                } mt-[3px] text-xs `}
            >
              {isDark ? "Dark" : "Light"}
            </span>
          </div>
        </label>

      </div>

      {/* || °.°.° NAV ICONS °.°.° ||  */}

      <div className="flex h-fit ml-auto my-auto text-2xl space-x-3">
        <i className="bx bx-menu text-3xl my-auto xl:hidden" />

        <NavLink to="/portfolio/settings"   className={ ({ isActive }) => isActive ? linkActive : "" }
        ><span className="flex space-x-2"> <i className="bx bxs-cog text-2xl my-auto" exact /><span>Settings</span></span></NavLink>
        

      </div>

    </div>
    </>
  )
}

export default Nav;