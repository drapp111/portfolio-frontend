import Navbar from "../components/Navbar/Navbar";
import "../styles/globals.css";
import "../styles/navbar.css";
import "../styles/index/performance-card.css";
import "../styles/index/index.css";
import "../styles/carousel.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
