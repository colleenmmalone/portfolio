import React, { useRef } from "react";
import { useSelector } from "react-redux";

import { Video } from "../../img";


const AboutMe = () => {

  const theme = useSelector((state) => state.changeTheme.theme);

  const videoRef = useRef();
  const setPlayBack = () => {
    videoRef.current.playbackRate = 0.45;
  };

  return (

    <>


      <div className={`p-[50px] sm:px-[100px] sm:py-[60px] grow relative `} >
{/* 
        <video
          autoPlay muted loop
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          ref={videoRef}
          onCanPlay={() => setPlayBack()}
        >
          <source src={Video} type="video/mp4" />
        </video> */}
        <div className="z-20 relative space-y-6 max-w-[700px] mx-auto">
          <div className={`bg-${theme}-special text-white rounded-lg flex flex-col p-3 w-full  shadow-lg`} >

            <h1 className="mx-auto text-[30px] sm:text-[36px] md:text-[42px]" >About Me</h1>
          </div>

          <div className={`bg-${theme}-med text-${theme}-dark text-[15px] sm:text-[18px] md:text-[20px] rounded-lg flex flex-col py-7 px-5 w-full sm:p-10 shadow-lg space-y-7`} >

            <p>
              Hi! I'm Colleen. I have a passion for getting inside something and finding out how it works. My career is heading down the UI/UX design and development path, but I was originally a chemist. That may seem like a big leap, but not to me.
            </p>
            <div className={`flex space-x-3 text-2xl mx-auto text-${theme}-dark opacity-80`}>

              <i className="bx bx-atom" />
              <i className="bx bxs-flask " />
              <i className="bx bx-atom " />

            </div>
            <p>
              What appeals to me about chemistry is how molecules interact with each other... changing a substance's composition just slightly can have dramatic effects on its properties. There is so much to discover through trial and error.
            </p>

            <div className={`flex space-x-3 text-2xl mx-auto text-${theme}-dark opacity-80`}>

              <i className="bx bx-laptop" />
              <i className="bx bx-happy-heart-eyes " />
              <i className="bx bx-mobile " />

            </div>

            <p>
              I find the same fascination in programming. What happens if I change the margins here or add a cool visual effect there? This component should behave in a certain way... how do I transfer ideas from my mind to my keyboard?
            </p>
            <div className={`flex space-x-3 text-2xl mx-auto text-${theme}-dark opacity-80`}>

              <i className="bx bx-palette" />
              {/* <i className="bx bx-brain" /> */}
              <i className="bx bx-bulb " />
              <i className="bx bx-palette " />

            </div>

            <p>
And while I have a lot of technical ability, I am also creative! If anyone tells you there is no creativity in coding or chemistry, ignore them. It has always existed in my career. Now that I am venturing into UX Design, I am able to stretch my creative muscles even further. I excel where tech and creativity meet.
   </p>
          </div>
        </div>
      </div>

    </>


  );
}
export default AboutMe;