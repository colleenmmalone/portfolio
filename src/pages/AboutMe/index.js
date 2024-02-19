import React from "react";
import { useSelector } from "react-redux";
import AddMeInsta from "../../components/AddMeInsta";

// import { Video } from "../../img";


const AboutMe = () => {

  const theme = useSelector((state) => state.changeTheme.theme);

  // const videoRef = useRef();
  // const setPlayBack = () => {
  //   videoRef.current.playbackRate = 0.45;
  // };

  return (

    <>


      <div className={`p-[50px] pt-0 sm:pb-[100px] sm:pb-[60px] grow relative max-w-[1140px] mx-auto`} >
      <h1 className={`text-[55px] sm:text-[72px] md:text-[90px] text-${theme}-special `}>
            About Me
          </h1>

          <hr className={`border-${theme}-special border-[1.5px] rounded mb-8`} />
          <hr className={`border-${theme}-special border-[1.5px] rounded  mb-8`} />
        <div className="z-20 relative space-y-6 max-w-[700px] mx-auto">


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
            <hr className={`border-${theme}-dark border-[1px] opacity-20 rounded mb-8`} />

            <AddMeInsta />

          </div>

        </div>

      </div>

    </>


  );
}
export default AboutMe;