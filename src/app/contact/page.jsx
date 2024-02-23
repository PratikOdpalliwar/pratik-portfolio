"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

const ContactPage = () => {
  const text = "Say Hello";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {
    // Add your form submission logic here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">

        <div className="h-1/2 lg:h-full lg:w-full flex items-center justify-center text-6xl mb-8 lg:mb-0">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>

        {/* FORM CONTAINER */}
        <motion.div
          className="w-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-4 justify-center p-4 lg:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <motion.div
            className=" p-4 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <div className="max-w-3xl mx-auto">
              <h1 className="text-2xl text-black font-bold mb-4 lg:text-4xl">Contact Me</h1> 

              <form className="space-y-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                >
                  <label className="block text-black font-mono text-md font-semibold">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    className="w-full p-2 h-8 rounded border border-black bg-transparent text-gray-800"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1, duration: 1 }}
                >
                  <label className="block text-black font-mono text-md font-semibold">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    className="w-full p-2 h-8 rounded border border-black bg-transparent text-gray-800"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 1 }}
                >
                  <label className="block text-black font-mono text-md font-semibold">Message</label>
                  <textarea
                    rows="4"
                    value={message}
                    onChange={handleMessageChange}
                    className="w-full p-2 h-12 rounded border border-black bg-transparent text-gray-800"
                  />
                </motion.div>

                <motion.button
                  type="button"
                  onClick={handleSubmit}
                  className=" py-2 px-4 bg-purple-200 rounded font-semibold text-gray-600 hover:bg-purple-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  Submit
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
