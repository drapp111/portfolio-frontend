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
        <section>
            <Header />
        </section>
        <section>
        </section>
    </>
  );
}

function Header() {
  return (
    <div className="index-header-content">
      <img src="/dance/index-header.jpg"></img>
      <div className="box-shadow"></div>
      <Title />
    </div>
  );
}

function Title() {
  return (
      <div className="title-text">
          <h1>Declan Rapp Theatrical Design</h1>
          <h6>-</h6>
          <h6>Lighting | Sound | Scenery</h6>
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

/**
export default function Page() {
    return (
        <div>
            <h1>Hello, Next.js!</h1>
            <h1>Hello, Next.js!</h1>
            <h1>Hello, Next.js!</h1>
            <h1>Hello, Next.js!</h1>
            <h1>Hello, Next.js!</h1>
        </div>
        
    )
  }
   */