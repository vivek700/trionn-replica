import { AlignRight, Sun, Text } from "lucide-react";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav className="flex py-9 px-14 justify-between">
        <section>
          <Image
            alt="Trionn"
            src={"logo.svg"}
            width={118}
            height={22}
            className="w-24"
          />
        </section>
        <section className="flex gap-x-2 items-center">
          <span className="bg-[#2B2C2F] -mt-3  rounded-full w-11 h-11 flex items-center justify-center">
            <Sun />
          </span>
          <span className="bg-[#2B2C2F] w-11 h-11 -mt-3 -rotate-90 rounded-full flex justify-center items-center">
            <Text />
          </span>
        </section>
        <section className="flex">
          <span className="uppercase pr-3">menu</span>
          <span className="bg-[#2B2C2F] w-11 h-11 -mt-3 rounded-full flex flex-col items-end pr-2.5 justify-center">
            <span className="h-0.5 w-5.5 mb-1 bg-white block"></span>
            <span className="h-0.5 w-3.5 block bg-white"></span>
          </span>
        </section>
      </nav>
    </header>
  );
};

export default Navbar;
