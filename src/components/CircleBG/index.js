import React from 'react';

const CircleBG = () => {

    const circleStyle ='bg-light rounded-full border-white border-2 blur-[114px] absolute';
    const display = 'hidden xl:block';
    const first = '800px';
    const second = '1012px';
    const third = '760px';

    return (
        <>
                 <div
            style={{ 'height': third, 'width': third, 'top': '-85%', 'right': '-85%' }}
            className={`${circleStyle} ${display} opacity-80 z-20`}
        >
        </div>
        <div
            style={{ 'height': first, 'width': first, 'bottom': '-45%', 'left': '-35%' }}
            className={`${circleStyle} ${display} opacity-50 z-10`}
        >
        </div>
       <div
            style={{ 'height': second, 'width': second, 'top': '-65%', 'right': '-55%' }}
            className={`${circleStyle} ${display} opacity-50 z-10  `}
        >
        </div>

        <div className={`bg-darker h-full w-full absolute z-0 ${display}`}></div>
        </>
    );
};

export default CircleBG;