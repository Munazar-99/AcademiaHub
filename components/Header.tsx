import Image from "next/image";
import React from "react";

function Header() {
  return (
    <header className="w-full bg-black h-[15vh]">
      <section className="py-2 flex items-center gap-14 max-w-7xl">
        <Image
          className="relative invert ml-2"
          src="/graduation-cap.jpg"
          alt="App Logo"
          width={90}
          height={18}
          priority
        />
        <h1 className="text-white text-3xl">Academia Hub</h1>
      </section>
    </header>
  );
}

export default Header;
