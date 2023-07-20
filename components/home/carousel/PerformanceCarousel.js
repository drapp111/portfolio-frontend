'use client'

//UI Components
import {Carousel} from 'flowbite-react';
import PerformanceCard from "./PerformanceCard";

export default function PerformanceCarousel() {
  const PERFORMANCE_LIST = [
    { dates: "June 23, 2023 - July 2nd, 2023", title: "The Color Purple", button_text: "Tickets", button_link: "/"}
    ,{ dates: "June 23, 2023 - July 2nd, 2023", title: "The Color Purple", button_text: "Tickets", button_link: "/"}
  ];


  return (
    <Carousel indicators={false} slide={false} className='relative self-center w-full sm:w-1/2 xl:w-1/3'>
      {PERFORMANCE_LIST.map((card, idx) => (
        <div className='relative mb-8 h-64 w-48 md:h-80 md:w-60 xl:h-96 xl:w-72' key={idx}>
          <PerformanceCard {...card} />
        </div>
       ))}
    </Carousel>
  )
}



