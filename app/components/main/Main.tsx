import { CircleArrowDown } from "lucide-react";
import React from "react";

const Main = () => {
  return (
    <main>
      <section className="w-full h-dvh">
        <section className="pt-20 text-center">
          <h1 className="text-8xl  uppercase">
            roar in the <br /> digital wilderness.
          </h1>
          <p className="w-full text-center">
            We roar with success, delivering the TRIONN® through versatile
            design, branding and the latesttech development to companies.
          </p>
          <button>
            <CircleArrowDown />
          </button>
        </section>
      </section>
    </main>
  );
};

export default Main;
