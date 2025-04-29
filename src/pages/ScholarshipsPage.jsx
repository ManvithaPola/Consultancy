import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ScholarshipsHero from '../components/ScholarshipsHero';
import ScholarshipFilters from '../components/ScholarshipFilters';
import ScholarshipCard from '../components/ScholarshipCard';
import UniversityGrid from '../components/UniversityGrid';
import ScholarshipTimeline from '../components/ScholarshipTimeline';

// Sample scholarship data
const scholarshipsData = [
  {
    id: 1,
    title: "Global Excellence Scholarship",
    universities: ["Harvard University", "Stanford University", "MIT"],
    country: "USA",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4w6_Sm7yYj29uIIW8U9b83HifneMfFjOiIA&s",
    amount: "$50,000 per year",
    eligibility: "GPA 3.8+, SAT 1500+, Strong extracurriculars",
    deadline: "December 15, 2025",
    process: "Online application, essay submission, recommendation letters"
  },
  {
    id: 2,
    title: "Commonwealth Scholarship",
    universities: ["University of Oxford", "University of Cambridge", "Imperial College London"],
    country: "UK",
    image: "https://sirp.mgu.ac.in/wp-content/uploads/2023/09/Yoast-social-logo.jpg",
    amount: "Full tuition + £1,000 monthly stipend",
    eligibility: "First class honors degree, research proposal, citizenship requirements",
    deadline: "January 10, 2026",
    process: "Application through national agency, academic references, research proposal"
  },
  {
    id: 3,
    title: "Maple Leaf Future Leaders",
    universities: ["University of Toronto", "McGill University", "University of British Columbia"],
    country: "Canada",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf9xSKOnXw0QFRVtiCUudvJd6D8kl2Gp-JUw&s",
    amount: "CAD 25,000 per year",
    eligibility: "GPA 3.5+, IELTS 7.0+, Leadership experience",
    deadline: "February 28, 2026",
    process: "Online application, statement of purpose, video interview"
  },
  {
    id: 4,
    title: "Aussie Academic Excellence",
    universities: ["University of Melbourne", "Australian National University", "University of Sydney"],
    country: "Australia",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEmXNxWBz1PAAFNaHkGRskyG7_z1hFfI3FnA&s",
    amount: "AUD 30,000 per year",
    eligibility: "WAM of 80+, personal statement, two academic references",
    deadline: "March 31, 2026",
    process: "Direct university application, academic transcript, proof of achievements"
  },
  {
    id: 5,
    title: "DAAD Study Scholarship",
    universities: ["Technical University of Munich", "Heidelberg University", "Humboldt University"],
    country: "Germany",
    image: "https://www.studying-in-germany.org/wp-content/uploads/2019/11/daad-scholarship.jpg",
    amount: "€850 monthly + travel allowance",
    eligibility: "Bachelor's degree, C1 German or B2 English, letter of acceptance",
    deadline: "October 15, 2025",
    process: "DAAD portal application, language certificates, university acceptance"
  },
  {
    id: 6,
    title: "Emerald Isle Education Grant",
    universities: ["Trinity College Dublin", "University College Dublin", "University of Galway"],
    country: "Ireland",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShObfWZvF6unozslPxHElaTpMbfdhW1XowKg&s",
    amount: "€15,000 total",
    eligibility: "GPA 3.3+, IELTS 6.5+, promising research/study proposal",
    deadline: "April 30, 2026",
    process: "Online government portal application, motivation letter, research abstract"
  }
];

const ScholarshipsPage = () => {
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [filteredScholarships, setFilteredScholarships] = useState(scholarshipsData);
  
  const filterScholarships = (country) => {
    setSelectedCountry(country);
    if (country === 'All') {
      setFilteredScholarships(scholarshipsData);
    } else {
      setFilteredScholarships(scholarshipsData.filter(scholarship => 
        scholarship.country === country
      ));
    }
  };

  // Animation variants
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
    <div className="min-h-screen bg-white">
      <ScholarshipsHero />
      
      <motion.div 
        className="container mx-auto px-4 py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0A192F]">
            Available Scholarships by Destination
          </h2>
          <ScholarshipFilters 
            selectedCountry={selectedCountry} 
            onFilter={filterScholarships} 
          />
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
            layout
          >
            {filteredScholarships.map(scholarship => (
              <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
            ))}
          </motion.div>
        </motion.section>
        
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0A192F]">
            Top Universities Offering Scholarships
          </h2>
          <UniversityGrid />
        </motion.section>
        
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0A192F]">
            Our Scholarship Application Process
          </h2>
          <ScholarshipTimeline />
        </motion.section>
        
        
      </motion.div>
    </div>
  );
};

export default ScholarshipsPage;