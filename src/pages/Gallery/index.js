import React from "react";
import Projects from "../../utils/Projects";
import { Link } from "react-router-dom";


const Gallery = () => {
  const theme = 'lavender';
  const padding = "px-[25px] sm:px-[40px] xl:px-[55px] 3xl:px-[60px] ";

  return (
    <>
      <div className={`min-h-[100vh] mx-auto ${padding}`}>
        <h1 className={`text-[55px] sm:text-[72px] md:text-[90px] text-${theme}-special `}>
          Gallery
        </h1>

        <hr className={`border-${theme}-special border-[1.5px] rounded mb-8`} />
        <hr className={`border-${theme}-special border-[1.5px] rounded  mb-8`} />


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-0">

          {Projects.map((p, i) => {

            return (
              <>
                <div className={`grid grid-cols-1 sm:grid-cols-2 gap-8 bg-${theme}-med rounded-[8px] shadow-sm px-6 py-7 max-w-[550px] mx-auto`} key={`project${i}`}>
                  <div className="m-0 p-0 w-full block sm:hidden max-w-[350px] mx-auto">
                    <h1 className={`text-center text-3xl text-${theme}-dark font-inter`} >{p.title}</h1>
                    <hr className={`border-${theme}-special border-[1px] rounded`} />
                  </div>

                  <div className={`w-full mx-auto ${p.bg} h-fit rounded-[8px] max-w-[350px] overflow-hidden shadow-sm`}>
                    <Link
                      to={p.to}
                      target="_blank" rel="noopener noreferrer"
                    >
                      <img src={p.img} alt={p.alt} className="w-full opacity-80 hover:opacity-100" />
                    </Link>
                  </div>

                  <div className="w-full max-w-[350px] mx-auto" >

                    <div className="m-0 p-0 w-full hidden sm:block">
                    <Link
                      to={p.to}
                      target="_blank" rel="noopener noreferrer"
                    >
                      <h1 className={`text-center text-2xl text-${theme}-dark font-inter hover:text-${theme}-special`} >{p.title}</h1>
                      </Link>
                      <hr className={`border-${theme}-special border-[1px] mb-3 rounded`} />
                    </div>

                    <div className="space-y-3 ">
                      {p.paragraphs?.map((t, d) => {
                        return (
                          <p className={` text-${theme}-dark text-[14px] `} key={`paragraph${i}-${d}`}>{t}</p>
                        )
                      })}
                    </div>
                  </div>

                </div>
              </>
            )

          })}
        </div>



        <hr className={`border-${theme}-special border-[1.5px] rounded  my-8 `} />
          <div className={`max-w-[650px] space-y-2 text-${theme}-light text-[14px] mx-auto my-8`}>
           <h1 className={`text-[18px] sm:text-[20px] text-${theme}-special `}>
          Hold on...isn't this Figma design the same as an actual website?
        </h1>

        <p className="">No, but that is a common mistake! I like to think of a Figma protoype as an interactive slideshow. </p>
        <p className="">In reality, the Figma design is a series of screens on an artboard. Components can have hover and/or click effects, just like on a real website. The designer is able to create hookups between screens so that it <em>reacts</em> (pun intended) like a normal website would. That's the magic of Figma!</p>
        <p className="">When the designs are complete, they are handed off to the developers (like myself) to make an actual, live site with a real backend and and all the other bells and whistles.</p>
</div>
      </div>
    </>
  );
}
export default Gallery;