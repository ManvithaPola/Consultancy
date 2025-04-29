import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronDown, Globe, MapPin, GraduationCap, BookOpen, Award, X } from 'lucide-react';

// Sample university data
const universitiesData = [
  {
    id: 1,
    name: "Harvard University",
    country: "USA",
    image: "https://assets.collegedunia.com/public/college_data/images/studyabroad/appImage/college_1090_29-15:00_o-HARVARD-UNIVERSITY-BUILDING-facebook.jpeg",
    logo: "https://images.unsplash.com/photo-1591432285854-ea9180fb26e4?w=200&auto=format&fit=crop",
    description: "Harvard University is a private Ivy League research university in Cambridge, Massachusetts, established in 1636.",
    overview: "Founded in 1636, Harvard is the oldest institution of higher education in the United States and one of the most prestigious universities worldwide.",
    courses: ["Business", "Law", "Medicine", "Computer Science", "Arts & Humanities"],
    admissionHighlights: "Highly competitive with acceptance rates below 5%. SAT scores typically range from 1460-1580.",
    scholarships: "Harvard offers need-based financial aid to both domestic and international students, with over $200 million awarded annually."
  },
  {
    id: 2,
    name: "University of Oxford",
    country: "UK",
    image: "https://cdn.britannica.com/03/117103-050-F4C2FC83/view-University-of-Oxford-England-Oxfordshire.jpg",
    logo: "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=200&auto=format&fit=crop",
    description: "The University of Oxford is the oldest university in the English-speaking world and one of the most prestigious academic institutions globally.",
    overview: "With evidence of teaching dating back to 1096, Oxford has a rich history of academic excellence and groundbreaking research.",
    courses: ["Philosophy", "Politics & Economics", "Engineering", "Medicine", "English Literature"],
    admissionHighlights: "Highly selective admission process with rigorous interviews. Strong academic record required.",
    scholarships: "Offers various scholarships including Rhodes, Clarendon, and Oxford-Weidenfeld."
  },
  {
    id: 3,
    name: "University of Melbourne",
    country: "Australia",
    image: "https://edysor.in/images/university/banner/University-of-Melbourne.webp",
    logo: "https://images.unsplash.com/photo-1629904869392-ae2a682d4d01?w=200&auto=format&fit=crop",
    description: "The University of Melbourne is a public research university located in Melbourne, Australia and is the second oldest university in Australia.",
    overview: "Consistently ranked among Australia's top universities and among the world's leading institutions.",
    courses: ["Business & Economics", "Engineering", "Medicine", "Law", "Creative Arts"],
    admissionHighlights: "Requires strong academic credentials with ATAR scores typically above 85 for most programs.",
    scholarships: "Melbourne International Undergraduate Scholarship covers up to 100% of tuition fees for high-achieving students."
  },
  {
    id: 4,
    name: "University of Toronto",
    country: "Canada",
    image: "https://d3d0lqu00lnqvz.cloudfront.net/media/media/UofT_cmh2315fl.jpg",
    logo: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=200&auto=format&fit=crop",
    description: "The University of Toronto is a public research university in Toronto, Ontario, Canada, known for influential movements and curricula in literary criticism and communication theory.",
    overview: "Founded in 1827, U of T is Canada's premier university with excellence across humanities and sciences.",
    courses: ["Computer Science", "Engineering", "Business", "Medicine", "Arts & Science"],
    admissionHighlights: "Competitive admissions with average entry grades above 85%. International students need strong English proficiency.",
    scholarships: "Lester B. Pearson International Scholarship Program covers tuition, books, and living costs."
  },
  {
    id: 5,
    name: "Technical University of Munich",
    country: "Germany",
    image: "https://images.shiksha.com/mediadata/images/1533559592phpsYF8Oy.jpeg",
    logo: "https://images.unsplash.com/photo-1577135841055-64a862ca525a?w=200&auto=format&fit=crop",
    description: "The Technical University of Munich is a research university with campuses in Munich, Garching and Freising-Weihenstephan.",
    overview: "One of Europe's top universities for engineering and natural sciences with a strong focus on innovation.",
    courses: ["Engineering", "Computer Science", "Physics", "Chemistry", "Medicine"],
    admissionHighlights: "Admission based on previous academic performance. Many programs taught in English.",
    scholarships: "Deutschland Stipendium and TUM Foundation Fellowship available for international students."
  },
  {
    id: 6,
    name: "Stanford University",
    country: "USA",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9kLusoGCsICr2RV8w7FevQWHnv3wLmmBOww&s",
    logo: "https://images.unsplash.com/photo-1564644411685-67b6de0ed08c?w=200&auto=format&fit=crop",
    description: "Stanford University is a private research university in Stanford, California, known for its academic strength and wealth.",
    overview: "Located in Silicon Valley, Stanford has been instrumental in the development of the modern technology industry.",
    courses: ["Computer Science", "Engineering", "Business", "Medicine", "Law"],
    admissionHighlights: "Extremely competitive with acceptance rates around 4%. Looks for academic excellence and extracurricular achievements.",
    scholarships: "Need-based financial aid available, with families earning below $75,000 paying no tuition."
  },
  {
    id: 7,
    name: "Trinity College Dublin",
    country: "Ireland",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBT_gthSRDvKclx-NRJSpf7RFW5sBdBuYPhQ&s",
    logo: "https://images.unsplash.com/photo-1569680509663-683f93496230?w=200&auto=format&fit=crop",
    description: "Trinity College Dublin is the sole constituent college of the University of Dublin, Ireland's oldest university.",
    overview: "Founded in 1592, Trinity College is Ireland's most prestigious university with a beautiful historic campus in Dublin city center.",
    courses: ["Business", "Computer Science", "English Literature", "Medicine", "Law"],
    admissionHighlights: "Competitive entry requirements varying by program. International students need strong English language skills.",
    scholarships: "Global Excellence Scholarships available for high-achieving international students."
  },
  {
    id: 8,
    name: "Imperial College London",
    country: "UK",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Z3iOqW5qY-MR2u9OI32PBUMjlVQg8d2wag&s",
    logo: "https://images.unsplash.com/photo-1590508292979-a40b882ad3b7?w=200&auto=format&fit=crop",
    description: "Imperial College London is a public research university located in London focusing on science, engineering, medicine and business.",
    overview: "Consistently ranked among the top universities globally, particularly for science, engineering, and medicine.",
    courses: ["Engineering", "Medicine", "Business", "Computing", "Natural Sciences"],
    admissionHighlights: "Very competitive admissions process requiring top grades. A-levels typically at A*A*A or higher.",
    scholarships: "President's Undergraduate Scholarships and departmental scholarships available."
  }
];

export default function UniversitiesPage() {
  const [activeCountry, setActiveCountry] = useState('All');
  const [expandedUniversity, setExpandedUniversity] = useState(null);
  const [filteredUniversities, setFilteredUniversities] = useState(universitiesData);
  const [searchTerm, setSearchTerm] = useState('');
  
  const countries = ['All', ...new Set(universitiesData.map(uni => uni.country))];
  
  useEffect(() => {
    let filtered = universitiesData;
    
    if (activeCountry !== 'All') {
      filtered = filtered.filter(uni => uni.country === activeCountry);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(uni => 
        uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        uni.country.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredUniversities(filtered);
  }, [activeCountry, searchTerm]);
  
  const toggleUniversityInfo = (id) => {
    setExpandedUniversity(expandedUniversity === id ? null : id);
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="font-['Inter'] text-gray-800 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 md:h-screen max-h-[800px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/90 to-[#0A192F]/70 z-10"></div>
        <img 
          src="https://img.freepik.com/premium-photo/national-museum_78361-2948.jpg?uid=R122682615&ga=GA1.1.675669965.1739375808&semt=ais_hybrid&w=740" 
          alt="University Campus" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Discover the Best Universities Across the Globe
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Partnered with over 500+ Top Institutions Worldwide
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FFC300] hover:bg-yellow-500 text-[#0A192F] font-medium py-3 px-8 rounded-lg shadow-lg flex items-center"
            >
              <Globe className="mr-2 h-5 w-5" />
              Find Your Dream University
            </motion.button>
          </motion.div>
        </div>
      </section>
      
      {/* Search and Filter Section */}
      <section className="py-12 bg-[#F5F7FA]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-[#0A192F] mb-6 md:mb-0">
              Explore Top Universities
            </h2>
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search universities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-3 pl-12 pr-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC300] text-gray-700"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          
          <div className="mb-10 overflow-x-auto pb-2">
            <div className="flex space-x-2 min-w-max">
              {countries.map((country) => (
                <motion.button
                  key={country}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCountry(country)}
                  className={`py-2 px-6 rounded-full font-medium transition-all duration-200 ${
                    activeCountry === country
                      ? 'bg-[#0A192F] text-white shadow-lg'
                      : 'bg-white text-[#0A192F] hover:bg-gray-100'
                  }`}
                >
                  {country}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Universities Grid */}
      <section className="py-16 container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredUniversities.length > 0 ? (
            filteredUniversities.map((university) => (
              <motion.div
                key={university.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={university.image}
                    alt={university.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-100 rounded-full p-1 mr-3">
                      <img
                        src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${
                          university.country === 'USA' ? 'US' : 
                          university.country === 'UK' ? 'GB' : 
                          university.country === 'Australia' ? 'AU' : 
                          university.country === 'Canada' ? 'CA' : 
                          university.country === 'Germany' ? 'DE' : 
                          university.country === 'Ireland' ? 'IE' : 'US'
                        }.svg`}
                        alt={university.country}
                        className="w-6 h-6 rounded-full"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-500">{university.country}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0A192F] mb-3">{university.name}</h3>
                  <p className="text-gray-600 mb-6 line-clamp-2">{university.description}</p>
                  
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => toggleUniversityInfo(university.id)}
                    className={`w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-all ${
                      expandedUniversity === university.id
                        ? 'bg-[#0A192F] text-white'
                        : 'bg-[#F5F7FA] text-[#0A192F] hover:bg-[#FFC300]/20'
                    }`}
                  >
                    {expandedUniversity === university.id ? (
                      <>
                        <X className="mr-2 h-4 w-4" />
                        Hide Details
                      </>
                    ) : (
                      <>
                        <ChevronDown className="mr-2 h-4 w-4" />
                        More Information
                      </>
                    )}
                  </motion.button>
                  
                  {expandedUniversity === university.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 pt-6 border-t border-gray-200"
                    >
                      <div className="mb-4">
                        <div className="flex items-center mb-2">
                          <GraduationCap className="text-[#FFC300] mr-2 h-5 w-5" />
                          <h4 className="font-semibold text-[#0A192F]">University Overview</h4>
                        </div>
                        <p className="text-gray-600 text-sm ml-7">{university.overview}</p>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex items-center mb-2">
                          <BookOpen className="text-[#FFC300] mr-2 h-5 w-5" />
                          <h4 className="font-semibold text-[#0A192F]">Key Courses</h4>
                        </div>
                        <div className="flex flex-wrap gap-2 ml-7">
                          {university.courses.map((course, index) => (
                            <span key={index} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex items-center mb-2">
                          <MapPin className="text-[#FFC300] mr-2 h-5 w-5" />
                          <h4 className="font-semibold text-[#0A192F]">Admission Highlights</h4>
                        </div>
                        <p className="text-gray-600 text-sm ml-7">{university.admissionHighlights}</p>
                      </div>
                      
                      <div>
                        <div className="flex items-center mb-2">
                          <Award className="text-[#FFC300] mr-2 h-5 w-5" />
                          <h4 className="font-semibold text-[#0A192F]">Scholarships</h4>
                        </div>
                        <p className="text-gray-600 text-sm ml-7">{university.scholarships}</p>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-3 text-center py-16">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Search className="mx-auto h-16 w-16 text-gray-300 mb-4" />
                <h3 className="text-2xl font-bold text-gray-700 mb-2">No Universities Found</h3>
                <p className="text-gray-500">
                  Try adjusting your search or filter to find more options.
                </p>
              </motion.div>
            </div>
          )}
        </motion.div>
      </section>
      
      
      
      
    </div>
  );
}