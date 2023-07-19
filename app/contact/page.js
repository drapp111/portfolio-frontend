import {FaEnvelope, FaPhone, FaLinkedin} from 'react-icons/fa6';
import ContactForm from '@/components/ContactForm/ContactForm';

export default function Page() {
     
  return (
    <>
        <section className="relative flex flex-col bg-black h-fit w-full">
          <div className='bg-cover bg-center bg-[url("/cls/contact-header-2.JPG")] absolute sm:h-2/3 w-full shadow-inner-md filter brightness-50 z-0'></div>
          <div className="flex flex-col min-h-2/10vh w-full z-10 bg-cover bg-center bg-[url('/cls/contact-header-2.JPG')] shadow-inner-md filter sm:bg-none sm:shadow-none">
            <div className='flex flex-col h-full w-full p-16 items-center justify-center backdrop-brightness-50 sm:backdrop-brightness-100'>
              <div className='flex flex-col h-full w-full top-1/10vh sm:w-1/3 justify-center items-center p-4 z-10'>
                  <h1 className="text-4xl text-center mb-4 ">Get in Touch</h1>
                  <p className='text-whitesmoke text-center whitespace-wrap'>We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
              </div>
            </div>
          </div>
          <div className='min-h-4/10vh h-fit flex flex-col w-full items-center justify-evenly p-4 sm:p-0 z-10'>
            <ContactForm />
          </div>
        </section>
        <section className='flex flex-col gap-y-4 items-center landscape:flex-col sm:flex-row lg:landscape:flex-row justify-center gap-x-8 bg-black p-8 mt-8 lg:landscape:mt-0 w-full min-h-3/10vh'>
          <a href="mailto:declanrappdesign@gmail.com" target="_blank">
            <div className='flex flex-col h-72 w-72 items-center rounded-lg border border-whitesmoke justify-center p-4 group transition-all duration-1000 hover:shadow-shine hover:shadow-whitesmoke'>
              <div className='flex h-16 w-16 bg-eerie justify-center items-center rounded-lg mb-4'>
                <FaEnvelope fill="whitesmoke" className='h-1/2 w-1/2'/>
              </div>
              <h3 className='text-whitesmoke mb-4'>Email Me</h3>
              <p className='text-whitesmoke text-center opacity-50 mb-4'>Email us for general queries, including marketing and partnership opportunities.</p>
              <div href="mailto:declanrappdesign@gmail.com" target="_blank" className='text-wheat hover:text-goldenrod hover:underline'>
                <p className='text-wheat hover:text-goldenrod hover:underline'>declanrappdesign@gmail.com</p>
              </div>
            </div>
          </a>
          <a href="tel:7162003595" target="_blank">
            <div className='flex flex-col h-72 w-72 items-center rounded-lg border border-whitesmoke justify-center p-4 group transition-all duration-1000 hover:shadow-shine hover:shadow-whitesmoke'>
              <div className='flex h-16 w-16 bg-eerie justify-center items-center rounded-lg mb-4'>
                <FaPhone fill="whitesmoke" className='h-1/2 w-1/2'/>
              </div>
              <h3 className='text-whitesmoke mb-4'>Call Me</h3>
              <p className='text-whitesmoke text-center opacity-50 mb-4'>Email us for general queries, including marketing and partnership opportunities.</p>
              <div href="tel:declanrapp@gmail.com" target="_blank" className='text-wheat hover:text-goldenrod hover:underline'>
                <p className='text-wheat hover:text-goldenrod hover:underline'>(716) 200-3595</p>
              </div>
            </div>
          </a>
          <a href="https://linkedin.com/in/declanrapp" target="_blank">
            <div className='flex flex-col h-72 w-72 items-center rounded-lg border border-whitesmoke justify-center p-4 group transition-all duration-1000 hover:shadow-shine hover:shadow-whitesmoke'>
              <div className='flex h-16 w-16 bg-eerie justify-center items-center rounded-lg mb-4'>
                <FaLinkedin fill="whitesmoke" className='h-1/2 w-1/2'/>
              </div>
              <h3 className='text-whitesmoke mb-4'>Connect with Me</h3>
              <p className='text-whitesmoke text-center opacity-50 mb-4'>Email us for general queries, including marketing and partnership opportunities.</p>
              <div href="https://linkedin.com/in/declanrapp" target="_blank" className='text-wheat hover:text-goldenrod hover:underline'>
                <p className='text-wheat hover:text-goldenrod hover:underline'>LinkedIn Profile</p>
              </div>
            </div>
          </a>
        </section>
    </>
  )
}