import Link from 'next/link';

export default function ContactButton(props) {
    return (
        <div>
            <Link href="/contact">
                <button className='contactButton'>{props.text}</button>
            </Link>
        </div>
    )
}