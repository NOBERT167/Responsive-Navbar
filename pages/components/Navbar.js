import Link from "next/link";
import Script from "next/script";
import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar() {
    
  return (
    <nav className="flex flex-row justify-between items-center bg-slate-900 text-gray-50">
      
      <section className="bg-emerald-900 ml-2 p-5 text-lg font-bold font-mono">
        <Link href={"/"}>
          #MyNav
        </Link>
      </section>
      
      <section
        className="bg-slate-900 hidden md:flex md:items-center absolute right-0 top-16 md:static w-1/2 md:w-fit"
        id="collapseLink"
      >
        <ul className="flex flex-col md:flex-row md:justify-end text-left md:text-center text-gray-50 p-5">

          <Link href={"/"}>
            <li className="p-3 hover:bg-emerald-500 hover:font-bold">Home</li>
          </Link>

          <Link href={"/About"}>
            <li className="p-3 hover:bg-emerald-500 hover:font-bold">About Us</li>
          </Link>

          <Link href={"/Blogs"}>
            <li className="p-3 hover:bg-emerald-500 hover:font-bold">Blogs</li>
          </Link>

          <Link href={"/Contacts"}>
            <li className="p-3 hover:bg-emerald-500 hover:font-bold">Contact Us</li>
          </Link>

        </ul>
      </section>

      <section className="flex flex-col justify-end p-5 md:hidden">
        <MenuIcon className="menu" id="menuIcon" />
        <CloseIcon className="hidden" id="crossIcon" />
        {/* <span className="material-symbols-outlined hidden" id="crossIcon">
          close
        </span> */}
      </section>

      <Script src="navOps.js" strategy="lazyOnload" />
    </nav>
  );
}
