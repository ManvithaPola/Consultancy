import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  ExternalLink, 
  ChevronRight,
  School,
  Users,
  Clock,
  DollarSign
} from 'lucide-react';

const TopDestinationsSection = () => {
  const destinations = [
    {
      id: 1,
      name: "United States",
      description: "Home to world-renowned universities like Harvard, MIT, and Stanford, offering cutting-edge research facilities.",
      image: "https://img.freepik.com/free-photo/statue-liberty-new-york-city-skyline-usa_268835-777.jpg?uid=R122682615&ga=GA1.1.675669965.1739375808&semt=ais_hybrid&w=740",
      facts: [
        { icon: <School size={16} />, text: "4,000+ colleges" },
        { icon: <Users size={16} />, text: "1M+ students" },
        { icon: <Clock size={16} />, text: "4-year programs" }
      ],
      topUniversities: ["Harvard", "MIT", "Stanford", "Caltech"],
      color: "from-blue-600 to-red-600"
    },
    {
      id: 2,
      name: "United Kingdom",
      description: "Prestigious education at Oxford and Cambridge with shorter programs and global recognition.",
      image: "https://img.freepik.com/premium-photo/london-city-skyline-united-kindom_131985-130.jpg?uid=R122682615&ga=GA1.1.675669965.1739375808&semt=ais_hybrid&w=740",
      facts: [
        { icon: <School size={16} />, text: "160+ universities" },
        { icon: <Users size={16} />, text: "600K+ students" },
        { icon: <Clock size={16} />, text: "3-year programs" }
      ],
      topUniversities: ["Oxford", "Cambridge", "Imperial", "UCL"],
      color: "from-red-600 to-blue-700"
    },
    {
      id: 3,
      name: "Canada",
      description: "High-quality education with affordable tuition and excellent post-study work opportunities.",
      image: "https://img.freepik.com/premium-photo/ferry-boat-docked-along-vancouver-canada_67340-61.jpg?uid=R122682615&ga=GA1.1.675669965.1739375808&semt=ais_hybrid&w=740",
      facts: [
        { icon: <School size={16} />, text: "100+ universities" },
        { icon: <Users size={16} />, text: "600K+ students" },
        { icon: <DollarSign size={16} />, text: "Affordable tuition" }
      ],
      topUniversities: ["Toronto", "McGill", "UBC", "McMaster"],
      color: "from-red-600 to-red-700"
    },
    {
      id: 4,
      name: "Australia",
      description: "World-class education system with excellent quality of life and strong research opportunities.",
      image: "https://img.freepik.com/premium-photo/building-with-bridge-background-sydney-harbour-bridge-background_1239886-3475.jpg?uid=R122682615&ga=GA1.1.675669965.1739375808&semt=ais_hybrid&w=740",
      facts: [
        { icon: <School size={16} />, text: "43 universities" },
        { icon: <Users size={16} />, text: "750K+ students" },
        { icon: <Clock size={16} />, text: "Work rights" }
      ],
      topUniversities: ["Melbourne", "ANU", "Sydney", "UNSW"],
      color: "from-blue-500 to-yellow-500"
    },
    {
      id: 5,
      name: "Germany",
      description: "Tuition-free education at public universities with globally recognized engineering programs.",
      image: "https://img.freepik.com/premium-photo/berlin-reichstag-building-bundestag-parliament-government-germany_770123-1520.jpg?uid=R122682615&ga=GA1.1.675669965.1739375808&semt=ais_hybrid&w=740",
      facts: [
        { icon: <School size={16} />, text: "400+ universities" },
        { icon: <Users size={16} />, text: "400K+ students" },
        { icon: <DollarSign size={16} />, text: "Low/no tuition" }
      ],
      topUniversities: ["TUM", "LMU", "Heidelberg", "Humboldt"],
      color: "from-yellow-500 to-red-600 to-black"
    },
    {
      id: 6,
      name: "Singapore",
      description: "Global hub for education excellence with strong connections to industries across Asia.",
      image: "https://img.freepik.com/free-photo/architecture-independence-palace-ho-chi-minh-city_181624-21243.jpg?uid=R122682615&ga=GA1.1.675669965.1739375808&semt=ais_hybrid&w=740",
      facts: [
        { icon: <School size={16} />, text: "6 universities" },
        { icon: <Users size={16} />, text: "75K+ students" },
        { icon: <Clock size={16} />, text: "English instruction" }
      ],
      topUniversities: ["NUS", "NTU", "SMU", "SUTD"],
      color: "from-red-600 to-white"
    }
  ];

  return (
    <section className="py-16 bg-white" id="top-destinations">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Top Study Destinations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore prestigious universities and educational opportunities worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <DestinationCard 
              key={destination.id} 
              destination={destination} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const DestinationCard = ({ destination, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: index * 0.1, 
        duration: 0.5,
        ease: "easeOut"
      }}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{
        y: -5,
        transition: { 
          duration: 0.3,
          ease: "easeInOut"
        }
      }}
    >
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
          initial={{ scale: 1 }}
          animate={{ 
            scale: isHovered ? 1.05 : 1,
            transition: { 
              duration: 0.5,
              ease: "easeInOut"
            }
          }}
        />
        <div className={`absolute top-0 right-0 w-16 h-16 overflow-hidden`}>
          <div className={`absolute transform rotate-45 bg-gradient-to-r ${destination.color} w-24 h-4 top-6 -right-6`}></div>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{destination.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{destination.description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
            <School size={16} className="mr-1" />
            Top Universities
          </h4>
          <ul className="space-y-1">
            {destination.topUniversities.map((uni, i) => (
              <li key={i} className="text-sm text-gray-600 flex items-center">
                <ChevronRight size={14} className="text-blue-500 mr-1" />
                {uni}
              </li>
            ))}
          </ul>
        </div>

        <motion.button 
          className="text-blue-600 text-sm font-medium flex items-center hover:text-blue-800 transition-colors"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          Explore options
          <ChevronRight size={16} className="ml-1" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default TopDestinationsSection;