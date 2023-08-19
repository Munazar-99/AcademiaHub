import { AcademicCapIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

function Header() {
  return (
    <header className="w-full  bg-[rgb(35,42,45)] h-[14%]">
      <section className="py-2 flex items-center gap-10 max-w-7xl ml-6 h-full">
        <AcademicCapIcon className='ml-8 h-[7vh] fill-white'/>
        <h1 className="text-white text-3xl">AcademiaHub</h1>
      </section>
    </header>
  );
}

export default Header;
