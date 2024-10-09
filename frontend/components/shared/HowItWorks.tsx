import React from "react";
import { motion } from "framer-motion";

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          How It Works 🛠️
        </motion.h2>
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-8">
          <motion.div
            className="w-full md:w-1/3 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center justify-center mb-4">
              <div className="p-4 bg-[#1a2233] rounded-full">
                <span className="text-3xl">1️⃣</span>
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-2">
              🔗 Connect Your Wallet: Use popular wallets like MetaMask to
              securely connect to our platform.
            </h3>
            <p className="text-gray-300"></p>
          </motion.div>
          <motion.div
            className="w-full md:w-1/3 mb-8 md:mb-0"
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center justify-center mb-4">
              <div className="p-4 bg-[#1a2233] rounded-full">
                <span className="text-3xl">2️⃣</span>
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-2">
              🔍 Choose a Cause: Browse a variety of projects and causes, all
              verified and approved by our community.
            </h3>
            <p className="text-gray-300"></p>
          </motion.div>
          <motion.div
            className="w-full md:w-1/3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center justify-center mb-4">
              <div className="p-4 bg-[#1a2233] rounded-full">
                <span className="text-3xl">3️⃣</span>
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-2">
              📈 Track Your Donations: View your contribution history and see
              the impact of your generosity with our transparent tracking
              system.
            </h3>
            <p className="text-gray-300"></p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
