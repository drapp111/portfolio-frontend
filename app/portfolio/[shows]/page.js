'use client'

//UI Components
import ImageCard from "@/components/portfolio/ImageCard";

//Page Items
import { Images } from '/public/pages/portfolio/Images'
import { PageText } from '/public/pages/portfolio/PageText'

export default function Page({params}) { 
    console.log(Images);

    const IMAGE_PATH_PREFIX = '/pages/portfolio/' + params.shows + '/';

    console.log(IMAGE_PATH_PREFIX + '/' + Images.godspell[1].src);

    return (
        <>
            <section className="flex flex-col min-h-2/10vh w-full">
              <div className="flex flex-col w-full min-h-2/10vh h-fit bg-cover bg-center bg-[url('/pages/portfolio/header.jpg')] shadow-inner-md">
                <div className="flex flex-col w-full min-h-2/10vh backdrop-brightness-50 items-center justify-center p-2 sm:p-8">
                  <h1 className="text-goldenrod">{PageText[params.shows].title}</h1>
                  <h5>-</h5>
                  <h5 className="mb-8 w-full sm:w-2/3 whitespace-normal text-center">{PageText[params.shows].subtitle}</h5>
                  <h6 className="w-full sm:w-2/3 whitespace-normal text-center">{PageText[params.shows].description}</h6>
                </div>
              </div>
              
            </section>
            <section className="flex flex-col min-h-2/10vh w-full items-center justify-center">
              <div className=" min-h-7/10vh h-fit p-16 flex flex-row gap-x-16 gap-y-8 justify-center items-center flex-wrap max-w-[114rem]">
                  {Images.godspell.map((image, idx) => (
                      <ImageCard key={idx} image={IMAGE_PATH_PREFIX + image.src} alt={image.alt} />
                  ))}
              </div>
            </section>
        </>
    );
  }