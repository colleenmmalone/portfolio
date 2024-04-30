import React from 'react';
import { Link } from 'react-router-dom';

const GalleryCard = ({ p, i }) => {

    return (
        <Link
            to={p.to}
            target="_blank" rel="noopener noreferrer" key={`project${i}`}
            className={`rounded-[12px] overflow-hidden px-0 max-w-[400px] w-full md:max-w-[800px] mx-auto relative flex flex-col md:flex-row`}>

            <div className={`w-full h-auto md:h-full w-full z-20 ${p.bg}`}>
                <img src={p.img} alt={p.alt} className="w-full lg:opacity-90 hover:opacity-100" />
            </div>

            <div className="m-0 w-full mx-auto z-20 py-[30px] px-[20px] space-y-[4px] flex-grow">
                <h1 className={`text-[24px] hover:underline fw-500`} >{p.title}</h1>
                <h1 className={`text-[18px] opacity-80 pb-[16px] font-karla`} >{p.tech}</h1>

                {/* summary  */}
                <div className="space-y-3 font-neutral">
                    {p.paragraphs?.map((t, d) => {
                        return (
                            <p className={` text-[18px] leading-tight`} key={`paragraph${i}-${d}`}>{t}</p>
                        )
                    })}
                </div>
            </div>

            {/* translucent background  */}
            <div className='bg-darkest opacity-50 absolute h-full w-full z-10'></div>

        </Link>
    );
};

export default GalleryCard;