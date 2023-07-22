'use client';

//Packages
import {Link} from 'next/link';

//UI Components
import {Button} from 'flowbite-react';
import Image from 'next/image';

export default function PerformanceCard(props) {
    return (
        <div className='w-full h-full card performance-card'>
            <div className='relative w-full h-full'>
                <Image src={props.image} fill sizes={'50vw'} alt={props.title + " " + props.dates} className='object-cover object-center'/>
            </div>
            <div className='card-child rounded-b-lg'>
                <h5 className='text-goldenrod text-xl'>
                    {props.title}
                </h5>
                <p className='text-whitesmoke text-xs mb-4'>{props.dates}</p>
                <Button as={Link} href={props.button_link} target={"_blank"} pill size='xs' color='whitesmoke' className='transition-all self-center duration-500 hover:translate-y-1 bg-night hover:bg-whitesmoke border border-white hover:border-black text-whitesmoke hover:text-black w-24 shadow hover:shadow-sm shadow-whitesmoke hover:shadow-whitesmoke text-xs'>{props.button_text}</Button>
            </div>
        </div>
    )
}