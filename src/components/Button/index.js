import React from 'react';

const Button = ({ children, type }) => {
    

    const primary = `bg-special text-darkest hover:bg-lighter hover:border-lighter`;
    const secondary = `text-special bg-white`;

    return (
        <button className={`border-[3px] border-special ${type === "secondary" ? secondary : primary} rounded-lg px-4 py-2`} >
            {children}
        </button>
    );
};

export default Button;