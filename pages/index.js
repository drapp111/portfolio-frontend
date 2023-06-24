import ContactText from "../components/ContactText";

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
                  backgroundPosition: 'center',
                  backgroundSize: '100% auto',
                  backgroundRepeat: 'no-repeat',
                  width: '100vw',
                  height: '100vh'}}>
        <ContactText />
    </div>
  );
}

