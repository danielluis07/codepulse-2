"use client";

import Image from "next/image";
import logo from "@/public/codepulse-2.png";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { links } from "@/utils/data";

export const Navbar = () => {
  return (
    <div className="fixed top-0 px-5 w-full bg-white z-10 shadow-md">
      {/*  */}
      <div className="flex items-center justify-between w-full">
        {/* image */}
        <div className="relative size-20 rounded-full overflow-hidden">
          <Image src={logo} alt="logo" fill />
        </div>
        {/* links */}
        <div className="space-x-14 text-md font-[400] maxsm:hidden border border-[#3369E7] rounded-3xl px-8 py-2">
          {links.map((link, index) => (
            <Link className="hover:text-[#2dde98]" key={index} href={link.hash}>
              {link.name}
            </Link>
          ))}
        </div>
        {/* whats */}
        <a
          id="whats_button"
          href="https://whatsa.me/5547988744602"
          aria-label="WhatsApp">
          <FaWhatsapp className="text-4xl text-green-500" />
        </a>
      </div>
    </div>
  );
};
