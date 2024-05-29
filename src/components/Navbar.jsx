'use client'
import Link from "next/link";
import Image from "next/image";
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  let Links = [
    { name: "Home", link: "/" },
    { name: "About Me", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];
  return (
    <div className="shadow-md w-full top-0 left-0">
      <div className="md:flex items-center justify-between py-4  md:px-10 px-7">
        <div className="text-2xl font-bold flex items-center font-[Poppins] text-gray-800">
          <Link href="/">PORTFOLIO</Link>
        </div>
        <div onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl absolute right-12 top-5 cursor-pointer">
          {isOpen ? <RxCross2 /> : <MdMenu />}
        </div>
        <ul
          className={`md:flex md:items-center bg-primary md:pb-0 pb-12 absolute md:static md:z-auto z-10
        left-0 w-full md:w-auto md:pl-0 pl-9 transition-all
        duration-500 ease-in ${isOpen ? 'top-20 opacity-100' : 'top-[-490px]'} md:opacity-100 opacity-0`}
        >
          {Links.map((Link) => (
            <li key={Link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={Link.link}
                className="text-gray-800 hover:text-secondary duration-500"
              >
                {Link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
