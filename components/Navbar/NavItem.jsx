import Link from "next/link";
const NavItem = ({ text, href, active }) => {
  return (
    <Link className="relative flex flex-col w-fit h-fit items-center justify-center" href={href}>
      <div
        className={`font-subtitle flex flex-col relative text-white text-xs md:text-lg hover:font-bold hover:text-goldenrod after:transition-all after:ease-in-out after:duration-1000 after:flex after:h-1 after:w-0 after:bg-goldenrod hover:after:w-full hover:after:shadow-md hover:after:shadow-goldenrod ${
          active ? "after:w-full after:shadow-md after:shadow-goldenrod" : ""
        }`}
      >
        <div className={`nav-color ${active ? `text-goldenrod font-bold` : ''}`}>
          {text}
        </div>
      </div>
    </Link>
  );
};

export default NavItem;
