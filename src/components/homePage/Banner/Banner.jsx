import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../../../assets/bannerAnimation.json";

const Banner = () => {
  return (
    <section className="md:min-h-[80vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-20 bg-card dark:bg-[#1C1D26] rounded-xl overflow-hidden gap-4 md:gap-0">

      {/* Left Content */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center h-full space-y-6 py-10 md:py-0">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-heading dark:text-white leading-tight"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Unlock Your Curiosity
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-paragraph text-center md:text-left dark:text-gray-300 max-w-md"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Read insightful blogs. Learn from real journeys. Explore new worlds of thought.
        </motion.p>

        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <button className="px-6 py-2 bg-accent text-white font-semibold rounded-full shadow-md hover:brightness-95 transition">
            Explore Blogs
          </button>
          <button className="px-6 py-2 bg-transparent border-2 border-accent text-accent font-semibold rounded-full hover:bg-accent hover:text-white transition">
            Learn More
          </button>
        </motion.div>
      </div>

      {/* Right Lottie Animation */}
      <div className="w-full md:w-1/2 flex justify-center items-center py-10 md:py-0">
        <Lottie
          animationData={animationData}
          loop
          className="max-w-[400px] w-full h-auto"
        />
      </div>
    </section>
  );
};

export default Banner;
