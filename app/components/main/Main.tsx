import { CircleArrowDown } from "lucide-react";
import React from "react";

const Main = () => {
  return (
    <main>
      <section className="h-dvh w-full">
        <section className="flex flex-col items-center py-44 text-center">
          <h1 className={`font-dirtyline text-8xl leading-20 text-[#E0EDEE]`}>
            roar in the <br /> digital wilderness.
          </h1>
          <p className="font max-w-lg pt-6 pb-4">
            We roar with success, delivering the TRIONN® through versatile
            design, branding and the latesttech development to companies.
          </p>
          <button>
            <CircleArrowDown />
          </button>
        </section>
        <section className="flex items-end justify-between pt-12">
          <button className="h-14.5 max-w-44 rounded-full border-2 border-cyan-100 px-8 font-bold">
            Explore work
          </button>
          <button className="h-14.5 max-w-44 rounded-full border-2 border-cyan-100 px-8 font-bold">
            Get in touch
          </button>
        </section>
      </section>
    </main>
  );
};

export default Main;
