'use client'

import React, { useState } from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About", href: "/" },
  { text: "Contact", href: "/" },
  { text: "Portfolio", href: "/" }
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
      <nav className='border-2 border-green flex justify-center h-full w-full bg-black'>
        <div className='pl-2 pr-2 relative items-end justify-center flex w-full h-full gap-x-10  md:gap-x-16 xl:w-1/2 2xl:w-1/2'>
            <div className="flex w-1/10 h-full justify-center items-end" onClick={() => {setActiveIdx(idx);setNavActive(true);}}>
              <NavItem active={activeIdx === 0} {...MENU_LIST[0]} />
            </div>
            <div className="flex w-1/10 h-full justify-center items-end" onClick={() => {setActiveIdx(idx);setNavActive(true);}}>
              <NavItem active={activeIdx === 1} {...MENU_LIST[1]} />
            </div>
            <Logo />
            <div className="flex w-1/10 h-full justify-center items-end" onClick={() => {setActiveIdx(idx);setNavActive(true);}}>
              <NavItem active={activeIdx === 2} {...MENU_LIST[2]} />
            </div>
            <div className="flex w-1/10 h-full justify-center items-end" onClick={() => {setActiveIdx(idx);setNavActive(true);}}>
              <NavItem active={activeIdx === 3} {...MENU_LIST[3]} />
            </div>
        </div>
      </nav>
  );
};

export default Navbar;
