'use client'

//Packages
import {useState} from 'react';

//UI Components
import {Button} from 'flowbite-react';
import ReactCardFlip from "react-card-flip";

export default function CardFlip(props) {
    const [flip, setFlip] = useState(false);
    return (
        <ReactCardFlip isFlipped={flip}
            flipDirection="vertical"
            className='transition-all duration-500'>
            <div onClick={() => setFlip(!flip)} className='card experience-card front p-0 text-center'>
                <div className='flex flex-col place-content-evenly h-full text-center'>
                    <div>
                        <h4 className=" text-goldenrod text-sm font-title mb-2">
                            {props.showTitle}
                        </h4>
                        <p className=" text-whitesmoke text-mobile">{props.showDates}</p>
                    </div>
                    <Button pill size='xs' color='whitesmoke' className='transition-all self-center duration-500 hover:translate-y-1 bg-night hover:bg-whitesmoke border border-white hover:border-black text-whitesmoke hover:text-black w-24 shadow-lg hover:shadow-xs shadow-black hover:shadow-whitesmoke text-xs' onClick={() => setFlip(!flip)}>Read More</Button>
                </div>
            </div>
            <div onClick={() => setFlip(!flip)} className='flex flex-col experience-card back gap-y-0'>
                <div className='card-child h-full p-2'>
                    <div className="flex h-1/4 w-full place-content-center items-center">
                        <h4 className="text-goldenrod text-xs font-title text-center whitespace-normal">
                            {props.jobTitle}
                        </h4>
                    </div>
                    <div className="flex justify-center items-center h-1/2 w-full">
                        <p className="text-black text-mobile">{props.description}</p>
                    </div>
                    <div className="flex justify-center items-center h-1/4 w-full">
                        <Button pill size='xs' color='night' className='transition-all duration-500 hover:translate-y-1 bg-whitesmoke hover:bg-night border border-black hover:border-white text-black hover:text-whitesmoke w-24 self-center shadow-lg hover:shadow-sm shadow-jet hover:shadow-black text-xs' onClick={() => setFlip(!flip)}>Read Less</Button>
                    </div>
                </div>
            </div>
        </ReactCardFlip>
    );
}