import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../../../../store/slices/toggleDarkModeSlice";
const NavDesktop = () => {
    const isDark = useSelector((state) => state.toggleDarkMode.toggled);

    const dispatch = useDispatch();

    return (
        <div className="bg-purple text-cream w-full m-0 px-7 py-1 flex">
            <a className="mr-auto" href="/">
            <p className=" text-[1.9rem]" >Colleen Malone</p>
            </a>

            <div className="flex flex-col mx-auto my-3">
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
                  className="w-[62px] h-6 bg-clay-light rounded-full peer peer-focus:ring-clay peer-checked:after:translate-x-[37px] peer-checked:after:border-clay after:content-[''] after:absolute after:top-0.5 after:left-[2px] peer-checked:after:right-[2px] after:bg-cream after:border-[#fcc] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-clay-light flex"
                >
                  <span
                    className={`mx-2 ${
                      isDark ? "mr-auto" : "ml-auto"
                    } my-auto text-xs `}
                  >
                    {isDark ? "Dark" : "Light"}
                  </span>
                </div>
              </label>

            </div>

            <div className="ml-auto flex flex-row" >
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

export default NavDesktop;