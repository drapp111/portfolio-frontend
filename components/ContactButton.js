import Link from 'next/link';

export default function ContactButton(props) {
    return (
        <div>
            <Link href="/contact">
                <button className='relative transition ease-in-out delay-150 shadow-lg shadow-black hover:shadow-sm hover:shadow-goldenrod bg-goldenrod hover:bg-whitesmoke border-2 border-black text-black hover:text-black duration-1000 justify-center align-center text-center mt-11'>
                    {props.text}
                </button>
            </Link>
        </div>
    )
}