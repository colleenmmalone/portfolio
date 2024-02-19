import React from "react";
import { SiInstagram } from "react-icons/si";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

const AddMeInsta = () => {

    const theme = useSelector((state) => state.changeTheme.theme);

    return (
        <div className="flex justify-center items-center space-x-2 text-md">
            <span> Add me on Insta!</span>
            <Link
                to="https://www.instagram.com/codingcolleen/"
                className={`my-5 mx-auto text-${theme}-special hover:text-${theme}-nav flex justify-center items-center space-x-1`}
            >
                <SiInstagram /><span className={` `}> codingColleen</span>
            </Link>

        </div>
    )
}

export default AddMeInsta; 