import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Globe, Briefcase, Award } from 'lucide-react';

const Hero = () => {
  // Animation variants for text elements
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  // Animation variants for floating icons
  const floatingIcons = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: custom * 0.3,
        duration: 0.6,
        ease: "easeOut",
        yoyo: Infinity,
      }
    }),
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  // Array of icon components to display
  const icons = [
    { icon: GraduationCap, color: "text-yellow-300", delay: 1 },
    { icon: BookOpen, color: "text-blue-400", delay: 1.3 },
    { icon: Globe, color: "text-green-400", delay: 1.6 },
    { icon: Briefcase, color: "text-purple-400", delay: 1.9 },
    { icon: Award, color: "text-red-400", delay: 2.2 }
  ];

  // URL for the background image
  const heroImageUrl = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with parallax effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        animate={{ 
          y: [0, -20],
          scale: [1, 1.05]
        }}
        transition={{ 
          y: { 
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          },
          scale: {
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }
        }}
      />
      
      {/* Navy blue overlay */}
      <div 
        className="absolute inset-0 z-10" 
        style={{ backgroundColor: 'rgba(10, 25, 47, 0.85)' }}
      />
      
      {/* Content container */}
      <div className="container mx-auto px-4 z-20 text-center relative">
        <div className="max-w-4xl mx-auto">
          {/* Main headline */}
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-montserrat leading-tight"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeIn}
          >
            Achieve Your <span className="text-yellow-300">Global Education</span> Dream
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 mb-10 font-montserrat"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeIn}
          >
            We help you navigate the journey of studying abroad, every step of the way.
          </motion.p>
          
          {/* CTA Button */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeIn}
          >
            <motion.button 
              className="bg-yellow-300 text-navy-900 font-bold py-3 px-8 rounded-lg text-lg font-montserrat shadow-lg"
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "#FFD60A",
                boxShadow: "0 10px 25px -5px rgba(255, 195, 0, 0.4)"
              }}
              transition={{ duration: 0.2 }}
            >
              Start Your Journey
            </motion.button>
          </motion.div>
          
          {/* Floating icons */}
          <div className="absolute inset-0 pointer-events-none">
            {icons.map((item, index) => {
              // Calculate position values for icons to be distributed around hero section
              const positions = [
                { top: '15%', left: '15%' },
                { top: '25%', right: '20%' },
                { bottom: '30%', left: '10%' },
                { bottom: '20%', right: '15%' },
                { top: '40%', left: '80%' }
              ];
              
              const Icon = item.icon;
              
              return (
                <motion.div
                  key={index}
                  className={`absolute ${item.color}`}
                  style={positions[index]}
                  initial="hidden"
                  animate={["visible", "float"]}
                  custom={item.delay}
                  variants={floatingIcons}
                >
                  <Icon size={40} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;