import React from 'react';

const Button = ({ children, type }) => {
    

    const primary = `bg-special text-darkest hover:bg-lightest hover:border-lightest`;

    return (
        <button className={` ${primary} rounded-[10px] py-[16px] px-[16px] xl:rounded-[20px] xl:py-[18px] xl:px-[28px]`} >
            {children}
        </button>
    );
};

export default Button;