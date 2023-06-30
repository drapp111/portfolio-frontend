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
    <section>
      <Header />
      <UpcomingPerformances />
    </section>
  );
}

function Header() {
  return (
    <div className='index-header'>
        <div className="index-header content"></div>
        <img src="/dance/index-header.jpg"></img>
        <Title />
        <ContactButton text="Get in Touch" />
    </div>
  );
}

function Title() {
  return (
    <span>
      <div className="title-text" style={{marginBottom: '20px'}}>
          <h1>Declan Rapp Theatrical Design</h1>
          <h6>-</h6>
          <h6>Lighting | Sound | Scenery</h6>
      </div>
    </span>
  )
}

function UpcomingPerformances() {
  return (
    <div className="performance-section">
      <div className="section-title">
        <h3 style={{color:"goldenrod"}}>Upcoming Performances</h3>
      </div>  
      <PerformanceCarousel/>
    </div>
  )
}

