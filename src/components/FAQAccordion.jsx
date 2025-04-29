import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Typography, Box } from '@mui/material';

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What services does Univista offer to international students?",
      answer: "Univista offers comprehensive abroad study services including university selection guidance, application assistance, visa support, pre-departure orientation, accommodation arrangements, and post-arrival support. Our dedicated counselors provide personalized guidance throughout your educational journey."
    },
    {
      question: "How do I begin the process of studying abroad with Univista?",
      answer: "Starting your abroad journey with Univista is simple. First, schedule a free consultation with our counselors where we'll assess your academic background, goals, and preferences. We'll then create a customized roadmap including university options, application timelines, and financial planning to guide you through the entire process."
    },
    {
      question: "What are the typical requirements for studying abroad?",
      answer: "Requirements vary by country and institution, but typically include academic transcripts, standardized test scores (IELTS/TOEFL for English proficiency, GRE/GMAT for graduate programs), statement of purpose, recommendation letters, and proof of financial support. Univista helps you understand specific requirements for your target universities and prepares you accordingly."
    },
    {
      question: "How long does the visa application process take?",
      answer: "Visa processing times vary by country, ranging from 2-12 weeks. For popular destinations like the US, UK, Canada, and Australia, we recommend beginning the visa application process at least 3-4 months before your intended departure. Our visa experts will guide you through document preparation and interview coaching to maximize your chances of approval."
    },
    {
      question: "Are there scholarship opportunities available for international students?",
      answer: "Yes, numerous scholarships are available for international students based on academic merit, financial need, country of origin, and field of study. Univista has a dedicated scholarship database and our counselors will help identify suitable opportunities and assist with scholarship applications to help reduce your educational expenses."
    },
    {
      question: "How does Univista assist with accommodation arrangements?",
      answer: "Univista partners with universities and housing providers worldwide to offer various accommodation options including on-campus dormitories, off-campus apartments, and homestays. We consider your budget, preferences, and safety requirements to recommend suitable accommodation and assist with the booking process before your arrival."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Animation variants for heading
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

  return (
    <Box className="w-full py-16 bg-white">
      <Box className="max-w-4xl mx-auto px-4">
        {/* Heading matching Services section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold mb-4 text-gray-800 font-montserrat tracking-tight"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="h-1 w-24 bg-blue-600 mx-auto mb-6"
          />
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Find answers to common questions about our services and processes
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <Box className="space-y-4">
          {faqData.map((faq, index) => (
            <Box 
              key={index} 
              className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 hover:shadow-sm"
            >
              <Box 
                onClick={() => toggleAccordion(index)}
                className={`flex justify-between items-center p-5 cursor-pointer ${
                  activeIndex === index ? 'bg-blue-50' : 'hover:bg-gray-50'
                }`}
              >
                <Typography 
                  variant="h6" 
                  className="font-small text-base md:text-[0.8rem] pr-4"
                  style={{ 
                    fontFamily: 'Roboto, sans-serif', 
                    color: '#0A192F',
                    lineHeight: '1.5'
                  }}
                >
                  {faq.question}
                </Typography>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <ChevronDown 
                    size={22} 
                    className="text-gray-600 min-w-5" 
                  />
                </motion.div>
              </Box>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: 'auto', 
                      opacity: 1,
                      transition: {
                        height: { duration: 0.3, ease: "easeOut" },
                        opacity: { duration: 0.2, delay: 0.1 }
                      }
                    }}
                    exit={{ 
                      height: 0, 
                      opacity: 0,
                      transition: {
                        height: { duration: 0.2 },
                        opacity: { duration: 0.1 }
                      }
                    }}
                  >
                    <Box className="px-5 pb-5 pt-2 bg-gray-50">
                      <Typography 
                        variant="body1" 
                        className="text-gray-700 text-[0.95rem]"
                        style={{ 
                          fontFamily: 'Roboto, sans-serif',
                          lineHeight: '1.7'
                        }}
                      >
                        {faq.answer}
                      </Typography>
                    </Box>
                  </motion.div>
                )}
              </AnimatePresence>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default FAQAccordion;