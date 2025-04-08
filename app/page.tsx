"use client";

import { easeIn } from "motion";
import Footer from "./components/footer/Footer";
import Navbar from "./components/header/Navbar";
import Main from "./components/main/Main";
import { motion } from "motion/react";

export default function Home() {
  return (
    <>
      <motion.div
        initial={{ y: 500, opacity: 1 }}
        animate={{ y: -1000, opacity: 0 }}
        className="absolute bottom-0 left-0 z-50 w-full overflow-hidden bg-black"
        transition={{ duration: 0.9, ease: easeIn }}
      ></motion.div>
      <section className="mx-auto max-w-6/7">
        <Navbar />
        <Main />
        <Footer />
      </section>
    </>
  );
}
