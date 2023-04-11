import React from 'react';
import { SiReact, SiFigma, SiGithub, SiTailwindcss, SiHtml5, SiCss3, SiJavascript, SiBootstrap } from "react-icons/si";

const TechIcons = () => {

  const icons = [<SiReact />, <div className='text-[48px] text-center mx-auto'><p className='text-[8px]' >HTML</p><SiHtml5 /></div>, <div className='text-[48px] text-center mx-auto'><p className='text-[8px]' >CSS</p><SiCss3 /></div>, <SiJavascript />, <SiTailwindcss />, <SiFigma />, <SiGithub />, <SiBootstrap />];


  return (
    <>
      <div className='w-full flex'>
        <div className="mx-auto grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8  gap-2 mx-auto">
          {icons.map((i) => (
            <div className={`text-[60px] m-3 p-1 w-[65px] flex`} >
              {i}
            </div>
          )
          )}

        </div>
      </div>
    </>
  );
};

export default TechIcons;