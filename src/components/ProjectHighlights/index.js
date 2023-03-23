import React from "react";
import { useSelector } from "react-redux";

import ButtonProjectName from "../../components/ButtonProjectName";

const ProjectHighlights = () => {

    const theme = useSelector((state) => state.changeTheme.theme);

    return (
        <>
            <h1 
            className={`text-3xl sm:text-[40px] md:text-[45px] lg:text-[50px] xl:text-[40px] 3xl:text-[45px] text-center font-medium text-${theme}-special`}>
                Project Highlights
            </h1>
            <div className="w-full  h-[400px] bg-[#888] mx-auto my-12"></div>
            <ButtonProjectName />
            <div className="w-full l h-[400px] bg-[#888] mx-auto my-12"></div>
            <ButtonProjectName figma />
            <div className="w-full  h-[400px] bg-[#888] mx-auto my-12"></div>
            <ButtonProjectName className="mb-6" />
        </>
    )
}

export default ProjectHighlights; 