"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";


const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <div className="h-1/2 mb-5 lg:h-full lg:w-1/2 relative z-0">
          <Image src="/pk.png" alt="" fill className="object-contain" />
        </div>
              <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
                <div>
          <p className=" mt-5 font-semibold">Hello, my name is</p>
          <h1 className="relative z-10 text-4xl md:text-6xl font-bold">
          Pratik Odpalliwar
          </h1>
          </div>
         
         <p className="md:text-xl">
          I'm a full-stack developer specialised in frontend and backend development for scalable web apps.I have made a variety of Mern Stack Applications. Want to know how I may help your project? Check out my projects from my GitHub Profile. 
          </p>

          <div className="w-full flex justify-center lg:justify-start gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              <Link href="/portfolio"> View My Work</Link>
           
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
           
              <Link href="/contact">Contact Me</Link>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
