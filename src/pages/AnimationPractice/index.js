import React, { useLayoutEffect, useRef, useState } from "react";


const AnimationPractice = () => {


    const [show, doShow] = useState({
        itemOne: false,
        itemTwo: false,
        itemThree: false
    });

    const ourRef = useRef(null),
        anotherRef = useRef(null),
        refThree = useRef(null);

    useLayoutEffect(() => {
        const topPos = (element) => element.getBoundingClientRect().top;
        const div1Pos = topPos(ourRef.current),
            div2Pos = topPos(anotherRef.current),
            div3Pos = topPos(refThree.current);

        const onScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight;
            if (div1Pos < (scrollPos + 25)) {
                doShow((state) => ({ ...state, itemOne: true }));
            } else if (div2Pos < (scrollPos + 25)) {
                doShow((state) => ({ ...state, itemTwo: true }));
            } else if (div3Pos < (scrollPos + 25)) {
                doShow((state) => ({ ...state, itemThree: true }));
            }

        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);


    }, [refThree]);

    const divClass = "h-[900px] w-[300px] bg-[#fc6] m-5 ";
    
    return (
        <>
            <p>scroll down</p>
            <div className="mt-[120vh] flex flex-col items-center">
                <div 
                    className={` ${divClass} ${show.itemThree ? 'animate-slide  ' : ''  } `}
                    ref={refThree}
                    zIndex={3}
                >
                    <p>tag here</p>
                    <p>tag here</p>
                    <p>tag here</p>
                    <p>tag here</p>
                </div>
                <div 
                    className={` ${divClass} ${show.itemTwo ? 'animate-slide  ' : '' } `}
                    ref={anotherRef}
                    zIndex={2}
                ></div>
                <div 
                    className={` ${divClass} ${show.itemOne ? 'animate-slide  ' : ''  } `}
                    ref={ourRef}
                    zIndex={1}
                ></div>
            </div>
        </>
    );
};

export default AnimationPractice;
