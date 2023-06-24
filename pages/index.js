import ContactText from "../components/ContactText";
import ContactButton from "../components/ContactButton";
import Link from 'next/link';

export default function Home() {
  return (
    <section>
      <Header />
    </section>
  );
}

function Header() {
  return (
    <div style={{ backgroundImage: "url(dance/index-header.jpg)",
                  backgroundSize: '100% auto',
                  backgroundRepeat: 'no-repeat',
                  width: '100vw',
                  height: '100vh',
                  contain: 'strict'}}>
        <Title />
        <ContactButton />
    </div>
  );
}

function Title() {
  return (
    <span>
      <div className="contact-text" style={{marginBottom: '20px'}}>
          <h1>Declan Rapp Theatrical Design</h1>
          <h6>-</h6>
          <h6>Lighting | Sound | Scenery</h6>
      </div>
    </span>
  )
}

