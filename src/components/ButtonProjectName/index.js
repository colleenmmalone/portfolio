import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactIcon, Figma } from '../../img';

const ButtonProjectName = ({ label = "Project Name", tech = '', className = '', to = "#" }) => {
  
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
        >
            <Link to={to} target="_blank" rel="noopener noreferrer">
                <button className={` mt-[12px] p-0 w-full text-white`} >
                        <p className={`m-0 w-full text-left text-[1.4rem] md:text-[24px] fw-500 hover:underline`} >{label}</p>
                        <p className={`m-0 mt-3  w-full text-left text-[1.4rem] md:text-[20px] opacity-80 `} >{tech}</p>
                </button>
            </Link>
        </div>
    );
};

export default ButtonProjectName;