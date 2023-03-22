import React from "react";
import { useSelector } from "react-redux";
import ButtonChangeTheme from "../../components/ButtonChangeTheme";
import ButtonProjectName from "../../components/ButtonProjectName";
import TechIcons from "../../components/TechIcons";


const Home = () => {


  const theme = useSelector((state) => state.changeTheme.theme);

  return (
    <>
      <div className="h-full flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 div-screen-height">
          <div className={`lg:col-span-8 lg:div-screen-height flex flex-col px-3 pb-8 lg:px-7 lg:pb-0`}>
            <div className="my-auto">

              <h1 className={`text-[55px] lg:text-[82px] text-${theme}-special pt-10 lg:pt-0`}> Hi! I’m Colleen.</h1>
              <h3 className={`text-[30px] lg:text-[62px] lg:leading-[75px] my-7 `} >I identify as a full-stack web developer, but I am learning UX Visual Design in Figma.</h3>
              <TechIcons />

              <div className={`w-fit mx-auto bg-${theme}-med rounded-3xl mt-6 py-8 px-2`}>
                <p className="text-3xl text-black text-center" >Current Theme</p><br />
                <ButtonChangeTheme />
              </div>

            </div>
          </div>

          <div className={` 
          lg:col-span-4 
          bg-${theme}-med text-${theme}-dark 
          p-default lg:px-12 lg:py-12 rounded-t-[30px] lg:rounded-t-[0px] 
          h-full overflow-y-scroll 
          `}>
            <h1 className={`text-3xl text-center fw-bold text-${theme}-special`}>Project Highlights</h1>
            <div className="w-full  h-[400px] bg-[#888] mx-auto my-12"></div>
            <ButtonProjectName />
            <div className="w-full l h-[400px] bg-[#888] mx-auto my-12"></div>
            <ButtonProjectName figma />
            <div className="w-full  h-[400px] bg-[#888] mx-auto my-12"></div>
            <ButtonProjectName className="mb-6" />
          </div>

        </div>
      </div>


    </>
  );
}
export default Home;