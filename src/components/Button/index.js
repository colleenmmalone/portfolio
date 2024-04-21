import React from 'react';

const Button = ({ children, type }) => {
    const theme = 'lavender';

    const primary = `bg-${theme}-special text-white`;
    const secondary = `text-${theme}-special bg-white`;

    return (
        <button className={`border-[3px] border-${theme}-special ${type === "secondary" ? secondary : primary} rounded-lg px-4 py-2`} >
            {children}
        </button>
    );
};

export default Button;