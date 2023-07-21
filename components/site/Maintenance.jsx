//UI Components
import Image from 'next/image';
import maintenanceHeader from '/public/assets/maintenance.gif'
export default function Maintenance() {
    return (
        <>
            <div className="w-full h-7/10vh flex flex-col justify-center items-center">
                <div className="relative ">
                    <Image src={maintenanceHeader} unoptimized={true} alt={"Under Maintenance"} quality={100} className='rounded-lg object-cover object-center'/>
                    
                </div>
                <div>
                    <h1 className='text-goldenrod font-title text-center'>This page is currently under maintenance</h1>
                    <h5 className='text-whitesmoke font-subtitle text-center'>Please check back another time</h5>
                </div>
            </div>
        </>
    )
}