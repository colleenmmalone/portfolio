import React from "react";
import { Me } from "../../img";
import AddMe from "../../components/AddMe";
import Title from "../../components/Title";

const AboutMe = () => {

  const padding = "px-[30px] sm:px-[40px] xl:px-[55px] 3xl:px-[60px] py-[30px] lg:py-[50px] space-y-[30px] ";

  return (
    <>
      <div className={`${padding} grow relative  mx-auto `} >

        <Title className='text-[40px] md:text-[48px] '>
          About Me
        </Title >

        <div className="flex flex-col space-y-[6px]">
          <div className={`mx-auto mt-[20px] w-fit rounded-lg bg-gradient-to-r from-white via-[#C088FF] to-[#7146A0]  p-[2px] sm:p-1 rounded-full`}>
            <div className="mx-auto h-[200px] w-[200px] overflow-hidden rounded-full">
              <img src={Me} alt={'me'} className="" />
            </div>
          </div>
          <h1 className="text-center font-lilita text-[28px]" >Atlanta, GA</h1>
          <AddMe />
        </div>

        <div className="w-full space-y-6 max-w-[700px] mx-auto ">

          <div className={`mx-auto w-fit rounded-lg bg-gradient-to-r from-white via-[#C088FF] to-[#7146A0] p-[2px] sm:p-1 `}>
            <div className={`bg-darkest text-[20px] rounded-lg flex flex-col py-7 px-4 w-full sm:p-10 space-y-7`} >

              <p>
                Hi! I'm Colleen. I have a passion for getting inside something and finding out how it works. My career is heading down the UI/UX design and development path, but I was originally a chemist. That may seem like a big leap, but not to me.
              </p>
              <div className={`flex space-x-3 text-2xl mx-auto text-dark opacity-80`}>

                <i className="bx bx-atom" />
                <i className="bx bxs-flask " />
                <i className="bx bx-atom " />

              </div>
              <p>
                What appeals to me about chemistry is how molecules interact with each other... changing a substance's composition just slightly can have dramatic effects on its properties. There is so much to discover through trial and error.
              </p>

              <div className={`flex space-x-3 text-2xl mx-auto text-dark opacity-80`}>

                <i className="bx bx-laptop" />
                <i className="bx bx-happy-heart-eyes " />
                <i className="bx bx-mobile " />

              </div>

              <p>
                I find the same fascination in programming. What happens if I change the margins here or add a cool visual effect there? This component should behave in a certain way... how do I transfer ideas from my mind to my keyboard?
              </p>
              <div className={`flex space-x-3 text-2xl mx-auto text-dark opacity-80`}>

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

      </div>

    </>


  );
}
export default AboutMe;