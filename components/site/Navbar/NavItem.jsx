'use client'

//UI Components
import Link from "next/link";

export default function NavItem({ items, active }) {
    
  return (
    <Link className="relative flex flex-col w-fit h-fit items-center justify-center" href={items.href}>
      <div
        className={`font-subtitle flex flex-col relative text-white text-xs md:text-lg hover:font-bold hover:text-goldenrod after:transition-all after:ease-in-out after:duration-1000 after:flex after:h-1 after:w-0 after:bg-goldenrod hover:after:w-full hover:after:shadow-md hover:after:shadow-goldenrod ${
          active ? "after:w-full after:shadow-md after:shadow-goldenrod" : ""
        }`}
      >
        <div className={`nav-color ${active ? `text-goldenrod font-bold` : ''}`}>
          {items.text}
        </div>
      </div>
    </Link>
  );
};

