import Link from 'next/link';

export default function ContactButton(text) {
    return (
        <div>
            <Link href="/contact">
                <button className='contactButton'>Contact Me</button>
            </Link>
        </div>
    )
}