'use client'

//Packages
import {useState} from 'react';

//UI Components
import lensImage from '/public/pages/about/lens1.png';
import {Button} from 'flowbite-react';
import Image from 'next/image';

export default function CardLens(props) {
    const [lens, setLens] = useState(true);
    return (
        <div className='relative flex h-96 w-96 md:h-[30rem] md:w-[30rem] xl:h-[36rem] xl:w-[36rem] -left-[.35rem] items-center justify-center'>
            <Image fill src={lensImage} className='z-0'/>
            <div id="base" className={`z-0 relative lens h-[13.25rem] w-[13.25rem] md:h-[16.56rem] md:w-[16.56rem] xl:h-[19.87rem] xl:w-[19.87rem] left-1 md:left-[.35rem] bg-black border border-white items-center justify-center flex`}>
                
                <button id="off" onClick={() => setLens(true)} className={`${!lens ? 'opacity-100 z-20 delay-3000 duration-1000' : 'opacity-0 z-10 duration-1500'} transition-all ease-in-out absolute lens h-full w-full bg-black`}>
                        <h4 className=" text-goldenrod text-lg md:text-xl xl:text-3xl font-title mb-2">
                            {props.showTitle}
                        </h4>
                        <p className=" text-whitesmoke text-mobile md:text-xs xl:text-sm">{props.showDates}</p>
                </button>
                <button id='on' onClick={() => setLens(false)} className={`${lens ? 'opacity-75 z-20 delay-1500' : 'opacity-0 z-10'} whitespace-normal transition-all ease-in-out duration-3000 lens h-full w-full absolute shadow-shine-lens shadow-[#45340a] bg-gradient-radial from-[#AE8419] to-[#45340a]`}>
                    <div className="flex h-1/4 w-full place-content-center items-center">
                        <h4 className="text-black text-base md:text-lg xl:text-xl font-title text-center whitespace-pre">
                            {props.jobTitle}
                        </h4>
                    </div>
                    <div className="flex justify-center items-center h-1/2 w-full p-4">
                        <p className="text-black text-mobile md:text-[.65rem] xl:text-xs">{props.description}</p>
                    </div>
                </button>
            </div>
           
        </div>
    );
}
/**<button id="off" onClick={() => setLens(true)} className={`${!lens ? 'opacity-100 z-20 delay-2500' : 'opacity-0 z-10 '} transition-all ease-in-out duration-3000 absolute left-[24%] lens h-[210px] w-[210px] bg-black `}>

</button>
<button id='on' onClick={() => setLens(false)} className={`${lens ? 'opacity-100 z-20 delay-150' : 'opacity-0 z-10'} transition-all ease-in-out duration-3000 left-[24%] lens h-[210px] w-[210px] absolute lens  shadow-shine-lens shadow-[#45340a] bg-gradient-radial from-[#AE8419] to-[#45340a]`}>

</button> */
