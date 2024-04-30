import React from "react";
import Projects from "../../utils/Projects";
import Title from "../../components/Title";
import GalleryCard from "../../components/GalleryCard";


const Gallery = () => {

  const padding = "px-[30px] sm:px-[40px] xl:px-[55px] 3xl:px-[60px] py-[30px] lg:py-[50px] ";


  return (
    <>
      <div className={`min-h-[100vh] mx-auto ${padding} space-y-[50px]`}>
        <Title className='text-[40px] md:text-[48px]'>
          Gallery
        </Title >

        {/* 1 - 2 column grid  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-0">

          {/* Project Card  */}
          {Projects.map((p, i) => {
            return (
              <>
                <GalleryCard p={p} i={i} />
              </>
            )
          })}
        </div>

        <hr className={`border-special border-[1.5px] rounded  my-8 `} />
        <div className={`max-w-[650px] space-y-2 text-[16px] mx-auto my-8 leading-tight`}>
          <h1 className={`text-[18px] sm:text-[20px] text-lighter`}>
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