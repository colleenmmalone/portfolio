import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../store/slices/changeThemeSlice";
import Themes from '../../utils/Themes';

const ButtonChangeTheme = () => {

    const theme = useSelector((state) => state.changeTheme.theme);
    const dispatch = useDispatch();

    return (
        <>
            <div className='flex space-y-3 lg:space-y-0 flex-col lg:flex-row px-12'>
                {Object.keys(Themes).map(k => {
                    const primary = `bg-${k}-special text-white`;
                    const secondary = `text-${k}-special bg-white`;
                    return (
                        <div key={k} className='m-auto'>
                            <button
                                className={`border-[3px] border-${k}-special 
                                ${theme === k ? primary : secondary} 
                                rounded-lg px-4 py-2 m-auto lg:mx-3`}
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