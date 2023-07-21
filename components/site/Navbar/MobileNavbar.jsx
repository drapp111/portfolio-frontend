'use client'

//Packages
import {usePathname} from 'next/navigation'
import Link from 'next/link'

export default function BottomNavbar () {

    const pathname = usePathname();

    return ( 
        <div className="fixed sm:hidden bottom-0 left-0 z-50 w-full h-mobile-nav bg-neutral-800 border-t border-neutral-600 dark:bg-gray-900 dark:border-gray-600">
            <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
                <Link href="/" className={`inline-flex flex-col items-center justify-center px-5 stroke-whitesmoke hover:stroke-goldenrod group`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className={`w-6 h-6 group-hover:fill-whitesmoke ${pathname == '/' ? 'fill-whitesmoke stroke-goldenrod' : ''}`}>
                        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                    </svg>
                    <span className={`text-sm group-hover:text-goldenrod ${pathname == '/' ? 'text-goldenrod' : ' text-whitesmoke'}`}>Home</span>
                </Link>
                <Link href="/about" className={`inline-flex flex-col items-center justify-center px-5 stroke-whitesmoke hover:stroke-goldenrod group`}> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className={`w-6 h-6 group-hover:fill-whitesmoke ${pathname == '/about' ? 'fill-whitesmoke stroke-goldenrod' : ''}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                    </svg>
                    <span className={`text-sm group-hover:text-goldenrod ${pathname == '/about' ? 'text-goldenrod' : ' text-whitesmoke'}`}>About</span>
                </Link>
                <Link href="/contact" className={`inline-flex flex-col items-center justify-center px-5 stroke-whitesmoke hover:stroke-goldenrod group`}> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className={`w-6 h-6 group-hover:fill-whitesmoke ${pathname == '/contact' ? 'fill-whitesmoke stroke-goldenrod' : ''}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <span className={`text-sm group-hover:text-goldenrod ${pathname == '/contact' ? 'text-goldenrod' : ' text-whitesmoke'}`}>Contact</span>
                </Link>
                <Link href="/portfolio" className={`inline-flex flex-col items-center justify-center px-5 stroke-whitesmoke hover:stroke-goldenrod group`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className={`w-6 h-6 group-hover:fill-whitesmoke ${pathname == '/portfolio' ? 'fill-whitesmoke stroke-goldenrod' : ''}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                    <span className={`text-sm group-hover:text-goldenrod ${pathname == '/portfolio' ? 'text-goldenrod' : ' text-whitesmoke'}`}>Portfolio</span>
                </Link>
            </div>
        </div>

    );
};

