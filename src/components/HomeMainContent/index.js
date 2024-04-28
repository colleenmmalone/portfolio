import React from 'react';
import TechIcons from "../../components/TechIcons";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const HomeMainContent = () => {


    const padding = "px-[25px] sm:px-[40px] xl:px-[55px] 3xl:px-[60px] ";

    return (
        <div className={`${padding} space-y-[70px] my-6 xl:my-auto mx-auto `} >
            <div className='flex flex-col space-y-[6px] text-left'>
                <h1 className={`text-[46px] sm:text-[72px] md:text-[85px] text-lighter font-lilita leading-none`}>
                    Hi! I’m Colleen.
                </h1>
                <h3 className={`text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px] leading-tight`} >
                    I am a UI dev and designer, blending creativity with my technical background.
                </h3>
            </div>

            <div className={`mx-auto w-fit rounded-lg bg-gradient-to-r from-white via-[#C088FF] to-[#7146A0] p-1`}>
                <div className={`bg-medium m-0 p-3 rounded-lg`}>
                    <TechIcons />
                </div>
            </div>

            <div className="w-full flex">
                <div className={`mx-auto mt-3 mb-0 text-[32px] fw-500`} >
                    <Link to="/gallery">
                        <Button>View Latest Projects</Button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default HomeMainContent;