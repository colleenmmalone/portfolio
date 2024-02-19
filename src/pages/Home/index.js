import React from "react";
import { useSelector } from "react-redux";
import ProjectHighlights from "../../components/ProjectHighlights";
import TechIcons from "../../components/TechIcons";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const Home = () => {

  const theme = useSelector((state) => state.changeTheme.theme);
  const padding = "px-[25px] sm:px-[40px] xl:px-[55px] 3xl:px-[60px] ";

  return (
    <>

      <div className="h-auto xl:div-screen-height ">
        <div className=" flex flex-col xl:flex-row">

          <div className={`h-auto xl:div-screen-height xl:w-full w-[100vw] flex `}>
            <div className={`${padding} space-y-7 my-6 xl:my-auto mx-auto `} >
              <h1 className={`text-[46px] sm:text-[72px] md:text-[85px] text-${theme}-special font-inter max-w-[792px] mx-auto`}>
                Hi! I’m Colleen.
              </h1>
              <h3 className={`pb-6 text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px] lg:leading-[60px] font-karla  max-w-[792px] mx-auto`} >
                I am a UI dev and designer, blending creativity with my technical background.
              </h3>

              <div className={`mx-auto w-fit rounded-lg bg-gradient-to-r from-${theme}-dark dark:from-${theme}-light via-${theme}-special dark:via-${theme}-special to-${theme}-nav dark:to-${theme}-nav p-1`}>
                <div className={`bg-${theme}-light dark:bg-${theme}-dark m-0 p-3 rounded-lg opacity-90`}>
                  <TechIcons />
                </div>
              </div>

              <div className="w-full flex">
                <div className={`mx-auto mt-3 mb-0`} >
                <Link
                to="/gallery"
            >
                  <Button>View Latest Projects</Button>
                  </Link>
                </div>
              </div>

              <div className="w-full flex  my-0">
                <div className={`mx-auto text-center`} >
                  <Link
                    to="/gallery"
                    className="text-sm"
                  >
                    Don't like these colors? <span className={`m-0 p-0 text-${theme}-special hover:text-${theme}-nav underline`}>Check out some other themes here.</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>

          {/* || °.°.° DESKTOP PANEL °.°.° ||  */}
          <div className={`
          hidden xl:block 
          div-screen-height overflow-y-scroll
          bg-${theme}-med text-${theme}-dark 
          w-[34%] max-w-[670px] min-w-[470px]
          mt-0 py-12 rounded-t-[0px] 
          ${padding}
          flex space-y-12
          `}>
            <div className="w-full mx-auto max-w-[350px] flex flex-col space-y-12">
              <ProjectHighlights />
            </div>
          </div>

          {/* || °.°.° MOBILE PANEL °.°.° ||  */}
          <div className={` 
          block xl:hidden
          bg-${theme}-med text-${theme}-dark 
          w-full max-w-[500px]
          mt-10 mb-10 mx-auto py-12 rounded-[30px]
          px-9
          shadow 
          flex space-y-12
          `}>
            <div className="w-full mx-auto max-w-[350px] flex flex-col space-y-12">
              <ProjectHighlights />
            </div>
          </div>

        </div>
      </div>


    </>
  );
}
export default Home;