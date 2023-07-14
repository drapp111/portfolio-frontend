'use client'

import { useState } from 'react';
import {Button} from 'flowbite-react';
import {FaEnvelope, FaMasksTheater, FaPencil, FaPhone, FaLinkedin} from 'react-icons/fa6';
import { sendEmail } from './actions';


function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [reference, setReference] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Sending')
    var data = {
      subject: "Test",
      text: "I am sending an email from nodemailer!",
      to: "declanrapp@gmail.com",
      from: process.env.EMAIL
    }
    sendEmail(data).then((result) => {
      if(result==200) {
        console.log("We did it?");
        setSubmitted(true);
      }
      else {
        console.log("We didn't do it ):");
      }
    }).catch(error => console.log(error));
  }

  return (
    <>
      <div className="mb-6 w-full">
          <div className='relative'>
            <div className='absolute inset-y-0 left-0 flex items-center pl-3.5'>
              <FaMasksTheater fill="whitesmoke" className='w-4 h-4'/>
            </div>
            <input type="text" id="contact-name" onChange={(e)=>{setName(e.target.value)}} className="flex w-full rounded-lg pl-10 p-2.5 bg-eerie text-whitesmoke border border-whitesmoke focus:border-goldenrod focus:ring-goldenrod" placeholder="Name" />
          </div>
      </div>
      <div className="mb-6 w-full">
          <div className='relative'>
            <div className='absolute inset-y-0 left-0 flex items-center pl-3.5'>
              <FaEnvelope fill="whitesmoke" className='w-4 h-4'/>
            </div>
            <input type="text" id="contact-email" onChange={(e)=>{setEmail(e.target.value)}} className="flex w-full rounded-lg pl-10 p-2.5 bg-eerie text-whitesmoke border border-whitesmoke focus:border-goldenrod focus:ring-goldenrod" placeholder="Email" />
          </div>
      </div>
      <div className="mb-6 w-full">
          <div className='relative'>
            <div className='absolute inset-y-0 left-0 flex items-center pl-3.5'>
              <FaPencil fill="whitesmoke" className='w-4 h-4'/>
            </div>
            <input type="text" id="contact-subject" onChange={(e)=>{setSubject(e.target.value)}} className="flex w-full rounded-lg pl-10 p-2.5 bg-eerie text-whitesmoke border border-whitesmoke focus:border-goldenrod focus:ring-goldenrod" placeholder="Subject" />
          </div>
      </div>
      <div className="mb-6 w-full">
          <textarea id="contact-message" rows="4" onChange={(e)=>{setMessage(e.target.value)}} className="flex p-2.5 w-full h-64 rounded-lg  bg-eerie text-whitesmoke border border-whitesmoke focus:border-goldenrod focus:ring-goldenrod" placeholder="Leave a comment..."></textarea>
      </div>
      <div className="mb-6 w-full">
          <select id="contact-dropdown" rows="4" defaultValue={"default"} onChange={(e)=>{setReference(e.target.value)}} className="flex p-2.5 w-full rounded-lg  bg-eerie text-whitesmoke border border-whitesmoke focus:border-goldenrod focus:ring-goldenrod">
            <option value={"default"} disabled hidden>How did you hear about me?</option>
            <option>Saw a performance</option>
            <option>Word of mouth</option>
            <option>Website</option>
          </select>
      </div>
      <div className="w-full flex justify-center items-center">
        <Button size='md' pill color="whitesmoke" onClick={(e)=>{handleSubmit(e)}} className='transition-all duration-500 w-1/2 border border-whitesmoke hover:border-black bg-eerie hover:bg-goldenrod text-whitesmoke hover:text-eerie'>
          Submit
        </Button>
      </div>
    </>
  )
}

export default function Page() {

  return (
    <>
        <section className="relative flex flex-col bg-black w-full items-center">
          <div className="relative flex flex-col justify-center shadow-inner-lg sm:absolute min-h-4/10vh max-h-5/10vh w-full" >
            <div className='absolute bg-cover bg-center bg-[url("/cls/contact-header-2.JPG")] min-h-4/10vh max-h-5/10vh w-full shadow-inner-md filter brightness-50'>
            </div>
            <div className='flex flex-col h-full w-full justify-center items-center p-4 z-10'>
                <h1 className="text-4xl text-center mb-4 sm:hidden">Get in Touch</h1>
                <p className='text-whitesmoke text-center whitespace-wrap sm:hidden'>We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
            </div>
          </div>
          <div className='flex flex-col h-full w-full items-center justify-evenly min-h-6/10vh'>
            <div className='relative hidden sm:flex flex-col justify-evenly items-center p-4 sm:w-1/3 mb-8'>
                <h1 className="text-4xl text-center mb-4">Get in Touch</h1>
                <p className='text-whitesmoke text-center whitespace-wrap'>We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
            </div>
            <div className="relative flex min-h-4/10vh w-full sm:max-w-2xl p-8 border border-whitesmoke bg-eerie rounded-lg">
              <div className="flex flex-col h-fit w-full justify-center text-center text-whitesmoke">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
        <section className='flex flex-col gap-y-4 items-center sm:flex-row justify-evenly bg-black p-8 w-full min-h-3/10vh'>
          <a href="mailto:declanrapp@gmail.com" target="_blank">
            <div className='flex flex-col h-72 w-72 items-center rounded-lg border border-whitesmoke justify-center p-4 group transition-all duration-1000 hover:shadow-shine hover:shadow-whitesmoke'>
              <div className='flex h-16 w-16 bg-eerie justify-center items-center rounded-lg mb-4'>
                <FaEnvelope fill="whitesmoke" className='h-1/2 w-1/2'/>
              </div>
              <h3 className='text-whitesmoke mb-4'>Email Me</h3>
              <p className='text-whitesmoke text-center opacity-50 mb-4'>Email us for general queries, including marketing and partnership opportunities.</p>
              <div href="mailto:declanrapp@gmail.com" target="_blank" className='text-wheat hover:text-goldenrod hover:underline'>
                <p className='text-wheat hover:text-goldenrod hover:underline'>declanrapp@gmail.com</p>
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
  );
}