'ise client'

//UI Components
import ContactForm from '@/components/contact/ContactForm/ContactForm';
import Image from 'next/image';
import header from '/public/pages/contact/header.jpg'

//Icons
import {FaEnvelope, FaPhone, FaLinkedin} from 'react-icons/fa6';

export default function Page() {
     
  return (
    <>
        <section className="relative flex flex-col bg-black h-fit w-full">
            
            <div className='absolute sm:h-2/3 w-full shadow-inner-md filter brightness-50 z-0 '>
                <Image src={header} fill priority={true} sizes={'40w'} alt={'Page header'} className='w-full object-cover object-center filter brightness-50 z-0' />
                <div className='absolute h-full w-full shadow-inner-md'>
                </div>
            </div>
            <div className="relative flex flex-col min-h-4/10vh sm:min-h-2/10vh w-full z-10">
                <Image src={header} fill priority={true} alt={'Page header'} className='w-full object-cover object-center filter brightness-50 z-0 sm:hidden' />
                <div className='flex shadow-inner-md sm:shadow-none items-center justify-center min-h-4/10vh sm:min-h-2/10vh sm:h-full w-full z-10'>
                    <div className='flex flex-col h-full w-full top-1/10vh sm:w-1/3 justify-center items-center p-4 z-10'>
                        <h1 className="text-4xl text-center mb-4 ">Get in Touch</h1>
                        <p className='text-whitesmoke text-center whitespace-wrap'>Please reach out if you have any questions or are interested in connecting about future performances or design projects.</p>
                    </div>
                </div>
          </div>
          <div className='min-h-4/10vh h-fit flex flex-col w-full items-center justify-evenly p-4 sm:p-0 z-10'>
            <ContactForm />
          </div>
        </section>
        <section className='flex flex-col gap-y-8 items-center landscape:flex-col sm:flex-row lg:landscape:flex-row justify-center gap-x-8 bg-black p-8 mt-8 lg:landscape:mt-4 w-full min-h-3/10vh'>
          <a href="mailto:declanrappdesign@gmail.com" target="_blank">
            <div className='flex flex-col h-72 w-72 items-center rounded-lg border border-whitesmoke justify-center p-4 group transition-all duration-1000 hover:shadow-shine hover:shadow-whitesmoke'>
              <div className='flex h-16 w-16 bg-eerie justify-center items-center rounded-lg mb-4'>
                <FaEnvelope fill="whitesmoke" className='h-1/2 w-1/2'/>
              </div>
              <h3 className='text-whitesmoke mb-4'>Email Me</h3>
              <p className='text-whitesmoke text-center opacity-50 mb-4'>Email me for any general queries or questions.</p>
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
              <p className='text-whitesmoke text-center opacity-50 mb-4'>Text or call me for any urgent projects, questions, or needs.</p>
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
              <p className='text-whitesmoke text-center opacity-50 mb-4'>Connect with me on LinkedIn!</p>
              <div href="https://linkedin.com/in/declanrapp" target="_blank" className='text-wheat hover:text-goldenrod hover:underline'>
                <p className='text-wheat hover:text-goldenrod hover:underline'>LinkedIn Profile</p>
              </div>
            </div>
          </a>
        </section>
    </>
  )
}