

//UI Components
import PortfolioPage from "@/components/portfolio/PortfolioPage";

//Server Components
import {getStaticParams} from '@/components/portfolio/serverActions.js'

export async function generateStaticParams() {
    return await getStaticParams();
  }


export default function Page({params}) { 
    return <PortfolioPage params={params}/>
  }