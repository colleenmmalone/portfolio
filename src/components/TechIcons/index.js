import React from 'react';
import { SiReact, SiFigma, SiGithub, SiTailwindcss, SiHtml5, SiCss3, SiJavascript, SiBootstrap } from "react-icons/si";

// import { ReactIcon, Figma, Github, TailwindIcon, HTML, CSS, JS, Bootstrap } from '../../img';

const TechIcons = () => {

    // const imgs = [ReactIcon, HTML, CSS, JS, TailwindIcon, Figma, Github, Bootstrap];
    const icons = [ <SiReact />,  <div className='text-[48px] text-center mx-auto'><p className='text-[8px]' >HTML</p><SiHtml5 /></div>, <div className='text-[48px] text-center mx-auto'><p className='text-[8px]' >CSS</p><SiCss3 /></div>, <SiJavascript />,  <SiTailwindcss />,  <SiFigma />, <SiGithub />, <SiBootstrap /> ];


    return (
        <>
        {/* <div className="flex lg:mt-12 w-fit flex-wrap flex-start">
        {imgs.map((i) => (
          <div className={`h-[60px] min-w-[60px] bg-${theme}-light m-3 p-1 rounded flex`} >
            <img src={i} className={` h-full m-auto`} alt={`${i} icon`} />
          </div>
        )
        )}
        </div> */}

<div className="flex lg:mt-12 w-fit flex-wrap flex-start mx-auto text-white">
        {icons.map((i) => (
          <div className={`text-[60px] m-3 p-1 w-[65px] flex`} >
            {i}
          </div>
        )
        )}

      </div>
      </>
    );
};

export default TechIcons;