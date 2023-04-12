import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { useClickAway } from "use-click-away";


const Nav = () => {

  const theme = useSelector((state) => state.changeTheme.theme);

  const linkActive = `text-${theme}-special font-bold`;

  const [isOpen, setIsOpen] = useState(false);

  const clickRef = useRef("");

  useClickAway(clickRef, () => {
    setIsOpen(false)
  })

  // useClickAway({
  //   isOpen,
  //   setIsOpen,
  //   reactAppId: "portfolio",
  //   clickable: ["hamburger"]
  // })

  return (
    <>
      {/* || °.°.° NAV CONTAINER °.°.° ||  */}
      <div
        className={`bg-${theme}-nav text-white w-full m-0 py-1 flex 
        h-auto lg:h-[53px] 
        px-[25px] sm:px-[40px] xl:px-[55px] 3xl:px-[60px]
        content-center
   `}>

        {/* || °.°.° MY NAME °.°.° ||  */}
        <NavLink to="/portfolio" className={'mr-auto my-auto flex'}>
          <div className="mr-auto my-auto p-0" >
            <p className="text-[1.2rem] sm:text-[1.6rem] lg:text-[2rem] flex-nowrap my-auto" >
              Colleen Malone
            </p>
          </div>
        </NavLink>


        {/* || °.°.° NAV ICONS °.°.° ||  */}

        <div className="flex h-fit ml-auto my-auto text-[1.05rem] lg:text-[1.2rem] space-x-9">
          <div className="hidden sm:inline-flex space-x-9 my-auto">

            <NavLink to="/portfolio" className={({ isActive }) => isActive ? linkActive : `hover:text-${theme}-med`} >
              <p className="">Home</p>
            </NavLink>

            <NavLink to="/gallery" className={({ isActive }) => isActive ? linkActive : `hover:text-${theme}-med`}>
              <p className="">Gallery</p>
            </NavLink>

            <NavLink to="/about" className={({ isActive }) => isActive ? linkActive : `hover:text-${theme}-med`}>
              <p className="">About</p>
            </NavLink>


          </div>
          <div className="flex space-x-3">
            <button onClick={() => setIsOpen(!isOpen)} >
              <i className="bx bx-menu text-3xl my-auto ml-auto sm:hidden" />
            </button>

            <NavLink to="/settings" className={({ isActive }) => isActive ? linkActive : `hover:text-${theme}-med`}>
              <p className="flex">
                <i className="bx bxs-cog text-2xl my-auto" exact />
              </p>
            </NavLink>
          </div>


        </div>

      </div>

      <div className={` ${isOpen ? 'visible' : 'hidden'} absolute top-[50px] right-[25px] min-w-[200px] z-20 bg-${theme}-light dark:bg-${theme}-dark border-2 border-${theme}-light rounded-lg p-2 pb-4 text-[18px] flex flex-col space-y-2`} id="hamburger" ref={clickRef}>
        
        <button onClick={()=>{setIsOpen(false)}} className="ml-auto mr-2 text-2xl"><i className="bx bx-x" /></button>
        <Link to="/portfolio"  >
          <div className={`hover:bg-${theme}-special hover:text-white px-2 py-1`} onClick={()=>setIsOpen(false)}>
          <p className="">Home</p>
          </div>
        </Link>

        <Link to="/gallery" className={({ isActive }) => isActive ? linkActive : `hover:text-${theme}-med`}>
         
        <div className={`hover:bg-${theme}-special hover:text-white px-2 py-1`} onClick={()=>setIsOpen(false)}>
          <p className="">Gallery</p>
          </div>
        </Link>

        <Link to="/about" className={({ isActive }) => isActive ? linkActive : `hover:text-${theme}-med`}>
         
        <div className={`hover:bg-${theme}-special hover:text-white px-2 py-1`} onClick={()=>setIsOpen(false)}>
          <p className="">About</p>
          </div>
        </Link>
      </div>
    </>
  )
}

export default Nav;