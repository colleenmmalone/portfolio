import React from "react";
import { NavLink } from "react-router-dom";
import { NavLinksPaths } from "../NavLinksPaths";
const NavLinks = () => {

  const linkStyle = 'text-[20px] sm:text-[24px] nav-link ';

    return (
        <>
        {/* || °.°.° NAV LINKS °.°.° ||  */}
        <div className="flex h-full ml-auto my-auto">
          <div className="inline-flex h-full my-0">

            {NavLinksPaths.map((n, i) => {

              return (

                <NavLink to={n.to} className={({ isActive }) =>linkStyle + (isActive ? `nav-link-active`  : '')} key={`nav${i}`}>
                  <p className="my-auto">{n.label}</p>
                </NavLink>
              )
            })}

          </div>
        </div>
        </>
    )
}

export default NavLinks;