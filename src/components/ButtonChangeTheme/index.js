import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../store/slices/changeThemeSlice";
import Themes from '../../utils/Themes';

const ButtonChangeTheme = () => {

    const theme = useSelector((state) => state.changeTheme.theme);
    const dispatch = useDispatch();

    return (
        <>
            <div className='
            
            grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-3 2xl:grid-cols-6 gap-1 
            '>
                {Object.keys(Themes).map(k => {
                    const primary = `bg-${k}-special text-white`;
                    const secondary = `text-${k}-special bg-white`;
                    return (
                        <div key={k} className=' w-[160px] xl:w-[170px] h-[120px] flex px-3'>
                            <button
                                className={`border-[3px] border-${k}-special 
                                ${theme === k ? primary : secondary} 
                                rounded-xl  
                                w-full 
                                text-[20px] lg:text-[25px]
                                px-1
                                `}
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