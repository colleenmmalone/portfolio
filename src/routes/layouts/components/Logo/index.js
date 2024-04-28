import React from "react";
import { NavLink } from "react-router-dom";

const Logo = () => {

    return (
        <>
            {/* || °.°.° MY NAME °.°.° ||  */}
            <NavLink to="/portfolio" className={'mr-auto my-auto flex'}>
                <div className="mr-auto my-auto p-0" >
                    <p className="text-white font-lilita text-[2rem] sm:text-[2.8rem]  flex-nowrap my-auto" >
                        Colleen Malone
                    </p>
                </div>
            </NavLink>
        </>
    )
}

export default Logo;