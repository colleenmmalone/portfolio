import React from 'react';

const Title = ({ children, className = '' }) => {

    return (

        <div className={`border-b-[3px] border-lighter py-3 md:py-4 xl:py-5 `}>
            <h1
                className={` text-center fw-500 font-lilita pb-2 ${className}`}>
                {children}
            </h1>
        </div>
    );
};

export default Title;