import Link from 'next/link';

export default function ContactButton(props) {
    return (
        <div>
            <Link href="/contact">
                <button className='will-change-transform rounded py-0 px-2 sm:py-0 sm:px-2 md:py-2 md:px-4 lg:py-2 lg:px-6 relative transition ease-in-out delay-150 landscape:shadow-shine-md landscape:lg:shadow-shine-lg shadow-shine-lg shadow-black hover:shadow-shine-sm hover:shadow-goldenrod bg-goldenrod hover:bg-wheat visited:bg-wheat border-2 border-black text-black text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl duration-1000 justify-center align-center text-center landscape:mt-4 landscape:lg:mt-11 mt-11'>
                    {props.text}
                </button>
            </Link>
        </div>
    )
}