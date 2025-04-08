import { CircleArrowDown } from "lucide-react";
import React from "react";
import { motion } from "motion/react";

const Main = () => {
  return (
    <main>
      <section className="h-dvh w-full text-[#E0EDEE]">
        <section className="flex flex-col items-center py-40 text-center">
          <motion.h1
            className={`font-dirtyline text-8xl leading-20`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            roar in the <br /> digital wilderness.
          </motion.h1>

          <p className="font-syne max-w-lg py-4 uppercase">
            We roar with success, delivering the TRIONN® through versatile
            design, branding and the latesttech development to companies.
          </p>
          <button className="text-[#415052]">
            <CircleArrowDown size={28} strokeWidth={1.25} />
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
