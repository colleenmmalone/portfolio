import React from "react";
import { useSelector } from "react-redux";
import ProjectHighlights from "../../components/ProjectHighlights";


const Gallery = () => {

  const theme = useSelector((state) => state.changeTheme.theme);
  const padding = "px-[25px] sm:px-[40px] xl:px-[55px] 3xl:px-[60px] ";

  return (
    <>

      <div className={`min-h-[100vh] ${padding}`}>
              <h1 className={`text-[55px] sm:text-[72px] md:text-[90px] text-${theme}-special `}>
                Gallery
              </h1>

              <ProjectHighlights />

      </div>


    </>
  );
}
export default Gallery;