import React from 'react';
import { SiReact, SiFigma, SiGithub, SiTailwindcss, SiHtml5, SiCss3, SiJavascript, SiBootstrap } from "react-icons/si";

const TechIcons = () => {

  const htmlClass=  'text-[30px] md:text-[48px] text-center mx-auto';
  const htmlTextClass=  'text-[8px]';

  const icons = [<SiReact />, <div className={htmlClass}><p className={htmlTextClass} >HTML</p><SiHtml5 /></div>, <div className={htmlClass}><p className={htmlTextClass} >CSS</p><SiCss3 /></div>, <SiJavascript />, <SiTailwindcss />, <SiFigma />, <SiGithub />, <SiBootstrap />];


  return (
    <>
      <div className='w-full flex'>
        <div className="mx-auto grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-2 text-center">
          {icons.map((i,d) => (
            <div className={`text-[40px] md:text-[60px] m-2 md:m-3 p-1 flex`} key={`icon${d}`} >
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