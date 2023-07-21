//UI Components
import Navbar from "../components/site/Navbar/Navbar";
import MobileNavbar from "../components/site/Navbar/MobileNavbar";
import PageFooter from "../components/site/Footer";

//Styles
import '../globals.css'

export const metadata = {
  title: 'Declan Rapp Theatrical Design',
  description: 'Theatrical Design Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-black'>
        <header>
          <Navbar />
        </header>
        <main>
          {children}
        </main>
        <footer>
          <PageFooter />
          <MobileNavbar />
        </footer>
      </body>
    </html>
  )
}
