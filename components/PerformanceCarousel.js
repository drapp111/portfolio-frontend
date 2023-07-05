import { Carousel } from 'flowbite-react';
import PerformanceCard from "./PerformanceCard";
import React, { Component } from "react";

export default function PerformanceCarousel() {
  const PERFORMANCE_LIST = [
    { dates: "June 23, 2023 - July 2nd, 2023", title: "The Color Purple", button_text: "Tickets", button_link: ""}
    ,{ dates: "Dates", title: "Test", button_text: "Tickets", button_link: ""}
  ];


  return (
    <Carousel indicators={false} slide={false}>
      {PERFORMANCE_LIST.map((card, idx) => (
                <div className='flex min-h-36 h-44 w-28 sm:h-48 sm:w-32 md:h-60 md:w-44 lg:h-72 lg:w-56 items-center justify-center' key={card}>
                    <PerformanceCard {...card} />
                </div>
       ))}
    </Carousel>
  )
}



