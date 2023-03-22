import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../store/slices/changeThemeSlice";
import Themes from '../../utils/Themes';

const ButtonChangeTheme = () => {
    // console.log(key)

    const theme = useSelector((state) => state.changeTheme.theme);
    const dispatch = useDispatch();

    // const primary = `bg-${key}-special text-white`;
    // const secondary = `text-${key}-special bg-white`;

    return (
        <>
            <div className='flex space-x-5 px-12'>
                {Object.keys(Themes).map(k => {
                    const primary = `bg-${k}-special text-white`;
                    const secondary = `text-${k}-special bg-white`;
                    return (
                        <div key={k}>
                            <button
                                className={`border-[3px] border-${k}-special 
                                ${theme === k ? primary : secondary} 
                                rounded-lg px-4 py-2 my-auto`}
                                onClick={() => {
                                    dispatch(changeTheme(k));
                                }}
                            >
                                {Themes[k]}
                            </button>
                        </div>
                    )
                })}
            </div>
        </>

    );
};

export default ButtonChangeTheme;