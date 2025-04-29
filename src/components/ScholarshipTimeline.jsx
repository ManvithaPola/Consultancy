import React from 'react';
import { motion } from 'framer-motion';
import { Search, List, FileText, Send, Award } from 'lucide-react';

const timelineSteps = [
  {
    id: 1,
    icon: <Search className="h-8 w-8" />,
    title: "Initial Counseling",
    description: "Our experts assess your profile and academic goals to identify suitable scholarship opportunities."
  },
  {
    id: 2,
    icon: <List className="h-8 w-8" />,
    title: "Scholarship Shortlisting",
    description: "We create a customized list of scholarships that match your qualifications and aspirations."
  },
  {
    id: 3,
    icon: <FileText className="h-8 w-8" />,
    title: "Document Preparation",
    description: "Get assistance with essays, recommendation letters, and all required documentation."
  },
  {
    id: 4,
    icon: <Send className="h-8 w-8" />,
    title: "Application Submission",
    description: "We guide you through the submission process, ensuring all requirements are met."
  },
  {
    id: 5,
    icon: <Award className="h-8 w-8" />,
    title: "Results & Support",
    description: "Receive continuous support through the waiting period and guidance once results are announced."
  }
];

const ScholarshipTimeline = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="max-w-5xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
        
        {/* Timeline steps */}
        {timelineSteps.map((step, index) => (
          <motion.div 
            key={step.id}
            className={`relative flex ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } mb-12 last:mb-0`}
            variants={itemVariants}
          >
            {/* Center dot */}
            <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 w-8 h-8 rounded-full bg-[#FFC300] border-4 border-white shadow-lg z-10"></div>
            
            {/* Content */}
            <div className={`ml-16 lg:ml-0 ${
              index % 2 === 0 ? 'lg:mr-16 lg:pr-16' : 'lg:ml-16 lg:pl-16'
            } w-full lg:w-1/2`}>
              <motion.div 
                className="bg-white p-6 rounded-2xl shadow-lg"
                whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start">
                  <div className="bg-[#F5F7FA] p-3 rounded-xl text-[#0A192F] mr-4">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0A192F] mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ScholarshipTimeline;