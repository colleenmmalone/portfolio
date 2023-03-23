import React from "react";
import { useSelector } from "react-redux";
import ButtonChangeTheme from "../../components/ButtonChangeTheme";
import ProjectHighlights from "../../components/ProjectHighlights";
import TechIcons from "../../components/TechIcons";


const Home = () => {


  const theme = useSelector((state) => state.changeTheme.theme);

  const padding = "px-[25px] sm:px-[40px] xl:px-[55px] 3xl:px-[60px] ";

  return (
    <>
    
      <div className="h-auto xl:div-screen-height ">
        <div className=" flex flex-col xl:flex-row">

          <div className={`h-auto xl:div-screen-height w-full flex `}>
            <div className={`${padding} space-y-4 my-6 xl:my-auto`} >
              <h1 className={`text-[55px] sm:text-[72px] md:text-[90px] text-${theme}-special `}> 
              Hi! I’m Colleen.
              </h1>
              <h3 className={`text-[33px] sm:text-[52px] md:text-[70px] lg:text-[82px] 2xl:text-[95px] xl:leading-[90px] `} >
                I identify as a full-stack web developer, but I am learning UX Visual Design in Figma.
                </h3>
              <TechIcons />
              
              <div className={`w-full mx-auto bg-${theme}-med rounded-3xl py-8 flex flex-col`}>
                <p className="text-3xl text-black text-center" >Current Theme</p><br />
                <div className=" mx-auto">
                <ButtonChangeTheme />
                </div>
              </div>
              </div>
          </div>

          {/* Desktop panel  */}
          <div className={`
          hidden xl:block 
          div-screen-height overflow-y-scroll
          bg-${theme}-med text-${theme}-dark 
          w-[34%] max-w-[670px] min-w-[470px]
          mt-0 py-12 rounded-t-[0px] 
          ${padding}
          `}>
            <ProjectHighlights />
          </div>

          {/* Mobile panel  */}
          <div className={` 
          block xl:hidden
          bg-${theme}-med text-${theme}-dark 
          w-full
          mt-10  py-12   rounded-t-[30px]
          px-[25px] sm:px-[8%] md:px-[15%]
          shadow
          `}>
            <div className="w-full mx-auto max-w-[450px]">
            <ProjectHighlights />
            </div>
          </div>

        </div>
      </div>


    </>
  );
}
export default Home;