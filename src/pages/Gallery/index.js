import React from "react";
import { useSelector } from "react-redux";
import Projects from "../../utils/Projects";

import { Link } from "react-router-dom";


const Gallery = () => {

  const theme = useSelector((state) => state.changeTheme.theme);
  const padding = "px-[25px] sm:px-[40px] xl:px-[55px] 3xl:px-[60px] ";

  return (
    <>

      <div className={`min-h-[100vh] ${padding} `}>
        <h1 className={`text-[55px] sm:text-[72px] md:text-[90px] text-${theme}-special `}>
          Gallery
        </h1>

        <hr className={`border-${theme}-special border-[1.5px] rounded mb-8`} />
        <hr className={`border-${theme}-special border-[1.5px] rounded`} />

        <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto">

          {Projects.map((p, i) => {

              return (
                <>
                  <div className={`grid grid-cols-2 m-4 bg-${theme}-med rounded-[8px] shadow-sm p-4 space-x-7`}>
                    <div className=" mx-auto flex flex-col" >

                        <div className={`w-full mx-auto ${p.bg} rounded-[8px] overflow-hidden shadow-sm`}>
                          <Link
                            to={p.to}
                            target="_blank" rel="noopener noreferrer"
                            className="my-5"
                          >
                            <img src={p.img} className="w-full" alt={p.alt} />
                          </Link>
                        </div>

                    </div>
                    <div className="" >


                        <h1 className={`text-center text-3xl text-${theme}-dark font-inter`} >{p.title}</h1>
                        <hr className={`border-${theme}-special border-[1px] mb-3 rounded`} />


                      <div className="">
                        {p.paragraphs?.map((t)=>{
                          return(
                            <p className={` text-${theme}-dark `} >{t}</p>
                          )
                        })}
                      </div>
                    </div>

                  </div>
                </>
              )
            
          })}
        </div>


      </div>


    </>
  );
}
export default Gallery;