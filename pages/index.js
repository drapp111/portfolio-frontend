import ContactText from "../components/ContactText";
import ContactButton from "../components/ContactButton";
import PerformanceCard from "../components/PerformanceCard";
import Link from 'next/link';

const background_style = {
  backgroundImage: "url(dance/index-header.jpg)",
  backgroundSize: '100% auto',
  backgroundRepeat: 'no-repeat',
  width: '100vw',
  height: '100vh',
  contain: 'strict',
}

const PERFORMANCE_LIST = [
  { dates: "June 23, 2023 - July 2nd, 2023", title: "The Color Purple", subtitle: "Presented by BLAAC", summary: "This production has a phenomenal cast and you don’t want to miss this monumental event. You’ll laugh, you’ll cry, you’ll jump to your feet with joy. Come out and enjoy this wonderful event. Opening night is a red carpet event. So put on your best red carpet attire and meet us.", button_text: "Tickets" },
  { dates: "Testing", title: "Test", subtitle: "Test", summary: "Tests.", button_text: "Test" }
];

export default function Home() {
  return (
    <section>
      <Header />
    </section>
  );
}

function Header() {
  return (
    <section>
      <div style={background_style}>
          <Title />
          <ContactButton text="Get in Touch" />
      </div>
      <div>
        <UpcomingPerformances />
      </div>
    </section>
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
      <div className="cards">
        {PERFORMANCE_LIST.map((item) => (
            <div key={item.title}>
              <PerformanceCard {...item} />
            </div>
          ))}
      </div>
    </div>
  )
}

