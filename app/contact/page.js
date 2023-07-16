'use client'

import { useEffect } from 'react';
import { useState } from 'react';
import {Button, Spinner} from 'flowbite-react';
import {FaEnvelope, FaMasksTheater, FaPencil, FaPhone, FaLinkedin} from 'react-icons/fa6';
import { sendEmail } from './actions';
import { useForm } from "react-hook-form";

export default function Page() {

  const [submitted, setSubmitted] = useState(false)
  const [successful, setSuccessful] = useState(false)

  const { register, handleSubmit, reset, formState, formState: { errors, isSubmitSuccessful } } = useForm();

  const onSubmit = data => {
    setSubmitted(true);
    console.log(data);
    console.log('Sending')
    
    var messageData = new URLSearchParams({
      subject: "New Message from " + data.contactName,
      text: "subject: " + data.contactSubject + "\nSent from: " + data.contactEmail + "\nMessage: " + data.contactMessage + "\nReferred by: " + data.contactReference,
      html: `<div><div>Sent from: ${data.contactEmail}</div><div>Subject: ${data.contactSubject}</div><div>Message: ${data.contactMessage}</div><div>Referred by: ${data.contactReference}</div></div>`,
      to: "declanrapp@gmail.com",
      from: process.env.EMAIL
    })
    fetch('http://localhost:3001/mail-contact-form?' + messageData, {method: "POST"}).then((result) => {
      console.log(result);
      if(result.status==200) {
        console.log("We did it?");
        setSuccessful(true);
      }
      else {
        console.log("We didn't do it ):");
        return 400;
      }
    }).catch(error => console.log(error));
     
  }

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
            <div className="min-h-4/10vh h-auto max-h-6/10vh flex justify-center items-center relative w-full sm:max-w-2xl">
              <div className={`${(successful) ? 'opacity-0 z-0 delay-0' : 'opacity-100 z-10 delay-200'} absolute transition-all duration-500 flex min-h-4/10vh w-full sm:max-w-2xl p-8 border border-whitesmoke bg-eerie rounded-lg`}>
                <div className="p-8 flex flex-col h-fit w-full justify-center text-center text-whitesmoke">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-6 w-full">
                        <div className='relative'>
                          <div className='absolute inset-y-0 left-0 flex items-center pl-3.5'>
                            <FaMasksTheater fill="whitesmoke" className='w-4 h-4'/>
                          </div>
                          <input type="text" id="contactName" {...register("contactName", { required: {value: true, message : "This field is required"}})} className="flex w-full rounded-lg pl-10 p-2.5 bg-eerie text-whitesmoke border border-whitesmoke focus:border-goldenrod focus:ring-goldenrod" placeholder="Name" />
                        </div>
                        {errors.contactName?.type==='required' && <div className='alert'>This field is required</div>}
                    </div>
                    <div className="mb-6 w-full">
                        <div className='relative'>
                          <div className='absolute inset-y-0 left-0 flex items-center pl-3.5'>
                            <FaEnvelope fill="whitesmoke" className='w-4 h-4'/>
                          </div>
                          <input type="text" id="contactEmail" {...register("contactEmail", { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/})} className="flex w-full rounded-lg pl-10 p-2.5 bg-eerie text-whitesmoke border border-whitesmoke focus:border-goldenrod focus:ring-goldenrod" placeholder="Email" />
                        </div>
                        {errors.contactEmail?.type==='required' && <div className='alert'>This field is required</div>}
                        {errors.contactEmail?.type==='pattern' && <div className='alert'>Invalid email address</div>}
                    </div>
                    <div className="mb-6 w-full">
                        <div className='relative'>
                          <div className='absolute inset-y-0 left-0 flex items-center pl-3.5'>
                            <FaPencil fill="whitesmoke" className='w-4 h-4'/>
                          </div>
                          <input type="text" id="contactSubject" {...register("contactSubject", { required: true})} className="flex w-full rounded-lg pl-10 p-2.5 bg-eerie text-whitesmoke border border-whitesmoke focus:border-goldenrod focus:ring-goldenrod" placeholder="Subject" />
                        </div>
                        {errors.contactSubject?.type==='required' && <div className='alert'>This field is required</div>}
                    </div>
                    <div className="mb-6 w-full">
                        <textarea id="contactMessage" rows="4" {...register("contactMessage", { required: true})} className="flex p-2.5 w-full h-64 rounded-lg  bg-eerie text-whitesmoke border border-whitesmoke focus:border-goldenrod focus:ring-goldenrod" placeholder="Leave a comment..."></textarea>
                        {errors.contactMessage?.type==='required' && <div className='alert'>This field is required</div>}
                    </div>
                    <div className="mb-6 w-full">
                        <select id="contactReference" rows="4" defaultValue={"default"} {...register("contactReference", {validate: (value) => value !== 'default' && value !== ''}, { required: true})} className="flex p-2.5 w-full rounded-lg  bg-eerie text-whitesmoke border border-whitesmoke focus:border-goldenrod focus:ring-goldenrod">
                          <option value={"default"} disabled hidden>How did you hear about me?</option>
                          <option value={1}>Saw a performance</option>
                          <option value={2}>Word of mouth</option>
                          <option value={3}>Website</option>
                        </select>
                        {errors.contactReference && <div className='alert'>This field is required</div>}
                    </div>
                    <div className="w-full flex justify-center items-center">
                      <Button size='md' pill color="whitesmoke" onClick={handleSubmit(onSubmit)} className={`${submitted ? 'bg-goldenrod border-black text-eerie' : 'bg-eerie border-whitesmoke text-whitesmoke'} transition-all duration-500 w-1/2 border hover:border-black hover:bg-goldenrod hover:text-eerie`}>
                        {!submitted && !successful &&
                          <div className='font-subtitle text-lg'>Submit</div>  
                        }
                        {submitted &&
                          <Spinner aria-label="Sending email..." color="info" />
                        }
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
              <div className={`${(successful) ? 'opacity-100 z-10 delay-200' : 'opacity-0 z-0 delay-0'} absolute transition-all duration-500 flex min-h-1/10vh w-fit sm:w-fit p-8 border border-whitesmoke bg-eerie rounded-lg`}>
                <div className="p-8 flex flex-col h-full w-full justify-center text-center text-whitesmoke will-change-transform transform-all duration-500">
                  <div className={`${(successful) ? 'opacity-100 z-10' : 'opacity-0 z-0'} transition-all duration-500 delay-150`}>
                    <div className='flex flex-col items-center justify-center w-full'>
                        <h1 className='text-center mb-4 text-goldenrod'>Successfully Sent</h1>
                        <Button size='md' pill color="whitesmoke" onClick={() => {reset(); setSubmitted(false); setSuccessful(false)}} className='transition-all duration-500 w-full border border-whitesmoke hover:border-black bg-eerie hover:bg-goldenrod text-whitesmoke hover:text-eerie'>
                          Return to Form
                        </Button>
                    </div>
                  </div>
                </div>
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
  )
}