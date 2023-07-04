import Link from 'next/link';

export default function ContactButton(props) {
    return (
        <div>
            <Link href="/contact">
                <button className='rounded py-0 px-2 sm:py-0 sm:px-2 md:py-2 md:px-4 lg:py-2 lg:px-6 relative transition ease-in-out delay-150 shadow-lg shadow-black hover:shadow-sm hover:shadow-goldenrod bg-goldenrod hover:bg-whitesmoke border-2 border-black text-black text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl duration-1000 justify-center align-center text-center mt-11'>
                    {props.text}
                </button>
            </Link>
        </div>
    )
}