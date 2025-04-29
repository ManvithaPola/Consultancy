import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Typography, Box } from '@mui/material';

const testimonials = [
  {
    id: 1,
    name: "Sophia Martinez",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&fit=facearea&facepad=2",
    university: "University of Oxford, UK",
    beforeStory: "I was unsure if my profile was strong enough for top universities in the UK.",
    afterStory: "Thanks to Univista's personalized guidance, I secured admission with scholarship to Oxford!",
    rating: 5
  },
  {
    id: 2,
    name: "James Wilson",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&fit=facearea&facepad=2",
    university: "ETH Zurich, Switzerland",
    beforeStory: "The complex application process for European universities seemed overwhelming.",
    afterStory: "Univista simplified everything and helped me craft the perfect application for ETH Zurich.",
    rating: 5
  },
  {
    id: 3,
    name: "Aisha Patel",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&fit=facearea&facepad=2",
    university: "University of Toronto, Canada",
    beforeStory: "I had multiple rejections before coming to Univista due to my average GPA.",
    afterStory: "Their counselors helped highlight my strengths in other areas, and I'm now thriving at UofT!",
    rating: 5
  },
  {
    id: 4,
    name: "David Kim",
    photo: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&fit=facearea&facepad=2",
    university: "University of Melbourne, Australia",
    beforeStory: "I was struggling with visa requirements and funding options for Australian universities.",
    afterStory: "Univista's visa experts and scholarship guidance made my Melbourne dream come true.",
    rating: 5
  },
  {
    id: 5,
    name: "Elena Rodriguez",
    photo: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&fit=facearea&facepad=2",
    university: "Sorbonne University, France",
    beforeStory: "The language barrier and cultural differences made me hesitant about studying in France.",
    afterStory: "Univista provided language preparation and cultural orientation that gave me confidence to succeed!",
    rating: 5
  }
];

// Animation variants for the heading
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Animation variants for testimonials
const slideVariants = {
  hiddenRight: { x: 100, opacity: 0 },
  hiddenLeft: { x: -100, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { 
      duration: 0.5,
      ease: "easeOut"
    }
  },
  exit: (direction) => ({
    x: direction === "left" ? 100 : -100,
    opacity: 0,
    transition: { 
      duration: 0.3,
      ease: "easeIn"
    }
  })
};

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll through testimonials
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setDirection("right");
        setActiveIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 6000);
      
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const nextTestimonial = () => {
    setDirection("right");
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setDirection("left");
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Generate stars based on rating
  const renderStars = (rating) => {
    return Array(rating).fill().map((_, i) => (
      <span key={i} className="text-yellow-400">★</span>
    ));
  };

  return (
    <div 
      className="py-16 bg-gray-50"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold mb-4 text-gray-800 font-montserrat tracking-tight"
          >
            Student Success Stories
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="h-1 w-24 bg-blue-600 mx-auto mb-8"
          />
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-700 max-w-3xl mx-auto"
          >
            Hear from our students about their transformative experiences with Univista's guidance
          </motion.p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <motion.div 
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
            whileHover={{ scale: 1.005 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div 
              custom={direction}
              variants={slideVariants}
              initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
              animate="visible"
              exit="exit"
              key={activeIndex}
              className="flex flex-col md:flex-row"
            >
              <div className="w-full md:w-1/3 p-6 flex flex-col items-center">
                <div className="relative mb-4">
                  <img 
                    src={testimonials[activeIndex].photo} 
                    alt={testimonials[activeIndex].name} 
                    className="w-32 h-32 rounded-full object-contain border-4 border-white shadow-md"
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                    {testimonials[activeIndex].university.split(',')[0]}
                  </div>
                </div>
                <Typography variant="h6" className="font-bold text-center text-gray-900">
                  {testimonials[activeIndex].name}
                </Typography>
                <Typography variant="body2" className="text-gray-500 text-center mb-2">
                  {testimonials[activeIndex].university}
                </Typography>
                <div className="flex">
                  {renderStars(testimonials[activeIndex].rating)}
                </div>
              </div>
              
              <div className="w-full md:w-2/3 p-6 md:p-8 flex flex-col justify-center bg-gray-50">
                <div className="relative">
                  <Quote className="absolute -top-6 -left-2 text-gray-200 opacity-70" size={48} />
                  <Box className="mb-6">
                    <Typography variant="body1" className="text-gray-700 italic mb-4 relative z-10">
                      "{testimonials[activeIndex].beforeStory}"
                    </Typography>
                    
                    <div className="flex items-center mb-4">
                      <div className="h-px bg-gray-200 flex-1"></div>
                      <div className="mx-4 text-gray-400 text-sm">After Univista</div>
                      <div className="h-px bg-gray-200 flex-1"></div>
                    </div>
                    
                    <Typography variant="body1" className="text-gray-700 font-medium relative z-10">
                      "{testimonials[activeIndex].afterStory}"
                    </Typography>
                  </Box>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > activeIndex ? "right" : "left");
                  setActiveIndex(index);
                }}
                className={`w-2 h-2 rounded-full ${index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
          
          {/* Navigation arrows */}
          <motion.button 
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md text-gray-600 hover:text-blue-600 z-10 border border-gray-200"
            onClick={prevTestimonial}
            whileHover={{ scale: 1.1, backgroundColor: '#f8fafc' }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft size={24} />
          </motion.button>
          
          <motion.button 
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md text-gray-600 hover:text-blue-600 z-10 border border-gray-200"
            onClick={nextTestimonial}
            whileHover={{ scale: 1.1, backgroundColor: '#f8fafc' }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;