'use client'

//Packages
import {useState, useEffect} from 'react';
import {useForm} from "react-hook-form";

//UI Components
import {Button, Spinner} from 'flowbite-react';

//Server Components
import {getReferenceOptions, submitForm} from './formActions.js'

//Icons
import {FaEnvelope, FaMasksTheater, FaPencil} from 'react-icons/fa6';


export default function ContactForm() {

    const { register, handleSubmit, reset, formState, formState: { errors, isSubmitSuccessful } } = useForm();

    const [submitted, setSubmitted] = useState(false)
    const [successful, setSuccessful] = useState(false)
    const [failed, setFailed] = useState(false)
    const [formLoading, setFormLoading] = useState(false)
    const [referenceContent, setReferenceContent] = useState([])

    useEffect(() => {
        const loadReferences = async () => {
            setFormLoading(true);
            const reference_options = await getReferenceOptions();
            setReferenceContent(reference_options);
            setFormLoading(false);

        }
        loadReferences()
    }, [])

    const onSubmit = data => {
        setSubmitted(true);
        var sent = submitForm(data, referenceContent);
        if(sent) {
            setSuccessful(true);
        } else {
            setFailed(true);
        }
    }

    return (
        <div className="flex justify-center items-center relative w-full h-fit sm:max-w-2xl">
            <div className={`${(successful || formLoading || failed) ? 'opacity-0 z-0 delay-0' : 'opacity-100 z-10 delay-200'} relative transition-all duration-500 flex h-fit w-full sm:max-w-2xl p-2 sm:p-8 border border-whitesmoke bg-eerie rounded-lg`}>
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
                                {!formLoading ? (
                                referenceContent.map((row, idx) => (
                                    <option key={idx} value={row.id}>{row.reference_name}</option>
                                ))) : <></> }
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
            <div className={`${(failed && !formLoading) ? 'opacity-100 z-10 delay-200' : 'opacity-0 z-0 delay-0'} absolute transition-all duration-500 flex min-h-1/10vh w-fit p-8 border border-whitesmoke bg-eerie rounded-lg`}>
                <div className="p-8 flex flex-col h-full w-full justify-center text-center text-whitesmoke will-change-transform transform-all duration-500">
                    <div className={`${(failed) ? 'opacity-100 z-10' : 'opacity-0 z-0'} transition-all duration-500 delay-150`}>
                        <div className='flex flex-col items-center justify-center w-full'>
                            <h1 className='text-center mb-4 text-goldenrod'>Form failed to send</h1>
                            <h4 className='text-center mb-4 text-whitesmoke'>Please try again later</h4>
                            <Button size='md' pill color="whitesmoke" onClick={() => {reset(); setSubmitted(false); setSuccessful(false); setFailed(false)}} className='transition-all duration-500 w-full border border-whitesmoke hover:border-black bg-eerie hover:bg-goldenrod text-whitesmoke hover:text-eerie'>
                                Return to Form
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${(successful && !formLoading) ? 'opacity-100 z-10 delay-200' : 'opacity-0 z-0 delay-0'} absolute transition-all duration-500 flex min-h-1/10vh w-fit p-8 border border-whitesmoke bg-eerie rounded-lg`}>
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
            <div className={`${(formLoading) ? 'opacity-100 z-10 delay-200' : 'opacity-0 z-0 delay-0'} absolute transition-all duration-500 flex min-h-1/10vh w-fit p-8 border border-whitesmoke bg-eerie rounded-lg`}>
                <div className="p-8 flex flex-col h-full w-full justify-center text-center text-whitesmoke will-change-transform transform-all duration-500">
                    <div className={`${(formLoading) ? 'opacity-100 z-10' : 'opacity-0 z-0'} transition-all duration-500 delay-150`}>
                        <div className='flex flex-col items-center justify-center w-full '>
                            <h1 className='text-center mb-4 text-goldenrod'>Loading...</h1>
                            <Spinner size='xl' aria-label="Form loading..."/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}