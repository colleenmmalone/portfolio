import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactIcon, Figma } from '../../img';

const ButtonProjectName = ({ label = "Project Name", figma = false, className = '', to = "#" }) => {
  
    const [isVisible, setIsVisible] = useState(false);
    const btnRef = useRef(null);
  
    useEffect(() => {
      const image = btnRef.current;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(image);
          }
        },
        {
          rootMargin: '0px',
          threshold: 0.1,
        }
      );
  
      observer.observe(image);
  
      return () => {
        observer.unobserve(image);
      };
    }, []);

    return (
        <div
        ref={btnRef}
            className={` ${isVisible ? "animate-slide" : ""} `}
            // style={{
            //     opacity: isVisible ? 1 : 0,
            //     transition: 'opacity .2s ease-in-out',
            // }}
        >
            <Link to={to} target="_blank" rel="noopener noreferrer">
                <button className={` bg-special flex p-0 w-full rounded-[16px] h-[4rem] overflow-hidden ${className} shadow-sm hover:bg-nav`} >

                    <div className={` bg-light w-[25%] h-full rounded-r-full p-3 flex`}>
                        <img src={figma ? Figma : ReactIcon} className={`mx-auto h-full`} alt={`${figma ? 'Figma' : 'React'} icon  `} />
                    </div>

                    <div className='my-auto'>
                        <p className={`my-auto w-full pl-4 text-left text-[1.4rem] md:text-xl text-white leading-7`} >{label}</p>
                    </div>

                </button>
            </Link>
        </div>
    );
};

export default ButtonProjectName;