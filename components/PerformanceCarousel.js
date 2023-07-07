import { Carousel } from 'flowbite-react';
import PerformanceCard from "./PerformanceCard";
import React, { Component } from "react";

export default function PerformanceCarousel() {
  const PERFORMANCE_LIST = [
    { dates: "June 23, 2023 - July 2nd, 2023", title: "The Color Purple", button_text: "Tickets", button_link: "/"}
    ,{ dates: "June 23, 2023 - July 2nd, 2023", title: "The Color Purple", button_text: "Tickets", button_link: "/"}
  ];


  return (
    <Carousel indicators={false} slide={false} className='relative w-full h-full sm:w-2/3 md:w-2/3 lg:w-1/2 xl:w-2/6'>
      {PERFORMANCE_LIST.map((card, idx) => (
                <div className='flex h-full justify-center overflow-y-auto' key={card}>
                    <PerformanceCard {...card} />
                </div>
       ))}
    </Carousel>
  )
}



