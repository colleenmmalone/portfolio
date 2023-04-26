import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../../store/slices/toggleDarkModeSlice";
import ButtonChangeTheme from "../../components/ButtonChangeTheme";


const Settings = () => {

  const isDark = useSelector((state) => state.toggleDarkMode.toggled);
  const theme = useSelector((state) => state.changeTheme.theme);

  const dispatch = useDispatch();

  return (
    <>
      <div className="div-screen-height space-y-7 p-7 mx-auto">

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
        <div className={`w-full mx-auto bg-${theme}-med rounded-3xl py-8 flex flex-col`}>
          <p className="text-3xl text-black text-center" >Current Theme</p><br />
          <div className=" mx-auto">
            <ButtonChangeTheme />
          </div>
        </div>
      </div>
    </>
  );
}
export default Settings;