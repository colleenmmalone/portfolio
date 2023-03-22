import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../../../../store/slices/toggleDarkModeSlice";

const Nav = () => {
  const isDark = useSelector((state) => state.toggleDarkMode.toggled);
  const theme = useSelector((state) => state.changeTheme.theme);

  const dispatch = useDispatch();

  return (
    <div className={`bg-${theme}-nav text-white w-full m-0 px-4 lg:px-7 py-1 flex `}>
      <a className="mr-auto my-auto" href="/">
        <p className=" text-[1.2rem] text-right lg:hidden" >Colleen<br />Malone</p>
        <p className="text-[1.9rem] hidden lg:block flex-nowrap" >Colleen Malone</p>
      </a>

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
                    className={`mx-2 ${
                      isDark ? "mr-auto" : "ml-auto"
                    } mt-[3px] text-xs `}
                  >
                    {isDark ? "Dark" : "Light"}
                  </span>
                </div>
              </label>

            </div>

      <div className="flex block lg:hidden h-fit ml-auto my-auto text-2xl space-x-3">
        <i className="bx bx-menu text-3xl my-auto" />
        <i className="bx bxs-cog text-2xl my-auto" />

      </div>

      <div className="ml-auto hidden lg:inline-flex" >
        <p className="px-1 my-auto" >
          Links
        </p >
        <p className="px-1 my-auto" >
          Link
        </p >
        <p className="px-1 my-auto" >
          Link
        </p >
      </div>
    </div>
  )
}

export default Nav;