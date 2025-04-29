import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Calendar, FileText, Stamp, PlaneTakeoff } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      id: 1,
      title: "Free Consultation",
      description: "Schedule a personalized consultation with our expert advisors to discuss your academic goals, preferences, and budget.",
      icon: <Calendar size={36} className="text-blue-600" />
    },
    {
      id: 2,
      title: "University Selection",
      description: "Our team will research and recommend universities that best match your requirements.",
      icon: <Globe size={36} className="text-blue-600" />
    },
    {
      id: 3,
      title: "Application Support",
      description: "Guidance through the entire application process, from documents to personal statements.",
      icon: <FileText size={36} className="text-blue-600" />
    },
    {
      id: 4,
      title: "Visa Guidance",
      description: "Comprehensive visa support including interview preparation and documentation.",
      icon: <Stamp size={36} className="text-blue-600" />
    },
    {
      id: 5,
      title: "Pre-Departure Assistance",
      description: "Guidance covering accommodation, travel, and cultural orientation.",
      icon: <PlaneTakeoff size={36} className="text-blue-600" />
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-[#0A192F] mb-4"
          >
            How It Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Your journey to studying abroad is just a few steps away.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <StepCard key={step.id} step={step} index={index} />
          ))}
        </div>
        
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 shadow-md">
            Book Your Free Consultation
          </button>
        </motion.div> */}
      </div>
    </section>
  );
};

const StepCard = ({ step, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
          {step.icon}
        </div>
        
        <div className="w-8 h-8 rounded-full bg-[#0A192F] text-white font-medium mb-3 flex items-center justify-center">
          {step.id}
        </div>
        
        <h3 className="text-xl font-semibold text-[#0A192F] mb-3">{step.title}</h3>
        
        <p className="text-gray-600 text-sm">{step.description}</p>
      </div>
    </motion.div>
  );
};

export default HowItWorksSection;