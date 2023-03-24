import React from "react";
import { useSelector } from "react-redux";


const NotFound = () => {

  const theme = useSelector((state) => state.changeTheme.theme);

  return (
    <>


      <div className={`div-screen-height bg-${theme}-light dark:bg-${theme}-dark  p-[50px] sm:p-[100px]`}>
        <div className={`bg-${theme}-special rounded-lg flex flex-col p-7 mx-auto sm:p-12`} >


        <h1 className="mx-auto text-red text-[50px] sm:text-[200px]" >404</h1>
        <h1 className="mx-auto text-red text-[25px] sm:text-[50px]" >NOT FOUND</h1>

        </div>
      </div>



    </>
  );
}
export default NotFound;