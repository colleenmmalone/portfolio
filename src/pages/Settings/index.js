import React from "react";
import { useSelector } from "react-redux";
import ButtonChangeTheme from "../../components/ButtonChangeTheme";


const Settings = () => {


  const theme = useSelector((state) => state.changeTheme.theme);

  return (
    <>
      <div className="div-screen-height ">
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