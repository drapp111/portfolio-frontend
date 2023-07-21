'use client'

//Packages
import {Link} from 'next/link';

//UI Components
import CardFlip from "@/components/about/CardFlip";
import {Button} from 'flowbite-react';

//Page Items
import Biography from '/public/pages/about/Biography.jsx';
import {Experiences} from '/public/pages/about/ExperienceCards'


export default function Page() {
  return (
    <>
        <section className="flex flex-col max-h-min sm:flex-row justify-center w-full">
            <div className="flex bg-cover bg-no-repeat bg-top w-full min-h-4/10vh shadow-inner-md items-center justify-center" style={{backgroundImage: `url(/pages/about/header.jpg)`}} >
                <h1 className="sm:hidden text-4xl">About Me</h1>
            </div>
            <div className="relative flex flex-col p-0 sm:p-8 gap-y-4 w-full h-1/2 sm:h-full">
                <div className="hidden h-2/10 mb-4 sm:flex items-center justify-center text-center">
                    <h1>About Me</h1>
                </div>
                <div className="flex flex-col h-fit sm:h-8/10 items-start justify-center text-center text-whitesmoke overflow-y-auto">
                    <Biography />
                </div>
            </div>
        </section>
        <section className="flex flex-col sm:gap-y-4 bg-black sm:flex-col p-8 justify-evenly w-full">
            <div className="flex flex-col place-items-center text-center sm: mb-8 xl:mb-16">
                <h1>Select Experience</h1>
            </div>
            <div className="flex p-4 justify-center w-full">
                <div className="flex flex-row gap-x-16 gap-y-8 justify-center items-center flex-wrap max-w-[69rem]">
                    {Experiences.map((card, idx) => (
                        <div key={idx}>
                            <CardFlip {...card} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col self-center mt-16 sm:mt-0">
                <h2 className="mb-8 text-center">Full Design Resume</h2>
                <Button as={Link} href={'/pages/about/resume.pdf'} target={'_blank'} pill size='sm' color="whitesmoke"  className='transition-all self-center duration-500 hover:translate-y-1 bg-night hover:bg-whitesmoke border border-white hover:border-black text-whitesmoke hover:text-black w-36 shadow-md hover:shadow-xs shadow-whitesmoke hover:shadow-sm text-xs'>Download</Button>
            </div>
        </section>
    </>
  );
}