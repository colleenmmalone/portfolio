import React from "react";
import ProjectHighlights from "../../components/ProjectHighlights";
import HomeMainContent from "../../components/HomeMainContent";
import CircleBG from "../../components/CircleBG";

const Home = () => {

  const padding = "px-[25px] sm:px-[40px] xl:px-[55px] 3xl:px-[60px] ";

  return (
    <>

      <div className="h-auto xl:div-screen-height ">
        <div className=" flex flex-col xl:flex-row">

          {/* need to set up grid  */}
          <div className={`h-auto xl:div-screen-height xl:w-full w-[100vw] flex relative overflow-hidden`}>
            <CircleBG />
            <HomeMainContent />

          </div>

          {/* || °.°.° DESKTOP PANEL °.°.° ||  */}
          <div className={`
          hidden xl:block 
          div-screen-height overflow-y-scroll
          bg-medium text-dark 
          w-[34%] max-w-[670px] min-w-[470px]
          mt-0 py-12 rounded-t-[0px] 
          ${padding}
          flex space-y-12
          `}>
            <div className="w-full mx-auto max-w-[350px] flex flex-col space-y-[60px]">
              <ProjectHighlights />
            </div>
          </div>

          {/* || °.°.° MOBILE PANEL °.°.° ||  */}
          <div className={` 
          block xl:hidden
          bg-medium text-dark 
          w-full
          mt-10 mb-0 mx-auto pt-10 pb-12 rounded-t-[30px]
          px-9
          shadow 
          flex space-y-12
          `}>
            <div className="w-full mx-auto max-w-[400px] flex flex-col space-y-[50px]">
              <ProjectHighlights />
            </div>
          </div>

        </div>
      </div>


    </>
  );
}
export default Home;