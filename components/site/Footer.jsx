'use client'

//UI Components
import { TypeAnimation } from 'react-type-animation';
import { Footer } from 'flowbite-react';
import Link from 'next/link'

//Icons
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaReact } from 'react-icons/fa';
import {SiNextdotjs} from 'react-icons/si';
import {BiLogoTailwindCss} from 'react-icons/bi'

export default function PageFooter() {

    return (

        <div className="bg-night bottom-0 flex w-full h-fit shadow-footer shadow-gray z-50 rounded-t-lg transition-all duration-200">
            <Footer container className='bg-night items-center lg:justify-normal pt-3'>
                <div className="w-full flex flex-col justify-center items-center sm:flex-row sm:items-center sm:justify-between mb-2">
                    <a href='/' className='mb-4 hidden items-center justify-center lg:flex lg:flex-row sm:mb-0'>
                        <img alt='Declan Rapp Theatrical Design Logo' src='/assets/logo.webp' className='flex mr-0 sm:mr-3 h-12 sm:h-24' />
                        <span className='self-center whitespace-nowrap text-lg sm:text-2xl font-semibold text-whitesmoke dark:text-whitesmoke'>
                            <TypeAnimation
                                sequence={[
                                    'Create with Passion', 3000,
                                    'Lead with Empathy', 3000,
                                    'Inspire Change', 3000
                                ]}
                                wrapper='div'
                                repeat={Infinity}
                            />
                        </span>
                    </a>
                    <div className='flex flex-row gap-x-2 md:gap-x-4 lg:gap-x-8 xl:gap-x-10 2xl:gap-x-20 w-full text-whitesmoke items-center justify-between lg:w-fit'>
                            <Link href="https://linkedin.com/in/declanrapp" target="_blank" className='flex flex-row fill-whitesmoke hover:fill-goldenrod visited:fill-wheat text-whitesmoke hover:text-goldenrod visited:text-wheat items-center'>
                                <Footer.Icon
                                    icon={FaLinkedin}
                                />
                                <div className='ml-2 text-xs sm:text-base md:text-lg lg:text-xl'> 
                                    LinkedIn
                                </div>
                            </Link>
                            <Link href="https://instagram.com/declanrappdesign" target="_blank" className='flex flex-row fill-whitesmoke hover:fill-goldenrod visited:fill-wheat text-whitesmoke hover:text-goldenrod visited:text-wheat items-center'>
                                <Footer.Icon
                                icon={FaInstagram}
                                />
                                <div className='ml-2 text-xs sm:text-base md:text-lg lg:text-xl'> 
                                    Instagram
                                </div>
                            </Link>
                            <Link href="https://github.com/drapp111" target="_blank" className='flex flex-row fill-whitesmoke hover:fill-goldenrod visited:fill-wheat text-whitesmoke hover:text-goldenrod visited:text-wheat items-center'>
                                <Footer.Icon
                                icon={FaGithub}
                                />
                                <div className='ml-2 text-xs sm:text-base md:text-lg lg:text-xl'> 
                                    Github
                                </div>
                            </Link>
                    </div>
                </div>
                <Footer.Divider className='border-jet my-2 sm:my-2 md:my-2 lg:my-2'/>
                <div className='flex flex-row justify-center sm:justify-between w-full'>
                    <Footer.Copyright
                    by="Declan Rapp Theatrical Design"
                    href="#"
                    year={2022}
                    className='text-whitesmoke self-center'
                    />
                    <div className='text-whitesmoke text-sm hidden sm:flex'>Handmade with React<FaReact className='ml-1 self-center'/>, Next.js<SiNextdotjs className='ml-1 self-center'/>, and Tailwind<BiLogoTailwindCss className='ml-1 self-center'/></div>
                </div>
                
            </Footer>
        </div>

    )
};
