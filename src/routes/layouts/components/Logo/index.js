import React from "react";
import { NavLink } from "react-router-dom";

const Logo = () => {

    return (
        <>
            {/* || °.°.° MY NAME °.°.° ||  */}
            <NavLink to="/portfolio" className={'m-auto md:mr-auto md:my-auto flex flex-grow'}>
                <div className="mr-auto my-auto p-0 h-full flex" >
                    <p className="my-auto mb-0 md:mb-auto text-white font-lilita text-[2rem] sm:text-[2.8rem] flex-nowrap my-auto" >
                        Colleen Malone
                    </p>
                </div>
            </NavLink>
        </>
    )
}

export default Logo;