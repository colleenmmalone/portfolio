import React from "react";
import { useSelector } from "react-redux";

import Projects from "../../utils/Projects";

import ButtonProjectName from "../../components/ButtonProjectName";
import { Link } from "react-router-dom";

const ProjectHighlights = () => {

    const theme = useSelector((state) => state.changeTheme.theme);

    return (
        <>
            <div className={`border-y-2 border-${theme}-special py-3 md:py-4 xl:py-5`}>
                <h1
                    className={`text-3xl sm:text-[40px] md:text-[45px] lg:text-[50px] xl:text-[40px] 3xl:text-[45px] text-center font-semibold text-${theme}-dark font-mick`}>
                    Project Highlights
                </h1>
            </div>

            {Projects.map((p, i) => {
                if (i < 3) {
                    return (
                        <>
                            <div className={`w-full h-fit mx-auto ${p.bg} `}>
                                <Link
                                    to={p.to}
                                    target="_blank" rel="noopener noreferrer"
                                    className="my-5"
                                >
                                    <img src={p.img} className="w-full" alt={p.alt} />
                                </Link>
                            </div>
                            <ButtonProjectName label={p.title} figma={p.isFigma}
                                to={p.to} smallerFont={p.smallerFont }
                                target="_blank" rel="noopener noreferrer"
                            />
                        </>
                    )
                } else{
                    return(<></>)
                }
            })}



        </>
    )
}

export default ProjectHighlights; 