'use client'

//UI Components
import {Carousel} from 'flowbite-react';
import PerformanceCard from "./PerformanceCard";


export default function PerformanceCarousel() {
  const PERFORMANCE_LIST = [
    { dates: "", title: "New shows TBA", button_text: "View recent", button_link: "/portfolio", image : "/pages/portfolio/godspell/godspell_34.webp"}
  ];

  const controls = PERFORMANCE_LIST.length > 1 ? null : <></>

  return (
    <Carousel indicators={false} slide={false} className='relative self-center w-full sm:w-1/2 xl:w-1/3' leftControl={controls} rightControl={controls}>
      {PERFORMANCE_LIST.map((card, idx) => (
        <div className='relative mb-8 h-64 w-48 md:h-80 md:w-60 xl:h-96 xl:w-72' key={idx}>
          <PerformanceCard {...card} />
        </div>
       ))}
    </Carousel>
  )
}



