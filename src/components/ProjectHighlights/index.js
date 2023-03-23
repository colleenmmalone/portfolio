import React from "react";
import { useSelector } from "react-redux";
import { Band, Gauge, Hoopla } from "../../img";

import ButtonProjectName from "../../components/ButtonProjectName";
import { Link } from "react-router-dom";

const ProjectHighlights = () => {

    const theme = useSelector((state) => state.changeTheme.theme);

    return (
        <>
            <h1
                className={`text-3xl sm:text-[40px] md:text-[45px] lg:text-[50px] xl:text-[40px] 3xl:text-[45px] text-center font-medium text-${theme}-special`}>
                Project Highlights
            </h1>

            <div className="w-full h-fit bg-black mx-auto px-12 ">
                <Link
                    to="https://www.figma.com/proto/lkbPnwl2TOMaTFeqXHvPTg/Inspo-Board?page-id=0%3A1&node-id=1-2&viewport=895%2C702%2C0.59&scaling=scale-down&starting-point-node-id=1%3A2&show-proto-sidebar=1"
                    target="_blank" rel="noopener noreferrer"
                    className="my-5"
                >
                    <img src={Band} className="w-full" alt="band thumbnail" />
                </Link>
            </div>
            <ButtonProjectName label={"Band Website"} figma
                to="https://www.figma.com/proto/lkbPnwl2TOMaTFeqXHvPTg/Inspo-Board?page-id=0%3A1&node-id=1-2&viewport=895%2C702%2C0.59&scaling=scale-down&starting-point-node-id=1%3A2&show-proto-sidebar=1"
            />

            <div className="w-full h-fit bg-black mx-auto ">
                <Link
                    to="https://www.figma.com/proto/lkbPnwl2TOMaTFeqXHvPTg/Inspo-Board?page-id=213%3A195&node-id=213-298&viewport=3469%2C-590%2C1.1&scaling=scale-down&starting-point-node-id=213%3A298"
                    target="_blank" rel="noopener noreferrer"
                >
                    <img src={Hoopla} className="w-full" alt="band thumbnail" />
                </Link>
            </div>
            <ButtonProjectName label={"Hoopla: Sleep Noise App"} figma
                to="https://www.figma.com/proto/lkbPnwl2TOMaTFeqXHvPTg/Inspo-Board?page-id=213%3A195&node-id=213-298&viewport=3469%2C-590%2C1.1&scaling=scale-down&starting-point-node-id=213%3A298"
            />

            <div className="w-full h-fit bg-black mx-auto ">
                <Link
                    to="https://stitchineer.github.io/knit-gauge-calculator/"
                    target="_blank" rel="noopener noreferrer"
                >
                    <img src={Gauge} className="w-full" alt="band thumbnail" />
                </Link>
            </div>
            <ButtonProjectName label={"Knit Gauge Calculator"}
                to="https://stitchineer.github.io/knit-gauge-calculator/"
            />


        </>
    )
}

export default ProjectHighlights; 