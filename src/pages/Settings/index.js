import React from "react";
import { useSelector } from "react-redux";
import ButtonChangeTheme from "../../components/ButtonChangeTheme";
import Themes from '../../utils/Themes';


const Settings = () => {

  const theme = useSelector((state) => state.changeTheme.theme);
  const isDark = useSelector((state) => state.toggleDarkMode.toggled);

  return (
    <>
      <div className="py-9 mx-auto">

        {/* || °.°.° LIGHT / DARK TOGGLE °.°.° ||  */}
        {/* <div className="flex flex-col m-auto ">
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

        </div> */}

        <div className={`w-full max-w-[100vw] mx-auto bg-${theme}-med rounded-3xl p-3 md:p-8 flex flex-col`}>
          <p className="text-3xl text-black text-center mb-3" >Current Theme:</p>    
          <hr className={`border-${theme}-special border-[1.5px] rounded mb-6`} />
          <p className="text-2xl text-black text-center" >{Themes[theme]} in {isDark ? 'Darkmode' : 'Lightmode' } </p><br />
          <hr className={`border-${theme}-special border-[1.5px] rounded mb-8`} />
          <div className=" mx-auto">
            <ButtonChangeTheme />
          </div>
        </div>
      </div>
    </>
  );
}
export default Settings;