"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "MERN Real Estate App",
    desc: "Built a dynamic real estate application using the MERN stack, combining MongoDB, Express.js, React, and Node.js to create a seamless user experience for property browsing and management.",
    img: "https://cdn.pixabay.com/photo/2021/10/07/15/23/real-estate-6688945_1280.jpg",
    link: "https://pureestate.onrender.com/sign-in",
  },
  {
    id: 2,
    color: "from-purple-300 to-red-300",
    title: "MERN Chat App",
    desc: "Developed a MERN chat app with real-time messaging, user authentication, and a seamless, user-friendly interface. Implemented WebSocket for instant communication.",
    img: "https://cdn.pixabay.com/photo/2020/09/02/03/26/iphone-5537230_1280.jpg",
    link: "https://mernchatapp-b1fq.onrender.com/login",
  },
  {
    id: 3,
    color: "from-blue-300 to-violet-300",
    title: "Next.js and Typescript App",
    desc: "Built a travel website using TypeScript and Next.js, combining type safety with the efficiency of server-side rendering for a modern and reliable web presence.",
    img: "https://cdn.pixabay.com/photo/2017/01/28/02/24/japan-2014618_1280.jpg",
    link: "https://hilinkapp.vercel.app/",
  },
  {
    id: 4,
    color: "from-violet-300 to-purple-300",
    title: "React Dice Game",
    desc: "Crafted an engaging React-based dice game website, where users can roll virtual dice and experience the thrill of chance.",
    img: "https://cdn.pixabay.com/photo/2015/03/25/23/45/cube-689618_1280.jpg",
    link: "https://dice-game-nu-six.vercel.app/",
  },
  {
    id: 5,
    color: "from-purple-300 to-red-300",
    title: "React Food App",
    desc: "Crafted a delightful React-based food app that offers a visually appealing interface and also provides a seamless and enjoyable experience for users.",
    img: "https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590_1280.jpg",
    link: "https://thefoodies-flame-chi.vercel.app/",
  },

  
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[800vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl w-full">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[300px] xl:h-[220px] mx-5">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-start">
                  
                    <button className="h-12 w-32 p-2 text-sm bg-white text-gray-600 font-semibold mb-10 flex justify-center items-center rounded">See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        {/* <h1 className="text-8xl">Do you have a project?</h1> */}
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
