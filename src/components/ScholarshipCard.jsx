import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Calendar, FileText, Award, Check } from 'lucide-react';

const ScholarshipCard = ({ scholarship }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-lg overflow-hidden"
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative h-48 overflow-hidden">
        <motion.img 
          src={scholarship.image} 
          alt={scholarship.title}
          className="w-full h-full object-cover rounded-t-2xl"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute top-4 right-4 bg-[#FFC300] text-[#0A192F] font-bold py-1 px-3 rounded-full">
          {scholarship.country}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#0A192F] mb-2">{scholarship.title}</h3>
        <p className="text-gray-600 mb-4">
          <span className="font-medium">Eligible Universities:</span>{" "}
          {scholarship.universities.join(", ")}
        </p>
        
        <motion.button 
          className="flex items-center justify-center w-full bg-[#F5F7FA] text-[#0A192F] font-medium py-2 rounded-lg hover:bg-gray-200 transition-colors"
          onClick={toggleExpand}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isExpanded ? (
            <>
              <span>Show Less</span>
              <ChevronUp className="ml-2 h-5 w-5" />
            </>
          ) : (
            <>
              <span>Learn More</span>
              <ChevronDown className="ml-2 h-5 w-5" />
            </>
          )}
        </motion.button>
        
        <AnimatePresence>
          {isExpanded && (
            <motion.div 
              className="mt-4 border-t border-gray-200 pt-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex items-start gap-3 mb-3">
                <Award className="h-5 w-5 text-[#FFC300] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-[#0A192F]">Scholarship Amount</h4>
                  <p className="text-gray-700">{scholarship.amount}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 mb-3">
                <Check className="h-5 w-5 text-[#FFC300] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-[#0A192F]">Eligibility Criteria</h4>
                  <p className="text-gray-700">{scholarship.eligibility}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 mb-3">
                <Calendar className="h-5 w-5 text-[#FFC300] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-[#0A192F]">Application Deadline</h4>
                  <p className="text-gray-700">{scholarship.deadline}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <FileText className="h-5 w-5 text-[#FFC300] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-[#0A192F]">Application Process</h4>
                  <p className="text-gray-700">{scholarship.process}</p>
                </div>
              </div>
              
              <button className="mt-4 w-full bg-[#0A192F] text-white font-medium py-2 rounded-lg hover:bg-[#0e2a49] transition-colors">
                Apply Now
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ScholarshipCard;