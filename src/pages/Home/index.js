import React from "react";
import { ReactIcon, Figma, Github, TailwindIcon, HTML, CSS, JS, Bootstrap } from '../../img';


const Home = () => {

  const imgs = [ReactIcon, HTML, CSS, JS, TailwindIcon, Figma, Github];

  return (
    <>
      <div className="h-full flex-1">
        <div className="grid grid-cols-12 h-full">
          <div className="col-span-8 bg-[#bbb] px-[123px] flex flex-col">
            <div className="my-auto">
              <h1 className="text-[82px] "> Hi! I’m Colleen.</h1>
              <h3 className="text-[62px] leading-[75px] my-7" >I identify as a full-stack web developer, but I am learning UX Visual Design in Figma.</h3>
              <div className="flex mx-auto mt-12 w-fit flex-wrap">
                {imgs.map((i) => (
                  <div className="h-[60px] min-w-[60px] bg-[#eee] m-3 p-1 rounded flex" >
                    <img src={i} className={` h-full m-auto`} />
                  </div>
                )
                )}
              </div>

            </div>
          </div>

          <div className="div-scroll col-span-4 bg-white p-default">
            <div className="w-3/4 h-[400px] bg-[#ccc] mx-auto my-5"></div>
            <div className="w-3/4 h-[400px] bg-[#ccc] mx-auto my-5"></div>
            <div className="w-3/4 h-[400px] bg-[#ccc] mx-auto my-5"></div>
          </div>
        </div>
      </div>


    </>
  );
}
export default Home;