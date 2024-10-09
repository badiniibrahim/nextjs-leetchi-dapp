import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative z-40  text-white mt-10">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            The Decentralized Solution for Transparent and Secure Contributions
          </motion.h1>
          <motion.p
            className="text-lg mb-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Leetchi DAPP is a decentralized application that enables users to
            contribute to projects and causes they care about with confidence.
            Leveraging the power of blockchain smart contracts, your donations
            are secure, transparent, and fully traceable.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
