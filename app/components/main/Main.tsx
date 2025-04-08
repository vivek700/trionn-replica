import { CircleArrowDown } from "lucide-react";
import React from "react";

const Main = () => {
  return (
    <main>
      <section className="w-full h-dvh ">
        <section className="py-52 flex flex-col items-center text-center">
          <h1 className={`font-bold text-9xl font-dirtyline  uppercase `}>
            roar in the <br /> digital wilderness.
          </h1>
          <p className=" max-w-lg pt-6 pb-4">
            We roar with success, delivering the TRIONN® through versatile
            design, branding and the latesttech development to companies.
          </p>
          <button>
            <CircleArrowDown />
          </button>
        </section>
        <section className="flex justify-between items-end pt-12">
          <button className="max-w-44 h-14.5 font-bold border-2 border-cyan-100 px-8 rounded-full">
            Explore work
          </button>
          <button className="max-w-44 h-14.5 font-bold border-2 border-cyan-100 px-8 rounded-full">
            Get in touch
          </button>
        </section>
      </section>
    </main>
  );
};

export default Main;
