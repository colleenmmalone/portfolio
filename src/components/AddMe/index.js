import React from "react";
import { SiInstagram, SiLinkedin } from "react-icons/si";
import { Link } from "react-router-dom";

const AddMe = () => {

    return (
        <div className="flex justify-center items-center space-x-2 text-md">
            <Link
            target="_blank" rel="noopener noreferrer"
                to="https://www.linkedin.com/in/colleen-malone-469538102/"
                className={` text-special hover:text-nav flex justify-center items-center space-x-1`}
            >
                <SiLinkedin /><span className={`hover:underline `}> Colleen Malone</span>
            </Link>
            <span className="px-2" > | </span>
            <Link
            target="_blank" rel="noopener noreferrer"
                to="https://www.instagram.com/codingcolleen/"
                className={` text-special hover:text-nav flex justify-center items-center space-x-1`}
            >
                <SiInstagram /><span className={`hover:underline `}> codingColleen</span>
            </Link>

        </div>
    )
}

export default AddMe; 