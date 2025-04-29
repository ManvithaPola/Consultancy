import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full h-screen md:h-96 lg:h-[600px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://img.freepik.com/premium-photo/happy-tourist-surfing-internet-seeing-sights_926199-2724859.jpg?uid=R122682615&ga=GA1.1.675669965.1739375808&semt=ais_hybrid&w=740"
          alt="University Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0A192F] bg-opacity-60"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center p-4 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="font-bold font-montserrat text-3xl md:text-4xl lg:text-5xl text-white mb-4 md:mb-6">
            Your Journey to <span className="text-[#FFC300]">Global Education</span> Starts Here
          </h1>
          <p className="text-white text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
            At Univista, we've helped thousands of students transform their educational aspirations into reality through our expert guidance and personalized approach.
          </p>
          
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)" 
            }}
            transition={{ duration: 0.2 }}
            className="bg-[#FFC300] text-[#0A192F] font-bold py-3 px-6 rounded-md inline-flex items-center text-lg transition-all"
          >
            Free Consultation
            <ChevronRight className="ml-2 h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutHero;