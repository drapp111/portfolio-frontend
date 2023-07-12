import Link from 'next/link';
import { Button, Card } from 'flowbite-react';

export default function ContactButton(props) {
    return (
        <Button href={'/about'} size='lg' pill color="whitesmoke" className="transition-all duration-1000 mt-8 bg-goldenrod hover:bg-whitesmoke text-whitesmoke hover:text-black shadow-shine-lg hover:shadow-[0_0_10px_5px_goldenrod] border border-white hover:border-black">
            Get in Touch
        </Button>
    )
}               