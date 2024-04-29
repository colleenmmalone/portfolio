import React from "react";
import ProjectHighlights from "../../components/ProjectHighlights";
import HomeMainContent from "../../components/HomeMainContent";

const Home = () => {

  const padding = "px-[25px] sm:px-[40px] xl:px-[55px] 3xl:px-[60px] ";

  return (
    <>

      <div className="h-auto xl:div-screen-height ">
        <div className=" flex flex-col xl:flex-row">

          {/* need to set up grid  */}
          <div className={`h-auto xl:div-screen-height xl:w-full w-[100vw] flex bg-darker`}>
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
          bg-med text-dark 
          w-full max-w-[500px]
          mt-10 mb-10 mx-auto py-12 rounded-[30px]
          px-9
          shadow 
          flex space-y-12
          `}>
            <div className="w-full mx-auto max-w-[350px] flex flex-col space-y-[50px]">
              <ProjectHighlights />
            </div>
          </div>

        </div>
      </div>


    </>
  );
}
export default Home;