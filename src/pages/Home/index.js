import React from "react";
import { ReactIcon, Figma, Github, TailwindIcon, HTML, CSS, JS, Bootstrap } from '../../img';
import { useSelector } from "react-redux";
import ButtonChangeTheme from "../../components/ButtonChangeTheme";


const Home = () => {

  const imgs = [ReactIcon, HTML, CSS, JS, TailwindIcon, Figma, Github, Bootstrap];

  const theme = useSelector((state) => state.changeTheme.theme);

  return (
    <>
      <div className="h-full flex-1">
        <div className="grid grid-cols-12 h-full">
          <div className={`col-span-8 px-[123px] flex flex-col `}>
            <div className="my-auto">
              <h1 className={`text-[82px] text-${theme}-special `}> Hi! I’m Colleen.</h1>
              <h3 className={`text-[62px] leading-[75px] my-7 `} >I identify as a full-stack web developer, but I am learning UX Visual Design in Figma.</h3>
              <div className="flex mt-12 w-fit flex-wrap flex-start">
                {imgs.map((i) => (
                  <div className={`h-[60px] min-w-[60px] bg-${theme}-light m-3 p-1 rounded flex`} >
                    <img src={i} className={` h-full m-auto`} alt={`${i} icon`} />
                  </div>
                )
                )}
              </div>


              <div className={`w-full bg-${theme}-med rounded-3xl mt-6 py-8 px-2`}>
                <p className="text-3xl text-black" >Current Theme</p><br />
                <ButtonChangeTheme />
              </div>

            </div>
          </div>

          <div className={`div-scroll col-span-4 bg-${theme}-med text-${theme}-dark p-default`}>
            <h1 className="text-3xl text-center mx-auto my-5">Scroll ^^^</h1>

            <div className="w-3/4 h-[400px] bg-[#888] mx-auto my-12"></div>
            <div className="w-3/4 h-[400px] bg-[#888] mx-auto my-12"></div>
            <div className="w-3/4 h-[400px] bg-[#888] mx-auto my-12"></div>
            <p className="text-lg text-center">hi :)</p>
          </div>

        </div>
      </div>


    </>
  );
}
export default Home;