import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../store/slices/changeThemeSlice";
import { toggleDarkMode } from "../../store/slices/toggleDarkModeSlice";
import Themes from '../../utils/Themes';


const ButtonChangeTheme = () => {

    const theme = useSelector((state) => state.changeTheme.theme);
    const isDark = useSelector((state) => state.toggleDarkMode.toggled);
    const dispatch = useDispatch();


    // grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-3 2xl:grid-cols-6 gap-1 
    return (
        <>
            <div className='flex flex-col space-y-6' >

                {Object.keys(Themes).map(k => {
                    return (
                        <>
                            <div key={k} className='flex px-3 flex-col '>
                            <h1 className={`text-${k}-dark text-xl text-center`} > {Themes[k]}</h1>

                            <div className='flex space-x-4'>

                            <button
                                onClick={() => {
                                    dispatch(changeTheme(k));
                                    if(isDark){}
                                    else{
                                        dispatch(toggleDarkMode());
                                    }
                                }}
                            >
                                <div className={`w-[160px] max-w-[40vw] h-[100px] bg-${k}-dark border-2 border-${k}-special hover:border-4 hover:border-white  ${ k === theme && isDark === true ? 'border-8 border-white shadow-lg' : ''} `}>
                                    <div className={`w-full h-[10%] bg-${k}-nav `}></div>
                                    <div className={`w-full h-[90%] flex`}>
                                        <div className={`h-full w-[70%] flex `}>
                                            <div className={`h-[60%] w-[60%] flex flex-col bg-${k}-nav m-auto  rounded py-2 `}>
                                                <div className={`h-[30%] w-[70%] bg-${k}-special border-2 border-${k}-special  m-auto  rounded-sm  `}></div>
                                                <div className={`h-[30%] w-[70%] bg-white border-2 border-${k}-special  m-auto  rounded-sm  `}></div>
                                            </div>
                                        </div>
                                        <div className={`h-full w-[30%] bg-${k}-med `}></div>
                                    </div>
                                </div>
                            </button>


                            <button
                                onClick={() => {
                                    dispatch(changeTheme(k));
                                    if(isDark){
                                        dispatch(toggleDarkMode());
                                    }
                                }}
                            >
                                <div className={`w-[160px] max-w-[40vw] h-[100px] bg-${k}-light border-2 border-${k}-special hover:border-4 hover:border-white ${ k === theme && isDark === false ? 'border-8 border-white shadow-lg' : ''} `}>
                                    <div className={`w-full h-[10%] bg-${k}-nav `}></div>
                                    <div className={`w-full h-[90%] flex`}>
                                        <div className={`h-full w-[70%] flex `}>
                                            <div className={`h-[60%] w-[60%] flex flex-col bg-${k}-nav m-auto  rounded py-2 `}>
                                                <div className={`h-[30%] w-[70%] bg-${k}-special border-2 border-${k}-special  m-auto  rounded-sm  `}></div>
                                                <div className={`h-[30%] w-[70%] bg-white border-2 border-${k}-special  m-auto  rounded-sm  `}></div>
                                            </div>
                                        </div>
                                        <div className={`h-full w-[30%] bg-${k}-med `}></div>
                                    </div>
                                </div>
                            </button>

                            </div>
</div>
                        </>
                    )
                })}
            </div>
        </>

    );
};

export default ButtonChangeTheme;