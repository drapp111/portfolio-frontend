'use client'

//Packages
import {useState, useEffect} from 'react';

//UI Components
import PortfolioCard from "@/components/portfolio/PortfolioCard";
import Image from 'next/image';
import header from '/public/pages/portfolio/header.jpg'

//Server Components
import {getShows} from "@/components/portfolio/serverActions";

export default function Page() {

    const [loading, setLoading] = useState(true)
    const [shows, setShows] = useState([])

    useEffect(() => {
        const loadPageContent = async () => {
            setLoading(true);
            const shows = await getShows();
            setShows(shows);
            setLoading(false);

        }
        loadPageContent()
    }, [])

    

    return (
      <>
          <section className="flex flex-col min-h-2/10vh w-full">
            <div className="relative flex flex-col w-full min-h-3/10vh h-fit">
                <Image src={header} fill priority={true} sizes={'40w'} alt={'Page header'} className='absolute top-0 left-0 w-full object-cover object-center filter brightness-50 z-0' />
                <div className="flex flex-col w-full min-h-3/10vh shadow-inner-md items-center justify-center p-2 sm:p-8 z-10">
                    <h1 className="mb-4 text-goldenrod">Theatrical Design and Production Portfolio</h1>
                    <h5 className="w-full sm:w-2/3 whitespace-normal text-center">Below is a select portfolio of my recent productions. My previous work includes lighting design, scenic design, and theatrical production, as well as some carpentry and construction work.</h5>
                </div>
            </div>
            
          </section>
          <section className="flex flex-col min-h-2/10vh w-full items-center justify-center">
            <div className=" min-h-7/10vh h-fit p-16 flex flex-row gap-x-16 gap-y-8 justify-center items-center flex-wrap max-w-[114rem]">
                {loading ? <></> : 
                    (shows.map((card, idx) => (
                        <PortfolioCard key={idx} {...card} />
                )))}
            </div>
          </section>
      </>
    );
  }