'use client'

//UI Components
import {Button} from 'flowbite-react';

export default function ContactButton() {
    return (
        <Button href={'/contact'} size='md' pill color="whitesmoke" className="transition-all duration-1000 mt-8 bg-goldenrod hover:bg-whitesmoke text-whitesmoke hover:text-black shadow-shine hover:shadow-sm  hover:shadow-goldenrod border border-white hover:border-black">
            Get in Touch
        </Button>
    )
}               