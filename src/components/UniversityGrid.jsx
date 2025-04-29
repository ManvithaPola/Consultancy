import React from 'react';
import { motion } from 'framer-motion';

const universities = [
  {
    id: 1,
    name: "Harvard University",
    country: "USA",
    image: "https://assets.collegedunia.com/public/college_data/images/studyabroad/appImage/college_1090_29-15:00_o-HARVARD-UNIVERSITY-BUILDING-facebook.jpeg",
    tagline: "Offers 20+ scholarships yearly"
  },
  {
    id: 2,
    name: "University of Oxford",
    country: "UK",
    image: "https://cdn.britannica.com/03/117103-050-F4C2FC83/view-University-of-Oxford-England-Oxfordshire.jpg",
    tagline: "Offers 15+ scholarships yearly"
  },
  {
    id: 3,
    name: "University of Toronto",
    country: "Canada",
    image: "https://d3d0lqu00lnqvz.cloudfront.net/media/media/UofT_cmh2315fl.jpg",
    tagline: "Offers 12+ scholarships yearly"
  },
  {
    id: 4,
    name: "University of Melbourne",
    country: "Australia",
    image: "https://edysor.in/images/university/banner/University-of-Melbourne.webp",
    tagline: "Offers 10+ scholarships yearly"
  },
  {
    id: 5,
    name: "National University of Singapore",
    country: "Singapore",
    image: "https://nusgs.nus.edu.sg/wp-content/uploads/nusgs-assets/images/home-events/yfp/Education_Resource_Centre_02.jpg",
    tagline: "Offers 8+ scholarships yearly"
  },
  {
    id: 6,
    name: "Technical University of Munich",
    country: "Germany",
    image: "https://images.shiksha.com/mediadata/images/1533559592phpsYF8Oy.jpeg",
    tagline: "Offers 10+ scholarships yearly"
  }
];

const UniversityGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {universities.map((university) => (
        <motion.div
          key={university.id}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
          whileHover={{ scale: 1.03, y: -5 }}
          transition={{ duration: 0.3 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="h-48 overflow-hidden">
            <motion.img
              src={university.image}
              alt={university.name}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
          </div>
          
          <div className="p-6">
            <div className="inline-block bg-[#F5F7FA] text-[#0A192F] font-medium px-3 py-1 rounded-full text-sm mb-3">
              {university.country}
            </div>
            <h3 className="text-xl font-bold text-[#0A192F] mb-2">{university.name}</h3>
            <p className="text-gray-600">{university.tagline}</p>
            
            <div className="mt-4 flex justify-between items-center">
              <span className="text-sm text-gray-500">QS Rank: Top 100</span>
              <motion.button 
                className="text-[#0A192F] font-medium hover:text-[#FFC300] transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                View Details
              </motion.button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default UniversityGrid;