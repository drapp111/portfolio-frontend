'use client'

//UI Components
import {usePathname} from 'next/navigation'
import Logo from "./Logo";
import NavItem from "./NavItem";

const MENU_LIST = [
  { text: "Home", href: "/",},
  { text: "About", href: "/about" },
  { text: "Contact", href: "/contact" },
  { text: "Portfolio", href: "/portfolio" }
];
export default function Navbar() {
  const pathname = usePathname();

  return (
      <nav className='flex justify-center h-full w-full pb-2 bg-night rounded-b-lg shadow-md shadow-gray z-50'>
        <div className='pl-2 pr-2 relative items-end justify-center flex w-full h-full gap-x-10  md:gap-x-16 xl:w-1/2 2xl:w-1/2'>
            <div className="flex w-1/10 h-full justify-center items-end">
              <NavItem active={pathname == '/'} items={...MENU_LIST[0]} />
            </div>
            <div className="flex w-1/10 h-full justify-center items-end">
              <NavItem active={pathname == '/about'} items={...MENU_LIST[1]} />
            </div>
            <Logo />
            <div className="flex w-1/10 h-full justify-center items-end">
              <NavItem active={pathname == '/contact'} items={...MENU_LIST[2]} />
            </div>
            <div className="flex w-1/10 h-full justify-center items-end">
              <NavItem active={pathname == '/portfolio'} items={...MENU_LIST[3]} />
            </div>
        </div>
      </nav>
  );
};

