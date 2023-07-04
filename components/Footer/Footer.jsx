'use client'

import React, { useState, useEffect } from 'react';
import Typical from 'react-typical'

/**
 * TODO: Rework this footer for mobile then size up to larger. Currently too large on mobile
 */

export default function Footer() {

    return (

        <div className="bg-black bottom-0 w-full h-full transition-all duration-200">
            <h6 className="text-whitesmoke text-center text-xl hidden collapse sm:collapse md:block md:visible md:text-2xl xl:text-4xl 2xl:text-6xl md:mt-8 md:mb-8">
            <Typical
                    steps={[
                        'Create with Passion - Lead with Empathy - Inspire Change', 5000,
                        '', 1000
                    ]}
                    wrapper='p'
                    loop={Infinity}
                />
            </h6>
            <h6 className='text-whitesmoke justify-center text-center text-lg flex md:collapse md:hidden mt-2 mb-2'>
                <Typical
                        steps={[
                            'Create with Passion', 3000,
                            'Lead with Empathy', 3000,
                            'Inspire Change', 3000
                        ]}
                        wrapper='div'
                        loop={Infinity}
                    />
            </h6>
            <div className="flex flex-col relative justify-center max-w-2/3">
                <div className="grid grid-cols-4 gap-0">
                <div className="flex flex-col flex-wrap text-center items-center">
                    <div className="text-sm text-goldenrod font-bold mb-1 md:text-lg md:mb-4 lg:mb-6 text-center">
                        About Me
                    </div>
                    <a href="#" className="text-whitesmoke mb-1 text-mobile md:text-sm md:mb-2 text-center hover:text-wheat hover:transition-all hover:duration-200 hover:ease-in">About</a>
                    <a href="#" className="text-whitesmoke mb-1 text-mobile md:text-sm md:mb-2 text-center hover:text-wheat hover:transition-all hover:duration-200 hover:ease-in">Resume</a>
                    <a href="#" className="text-whitesmoke mb-1 text-mobile md:text-sm md:mb-2 text-center hover:text-wheat hover:transition-all hover:duration-200 hover:ease-in">Mission</a>
                    </div>
                <div className="flex flex-col text-left">
                    <div className="text-sm text-goldenrod font-bold mb-1 md:text-lg md:mb-4 lg:mb-6 text-center">Portfolio</div>
                    <a href="#" className="text-whitesmoke mb-1 text-mobile md:text-sm md:mb-2 text-center hover:text-wheat hover:transition-all hover:duration-200 hover:ease-in">Godspell</a>
                    <a href="#" className="text-whitesmoke mb-1 text-mobile md:text-sm md:mb-2 text-center hover:text-wheat hover:transition-all hover:duration-200 hover:ease-in">Come Like Shadows</a>
                    <a href="#" className="text-whitesmoke mb-1 text-mobile md:text-sm md:mb-2 text-center hover:text-wheat hover:transition-all hover:duration-200 hover:ease-in">Dance</a>
                </div>
                <div className="flex flex-col text-left">
                    <div className="text-sm text-goldenrod font-bold mb-1 md:text-lg md:mb-4 lg:mb-6 text-center">Get in Touch</div>
                    <a href="#" className="text-whitesmoke mb-1 text-mobile md:text-sm md:mb-2 text-center hover:text-wheat hover:transition-all hover:duration-200 hover:ease-in">Contact</a>
                    <a href="#" className="text-whitesmoke mb-1 text-mobile md:text-sm md:mb-2 text-center hover:text-wheat hover:transition-all hover:duration-200 hover:ease-in">Email</a>
                    <a href="#" className="text-whitesmoke mb-1 text-mobile md:text-sm md:mb-2 text-center hover:text-wheat hover:transition-all hover:duration-200 hover:ease-in">Phone</a>
                </div>
                <div className="flex flex-col text-left ">
                    <div className="text-sm text-goldenrod font-bold mb-1 md:text-lg md:mb-4 lg:mb-6 text-center">Socials</div>
                    <a href="#" className="text-whitesmoke mb-1 text-mobile md:text-sm md:mb-2 text-center hover:text-wheat hover:transition-all hover:duration-200 hover:ease-in">Instagram</a>
                    <a href="#" className="text-whitesmoke mb-1 text-mobile md:text-sm md:mb-2 text-center hover:text-wheat hover:transition-all hover:duration-200 hover:ease-in">Facebook</a>
                    <a href="#" className="text-whitesmoke mb-1 text-mobile md:text-sm md:mb-2 text-center hover:text-wheat hover:transition-all hover:duration-200 hover:ease-in">Portfolio Site</a>
                </div>
                </div>
            </div>
        </div>

    )
};
