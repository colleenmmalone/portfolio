import React from "react";

const NotFound = () => {
  

  return (
    <>


      <div className={`div-screen-height bg-dark  p-[50px] sm:px-[100px] sm:py-[60px]`}>
        <div className={`bg-special rounded-lg flex flex-col p-7 mx-auto sm:p-10`} >


          <h1 className="mx-auto text-red text-[50px] sm:text-[100px] md:text-[160px]" >404</h1>
          <h1 className="mx-auto text-red text-[25px] sm:text-[40px] md:text-[50px]" >NOT FOUND</h1>
          <a href="/portfolio" className="text-center w-full" >
            <h1 className={`mx-auto text-black underline text-[25px] sm:text-[40px] md:text-[55px] mt-5`} >BACK TO HOME</h1>
          </a>
        </div>
      </div>



    </>
  );
}
export default NotFound;