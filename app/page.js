'use client'

import ContactText from "../components/ContactText";
import ContactButton from "../components/ContactButton";
import PerformanceCarousel from "../components/PerformanceCarousel";
import Link from 'next/link';

const background_style = {
  backgroundImage: "url(dance/index-header.jpg)",
  backgroundSize: '100% auto',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '100vh',
  contain: 'strict',
}

export default function Home() {
  return (
    <>
        <section className="max-h-1/2 w-full border-8 border-blue overflow-clip">
          <PageHeader />
        </section>
        <section className="h-1/2 w-full border-8 border-blue">
          
        </section>
    </>
  );
}

function PageHeader() {
  return (
    <div className="flex flex-col relative top-0 w-full h-full justify-center z-0">
      <img className='relative h-full w-full object-cover object-center z-10' src="/dance/index-header.jpg"></img>
      <div className="absolute border-2 border-purple h-full w-full sm:shadow-inner md:shadow-inner-md lg:shadow-inner-lg xl:shadow-inner-xl 2xl:shadow-inner-2xl h-full w-full z-20"></div>
      <Title />
    </div>
  );
}

function Title() {
  return (
      <div className="text-center text-white absolute z-20 h-full w-full p-8 truncate">
          <h1 className="text-lg text-whitesmoke 2xl:text-6xl xl:text-4xl lg:text-2xl md:text-xl sm:text-lg">Declan Rapp Theatrical Design</h1>
          <h6 className="text-sm text-whitesmoke 2xl:text-2xl xl:text-xl lg:text-md md:text-base sm:text-sm">-</h6>
          <h6 className="text-whitesmoke text-sm  2xl:text-2xl xl:text-xl lg:text-md md:text-base sm:text-sm">Lighting | Sound | Scenery</h6>
          <ContactButton text = 'Contact Me'/>
      </div>
  )
}

function UpcomingPerformances() {
  return (
    <>
      <div className="section-title">
        <h3 style={{color:"goldenrod"}}>Upcoming Performances</h3>
      </div>  
      <PerformanceCarousel/>
    </>
  )
}