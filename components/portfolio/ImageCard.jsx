'use client'

//UI Components
import {Button} from 'flowbite-react';

export default function PortfolioCard(props) {
    return (
    <div className='h-64 w-48 md:h-80 md:w-60 xl:h-96 xl:w-72'>
        <img src={props.image} alt={props.alt} className='object-cover object-center h-full w-full'/>
    </div>
            
    );
}
