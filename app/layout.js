//UI Components
import Navbar from "../components/site/Navbar/Navbar";
import MobileNavbar from "../components/site/Navbar/MobileNavbar";
import PageFooter from "../components/site/Footer";

//Styles
import '../globals.css'

export const metadata = {
  title: 'Declan Rapp Theatrical Design',
  description: 'Theatrical Design Portfolio',
  generator: 'Next.js',
  applicationName: 'Portfolio Site',
  keywords: ['Next.js', 'React', 'JavaScript', 'lighting design', 'theater', 'theatre', 'design'],
  colorScheme: 'dark',
  creator: 'Declan Rapp',
  publisher: 'Declan Rapp',
  metadataBase: new URL('https://declanrappdesign.com'),
  alternates: {
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
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
