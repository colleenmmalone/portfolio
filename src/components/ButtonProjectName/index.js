import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const ButtonProjectName = ({ label = "Project Name", tech = '', className = '', to = "#" }) => {

    return (
        <div
        >
            <Link to={to} target="_blank" rel="noopener noreferrer">
                <button className={`w-full text-white font-karla`} >
                        <p className={`w-full my-2 text-left text-[1.4rem] md:text-[24px] fw-500 hover:underline`} >{label}</p>
                        <p className={`w-full text-left text-[1.4rem] md:text-[20px] opacity-80 `} >{tech}</p>
                </button>
            </Link>
        </div>
    );
};

export default ButtonProjectName;