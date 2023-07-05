'use client'

import ContactButton from "../components/ContactButton";
import PerformanceCarousel from "../components/PerformanceCarousel";

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
        <section className="min-h-fit h-1/2 w-full overflow-clip">
          <PageHeader />
        </section>
        <section className="min-h-fit h-1/2 w-full">
          <UpcomingPerformances />
        </section>
    </>
  );
}

function PageHeader() {
  return (
    <div className="flex relative h-full justify-center z-0">
      <img className='h-full w-full object-cover object-center z-10' src="/dance/index-header.jpg"></img>
      <Title />
    </div>
  );
}

function Title() {
  return (
      <div className=" text-center text-white absolute z-20 h-full w-full p-8 landscape:p-2 landscape:lg:p-8 truncate shadow-inner sm:shadow-inner md:shadow-inner-md lg:shadow-inner-lg xl:shadow-inner-xl 2xl:shadow-inner-2xl">
          <h1>Declan Rapp Theatrical Design</h1>
          <h4>-</h4>
          <h4>Lighting | Sound | Scenery</h4>
          <ContactButton text = 'Contact Me'/>
      </div>
  )
}

function UpcomingPerformances() {
  return (
    <div className=" flex flex-col relative w-full h-full items-center">
      <div className=" flex h-2/10 w-full justify-center items-center">
        <h3>Upcoming Performances</h3>
      </div>
      <div className="flex min-h-fit h-full w-full items-center justify-center">
        <div className="flex relative w-full h-full min-h-36 sm:h-2/3 sm:w-2/3 md:h-5/6 md:w-3/6 xl:w-2/6 2xl:1/6">
          <PerformanceCarousel/>
        </div>
      </div>
      
    </div>
  )
}