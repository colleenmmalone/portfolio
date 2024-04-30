import React from "react";
import Projects from "../../utils/Projects";
import ButtonProjectName from "../../components/ButtonProjectName";
import { Link } from "react-router-dom";
import Title from "../Title";

const ProjectHighlights = () => {


    return (
        <>
            <Title className='text-3xl sm:text-[42px] pb-6'>
                Project Highlights
            </Title >

            {
                Projects.map((p, i) => {
                    if (i < 3) {
                        return (
                            <>
                                <div className="flex flex-col space-y-[6px]">
                                    <div className={`w-full h-fit mx-auto ${p.bg} `} key={`highlight${i}`}>
                                        <Link
                                            to={p.to}
                                            target="_blank" rel="noopener noreferrer"
                                        >
                                            <img src={p.img} className="w-full opacity-80 hover:opacity-100" alt={p.alt} />
                                        </Link>
                                    </div>
                                    <ButtonProjectName label={p.title} tech={p.tech}
                                        to={p.to} smallerFont={p.smallerFont}
                                        target="_blank" rel="noopener noreferrer"
                                    />
                                </div>
                            </>
                        )
                    } else {
                        return (<></>)
                    }
                })
            }



            < Link
                to="/gallery"
                className="my-5 mx-auto text-[18px]"
            >
                Find more in my < span className={` text-special hover:underline `
                }> Gallery</span >
            </Link >



        </>
    )
}

export default ProjectHighlights; 