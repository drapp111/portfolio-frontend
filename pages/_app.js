import Navbar from "../components/Navbar/Navbar";
import "../styles/globals.css";
import "../styles/navbar.css";
import "../styles/performance-card.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
