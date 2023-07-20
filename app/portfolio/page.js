'use client'

//UI Components
import PortfolioCard from "@/components/portfolio/PortfolioCard";

//Page Items
import { PortfolioCards } from '/public/pages/portfolio/PortfolioCards'

export default function Page() {
    return (
      <>
          <section className="flex flex-col min-h-2/10vh w-full">
            <div className="flex flex-col w-full min-h-2/10vh h-fit bg-cover bg-center bg-[url('/pages/portfolio/header.jpg')] shadow-inner-md">
              <div className="flex flex-col w-full min-h-2/10vh backdrop-brightness-50 items-center justify-center p-2 sm:p-8">
                <h1 className="mb-4 text-goldenrod">Theatrical Design and Production Portfolio</h1>
                <h5 className="w-full sm:w-2/3 whitespace-normal text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit pellentesque habitant morbi tristique senectus. Malesuada nunc vel risus commodo viverra. Cras fermentum odio eu feugiat.</h5>
              </div>
            </div>
            
          </section>
          <section className="flex flex-col min-h-2/10vh w-full items-center justify-center">
            <div className=" min-h-7/10vh h-fit p-16 flex flex-row gap-x-16 gap-y-8 justify-center items-center flex-wrap max-w-[114rem]">
                {PortfolioCards.map((card, idx) => (
                    <PortfolioCard {...card} />
                ))}
            </div>
          </section>
      </>
    );
  }