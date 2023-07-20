'use client'

//UI Components
import {Button} from 'flowbite-react';

export default function PortfolioCard(props) {
    return (
    <div className='card experience-card bg-eerie p-0 text-center h-64 w-48 md:h-80 md:w-60 xl:h-96 xl:w-72'>
        <img src={props.image} alt={props.title + ". " + props.dates} className=''/>
        <div className='flex flex-col relative items-center justify-center h-full text-center p-2 sm:p-4'>
            <div className='mb-4 h-2/3'>
                <h1 className="text-goldenrod text-base md:text-lg xl:text-2xl font-title mb-2 whitespace-normal">
                    {props.title}
                </h1>
                <p className=" text-whitesmoke text-mobile md:text-xs xl:text-sm">{props.dates}</p>
            </div>
            <Button pill size='xs' color='whitesmoke' className='transition-all self-center duration-500 hover:translate-y-1 bg-night hover:bg-whitesmoke border border-white hover:border-black text-whitesmoke hover:text-black w-24 shadow hover:shadow-sm shadow-whitesmoke hover:shadow-whitesmoke text-xs'>See More</Button>
        </div>
    </div>
            
    );
}
