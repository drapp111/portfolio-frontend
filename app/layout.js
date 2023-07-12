import '../globals.css'
import Navbar from "../components/Navbar/Navbar";
import MobileNavbar from "../components/MobileNavbar";
import PageFooter from "../components/Footer";

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
