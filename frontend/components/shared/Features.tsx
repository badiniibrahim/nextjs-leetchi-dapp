import React from "react";
import { motion } from "framer-motion";

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20  text-white">
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Why Choose
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-8">
        {[
          {
            icon: "🔒",
            title: "Security and Transparency",
            description:
              "With our dApp, every contribution is recorded on the blockchain, ensuring complete transparency. You can track your donations and see exactly how they are used, eliminating the risk of fraud or manipulation.",
          },
          {
            icon: "🚀",
            title: "Ease of Use",
            description: "Making a donation has never been easier! Connect your wallet, choose the cause you care about, and contribute in just a few clicks. Our user-friendly interface is designed to provide a smooth and intuitive experience..",
          },
          {
            icon: "💸",
            title: "Direct Support to Causes",
            description: "Your donation goes directly to the projects you support, with no intermediaries. This means more of your contribution reaches those in need, maximizing the impact of your generosity.",
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="w-full md:w-1/3 p-6 border border-gray-700 rounded-lg shadow-lg bg-[#1a2233]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
              <span className="text-2xl">{feature.icon}</span>
              <span>{feature.title}</span>
            </h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
