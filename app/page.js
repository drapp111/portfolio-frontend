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
        <section className="flex flex-col w-full">
          <PageHeader />
        </section>
        <section className="flex flex-col w-full mb-8">
          <UpcomingPerformances />
        </section>
    </>
  );
}

function PageHeader() {
  return (
    <div className="flex relative min-h-5/10vh justify-center bg-center bg-no-repeat bg-cover" style={{backgroundImage: `url(/dance/index-header.jpg)`}}>
      <Title />
    </div>
  );
}

function Title() {
  return (
      <div className="flex flex-col items-center text-center text-white absolute z-20 h-full w-full p-8 truncate shadow-inner sm:shadow-inner md:shadow-inner-md lg:shadow-inner-lg xl:shadow-inner-xl 2xl:shadow-inner-2xl">
          <h1>Declan Rapp Theatrical Design</h1>
          <h4>-</h4>
          <h4>Lighting | Sound | Scenery</h4>
          <ContactButton text = 'Contact Me'/>
      </div>
  )
}

function UpcomingPerformances() {
  return (
    <div className="flex flex-col">
      <div className="flex min-h-1/10vh justify-center items-center">
        <h2>Upcoming Performances</h2>
      </div>
      <div className="flex min-h-4/10vh h-fit justify-center">
        <PerformanceCarousel />
      </div>
    </div>
  )
}