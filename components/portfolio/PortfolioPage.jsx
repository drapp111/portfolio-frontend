'use client'

//Packages
import {useState, useEffect} from 'react';

//UI Components
import {ImageCard, LoadingCard} from "@/components/portfolio/ImageCard";
import Maintenance from "@/components/site/Maintenance";
import Image from 'next/image';

//Server Components
import {getImages, getPageText} from '@/components/portfolio/serverActions.js'

export default function PortfolioPage({params}) { 
    const [loading, setLoading] = useState(true)
    const [pageText, setPageText] = useState([])
    const [pageImages, setPageImages] = useState([])

    useEffect(() => {
        const loadPageContent = async () => {
            setLoading(true);
            const page_text = await getPageText(params.shows);
            setPageText(page_text[0]);
            const images = await getImages(params.shows);
            setPageImages(images);
            setLoading(false);

        }
        loadPageContent()
    }, [])

    function loadingCards() {
        var rows = [];
        for(let i = 0; i < 20; i++) {
            rows.push(<LoadingCard />);
        }
        return rows;
    }

    const IMAGE_PATH_PREFIX = '/pages/portfolio/' + params.shows + '/';

    return (
        <>
            <div className={`${pageText.status == 'active' ? '' : 'hidden'}`}>
                <section className="relative flex flex-col min-h-2/10vh h-fit w-full">
                    {loading ? (
                        <div role="status" className="flex flex-col w-full min-h-3/10vh h-fit items-center justify-center animate-pulse">
                            <div className="flex items-center justify-center w-full min-h-3/10vh bg-night rounded">
                                <svg className="w-48 h-48 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                                </svg>
                            </div>
                        </div>
                    ) : (
                        <div className={` flex flex-col w-full min-h-3/10vh h-fit`}>
                            <Image src={IMAGE_PATH_PREFIX + pageText.image + pageText.image_extension} fill priority={true} alt={'Page header'} className='absolute top-0 left-0 w-full object-cover object-center filter brightness-50 z-0' />
                            <div className="flex flex-col w-full min-h-3/10vh h-fit shadow-inner-md items-center justify-center p-2 sm:p-8 z-10">
                                <h1 className="text-goldenrod">{pageText.title}</h1>
                                <h5>-</h5>
                                <h5 className="mb-8 w-full sm:w-2/3 whitespace-normal text-center">{pageText.subtitle}</h5>
                                <h6 className="w-full sm:w-2/3 whitespace-normal text-center">{pageText.description}</h6>
                                {pageText.photographer != null ? (
                                    <h6 className="w-full sm:w-2/3 whitespace-normal text-center mt-6">
                                        Photos by <a className='text-whitesmoke underline italic hover:text-goldenrod visited:text-wheat' href={pageText.photographer_handle}>{pageText.photographer}</a>
                                    </h6>
                                ) : ''}
                            </div>
                        </div>
                    )}   
                </section>
                <section className="flex flex-col min-h-2/10vh w-full items-center justify-center">
                <div className=" min-h-7/10vh h-fit p-16 flex flex-row gap-x-16 gap-y-8 justify-center items-center flex-wrap max-w-[114rem]">
                        {!loading ? (
                            pageImages.map((image, idx) => (
                                <ImageCard key={idx} image={IMAGE_PATH_PREFIX + image.path + image.extension} alt={image.alt} />
                            ))) : (
                            loadingCards().map((card, idx) => (
                                <div key={idx}>
                                    {card}
                                </div>
                            )))
                        }
                </div>
                </section>
            </div>
            <div className={`${pageText.status == 'maintenance' ? '' : 'hidden'}`}>
                <Maintenance />
                
            </div>
            
        </>
    );
  }