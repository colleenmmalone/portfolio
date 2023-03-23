import React from 'react';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { ReactIcon, Figma } from '../../img';

const ButtonProjectName = ({ label="Project Name", figma=false, className='', to="#" }) => {

    const theme = useSelector((state) => state.changeTheme.theme);

    return (
        <div>
        <Link to={to}>
        <button className={` bg-${theme}-special text-white flex rounded-lg p-0 w-full rounded-[16px] overflow-hidden ${className}`} >
            <div className={` bg-${theme}-light w-[35%] rounded-r-full px-6 py-4 flex`}>
                <img src={figma ? Figma : ReactIcon } className="w-full mx-auto" alt={`${figma ? 'Figma' : 'React' } icon `} />
            </div>
            <p className='my-auto w-full pl-5 text-left text-3xl' >{label}</p>
        </button>
        </Link>
        </div>
    );
};

export default ButtonProjectName;