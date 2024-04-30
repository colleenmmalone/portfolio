import React from 'react';

const Button = ({ children, type }) => {
    

    const primary = `bg-special text-darkest hover:bg-lighter hover:border-lighter`;

    return (
        <button className={` ${primary} rounded-[10px] py-[16px] px-[16px] xl:rounded-[24px] xl:py-[28px] xl:px-[32px]`} >
            {children}
        </button>
    );
};

export default Button;