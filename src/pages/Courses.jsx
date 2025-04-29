import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Globe, ChevronDown, BookOpen, Award, Briefcase, Users, Heart, MapPin, Filter, X } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedUniversity, setSelectedUniversity] = useState(null);

  // Unsplash image URLs
  const unsplashImages = {
    heroImage: 'https://img.freepik.com/premium-photo/business-graph-trade-monitor-mixed-media_641298-1065.jpg?uid=R122682615&ga=GA1.1.675669965.1739375808&semt=ais_hybrid&w=740',
    engineering: 'https://img.freepik.com/free-photo/photovoltaics-factory-manager-arriving-office-visualizing-designs-pc_482257-118058.jpg?uid=R122682615&ga=GA1.1.675669965.1739375808&semt=ais_hybrid&w=740',
    business: 'https://img.freepik.com/free-photo/business-scene-top-view_23-2147626514.jpg?uid=R122682615&ga=GA1.1.675669965.1739375808&semt=ais_hybrid&w=740',
    computerScience: 'https://img.freepik.com/free-photo/programming-background-collage_23-2149901789.jpg?uid=R122682615&ga=GA1.1.675669965.1739375808&semt=ais_hybrid&w=740',
    medicine: 'https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg?uid=R122682615&ga=GA1.1.675669965.1739375808&semt=ais_hybrid&w=740',
    artDesign: 'https://img.freepik.com/premium-photo/geometric-shapes-structure-empty-concrete-floor-with-white-wall-hall-modern-showroom_926199-2257841.jpg?uid=R122682615&ga=GA1.1.675669965.1739375808&semt=ais_hybrid&w=740',
    law: 'https://img.freepik.com/free-photo/front-view-blurry-lawyer-working_23-2151202429.jpg?uid=R122682615&ga=GA1.1.675669965.1739375808&semt=ais_hybrid&w=740',
    socialSciences: 'https://img.freepik.com/premium-photo/concept-equal-rights-people-with-physical-disabilities_883586-18331.jpg?uid=R122682615&ga=GA1.1.675669965.1739375808&semt=ais_hybrid&w=740',
    environmental: 'https://img.freepik.com/free-photo/plant-growing-from-soil_23-2151729539.jpg?uid=R122682615&ga=GA1.1.675669965.1739375808&semt=ais_hybrid&w=740',
    hospitality: 'https://img.freepik.com/free-photo/receptionists-elegant-suits-work-hours_23-2149714461.jpg?uid=R122682615&ga=GA1.1.675669965.1739375808&semt=ais_hybrid&w=740',
    education: 'https://img.freepik.com/free-photo/close-up-team-leader-explaining-board_23-2148868450.jpg?uid=R122682615&ga=GA1.1.675669965.1739375808&semt=ais_hybrid&w=740',
    media: 'https://img.freepik.com/free-photo/social-media-marketing-concept-marketing-with-applications_23-2150063134.jpg?uid=R122682615&ga=GA1.1.675669965.1739375808&semt=ais_hybrid&w=740',
    universityToronto: 'https://d3d0lqu00lnqvz.cloudfront.net/media/media/UofT_cmh2315fl.jpg',
    universityHarvard: 'https://assets.collegedunia.com/public/college_data/images/studyabroad/appImage/college_1090_29-15:00_o-HARVARD-UNIVERSITY-BUILDING-facebook.jpeg',
    universityMelbourne: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX-aYUXTHpav4iQbKwcF8GFtqxmr5NPhMosA&s',
    universitySingapore: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbVoyUNQMcIELJCSPae1qXjm4SD3c8p85PIA&s',
    universityOxford: 'https://cdn.britannica.com/03/117103-050-F4C2FC83/view-University-of-Oxford-England-Oxfordshire.jpg',
    universityZurich: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZJLlKTz21RZhvqJ2ZtW-azErogtPqpqFKHg&s',
    universityBritishColumbia: 'https://images.shiksha.com/mediadata/images/1533551492phpLKGGFI_g.jpg',
    universitySydney: 'https://images.shiksha.com/mediadata/images/1515481785phpZsgL9D_g.png'
  };

  const courseCategories = [
    { id: 1, name: 'Engineering & Technology', icon: <BookOpen size={24} className="text-yellow-500" />, image: unsplashImages.engineering, courses: 250 },
    { id: 2, name: 'Business & Management', icon: <Briefcase size={24} className="text-yellow-500" />, image: unsplashImages.business, courses: 320 },
    { id: 3, name: 'Computer Science & IT', icon: <Search size={24} className="text-yellow-500" />, image: unsplashImages.computerScience, courses: 180 },
    { id: 4, name: 'Health & Medicine', icon: <Heart size={24} className="text-yellow-500" />, image: unsplashImages.medicine, courses: 210 },
    { id: 5, name: 'Art, Design & Architecture', icon: <BookOpen size={24} className="text-yellow-500" />, image: unsplashImages.artDesign, courses: 150 },
    { id: 6, name: 'Law & Legal Studies', icon: <Award size={24} className="text-yellow-500" />, image: unsplashImages.law, courses: 95 },
    { id: 7, name: 'Social Sciences & Humanities', icon: <Users size={24} className="text-yellow-500" />, image: unsplashImages.socialSciences, courses: 175 },
    { id: 8, name: 'Environmental Sciences', icon: <Globe size={24} className="text-yellow-500" />, image: unsplashImages.environmental, courses: 80 },
    { id: 9, name: 'Hospitality & Tourism', icon: <MapPin size={24} className="text-yellow-500" />, image: unsplashImages.hospitality, courses: 110 },
    { id: 10, name: 'Education & Teaching', icon: <BookOpen size={24} className="text-yellow-500" />, image: unsplashImages.education, courses: 130 },
    { id: 11, name: 'Media & Communication', icon: <Users size={24} className="text-yellow-500" />, image: unsplashImages.media, courses: 140 }
  ];

  const universities = [
    { 
      name: 'University of Toronto', 
      country: 'Canada', 
      tagline: 'Excellence in Research & Innovation', 
      image: unsplashImages.universityToronto,
      programs: [
        'Computer Science',
        'Mechanical Engineering',
        'Business Administration',
        'Life Sciences',
        'Psychology'
      ]
    },
    { 
      name: 'Harvard University', 
      country: 'USA', 
      tagline: 'Veritas (Truth)', 
      image: unsplashImages.universityHarvard,
      programs: [
        'Law',
        'Medicine',
        'Business',
        'Computer Science',
        'Political Science'
      ]
    },
    { 
      name: 'University of Melbourne', 
      country: 'Australia', 
      tagline: 'Advancing Society Through Education', 
      image: unsplashImages.universityMelbourne,
      programs: [
        'Biomedicine',
        'Commerce',
        'Engineering',
        'Arts',
        'Architecture'
      ]
    },
    { 
      name: 'National University of Singapore', 
      country: 'Singapore', 
      tagline: 'Towards a Global Knowledge Enterprise', 
      image: unsplashImages.universitySingapore,
      programs: [
        'Data Science',
        'Business Analytics',
        'Computer Engineering',
        'Medicine',
        'Environmental Studies'
      ]
    },
    { 
      name: 'University of Oxford', 
      country: 'UK', 
      tagline: 'The Oldest University in the English-speaking World', 
      image: unsplashImages.universityOxford,
      programs: [
        'Philosophy',
        'Economics',
        'Law',
        'Medicine',
        'Computer Science'
      ]
    },
    { 
      name: 'ETH Zurich', 
      country: 'Switzerland', 
      tagline: 'Where Innovation Begins', 
      image: unsplashImages.universityZurich,
      programs: [
        'Architecture',
        'Civil Engineering',
        'Computer Science',
        'Mathematics',
        'Physics'
      ]
    },
    { 
      name: 'University of British Columbia', 
      country: 'Canada', 
      tagline: 'A Place of Mind', 
      image: unsplashImages.universityBritishColumbia,
      programs: [
        'Forestry',
        'Commerce',
        'Engineering',
        'Arts',
        'Science'
      ]
    },
    { 
      name: 'University of Sydney', 
      country: 'Australia', 
      tagline: 'Leadership for Good Starts Here', 
      image: unsplashImages.universitySydney,
      programs: [
        'Medicine',
        'Law',
        'Business',
        'Engineering',
        'Arts'
      ]
    }
  ];

  const studyDestinations = [
    { country: 'USA', flag: '🇺🇸', courses: 450 },
    { country: 'UK', flag: '🇬🇧', courses: 380 },
    { country: 'Australia', flag: '🇦🇺', courses: 320 },
    { country: 'Canada', flag: '🇨🇦', courses: 290 },
    { country: 'Germany', flag: '🇩🇪', courses: 210 },
    { country: 'Ireland', flag: '🇮🇪', courses: 180 }
  ];

  const benefits = [
    { title: 'Exposure to Global Culture', description: 'Experience diverse perspectives and traditions while building an international network.' },
    { title: 'World-class Education', description: 'Access to internationally recognized curricula, cutting-edge research, and distinguished faculty.' },
    { title: 'Better Career Opportunities', description: 'Enhance your employability with globally recognized qualifications and skills.' },
    { title: 'Personal Growth', description: 'Develop independence, adaptability, and confidence in new environments.' }
  ];

  const courses = [
    { 
      id: 1, 
      title: 'Bachelor of Computer Science', 
      category: 'Computer Science & IT', 
      university: 'University of Toronto', 
      country: 'Canada', 
      duration: '4 years', 
      intake: 'September',
      description: 'This program provides comprehensive knowledge in computer science fundamentals including algorithms, data structures, software engineering, and artificial intelligence. Students gain hands-on experience through lab work and industry projects.',
      requirements: 'High school diploma with strong math background, English proficiency',
      fees: '$45,000 per year',
      scholarship: 'Available for international students'
    },
    { 
      id: 2, 
      title: 'Master of Business Administration', 
      category: 'Business & Management', 
      university: 'Harvard University', 
      country: 'USA', 
      duration: '2 years', 
      intake: 'Fall, Spring',
      description: 'The MBA program at Harvard is designed to develop leaders who make a difference in the world. The case method brings reality into the classroom.',
      requirements: 'Bachelor degree, GMAT/GRE, 2+ years work experience',
      fees: '$73,440 per year',
      scholarship: 'Need-based financial aid available'
    },
    { 
      id: 3, 
      title: 'Bachelor of Engineering (Civil)', 
      category: 'Engineering & Technology', 
      university: 'University of Melbourne', 
      country: 'Australia', 
      duration: '4 years', 
      intake: 'February, July',
      description: 'This degree prepares students for professional practice in civil engineering, with specializations in structural, geotechnical, water resources, and transportation engineering.',
      requirements: 'High school diploma with physics and advanced math',
      fees: 'AUD $44,736 per year',
      scholarship: 'International undergraduate scholarships available'
    },
    { 
      id: 4, 
      title: 'Master of Laws (LLM)', 
      category: 'Law & Legal Studies', 
      university: 'University of Oxford', 
      country: 'UK', 
      duration: '1 year', 
      intake: 'October',
      description: 'The Oxford LLM is a leading law program that allows students to specialize in areas like international human rights law, corporate law, or taxation law.',
      requirements: 'LLB or equivalent law degree, academic references',
      fees: '£38,945 for the program',
      scholarship: 'Several scholarship options available'
    },
    { 
      id: 5, 
      title: 'Bachelor of Medicine', 
      category: 'Health & Medicine', 
      university: 'National University of Singapore', 
      country: 'Singapore', 
      duration: '5 years', 
      intake: 'August',
      description: 'The NUS Medicine program provides rigorous training in medical sciences and clinical practice, preparing students to become competent and compassionate doctors.',
      requirements: 'Excellent high school results in science subjects, interview',
      fees: 'SGD $58,850 per year',
      scholarship: 'Bond-free scholarships available'
    },
    { 
      id: 6, 
      title: 'Master of Architecture', 
      category: 'Art, Design & Architecture', 
      university: 'ETH Zurich', 
      country: 'Switzerland', 
      duration: '2 years', 
      intake: 'September',
      description: 'This program focuses on architectural design, urban planning, and landscape architecture with strong emphasis on sustainability and digital fabrication.',
      requirements: 'Bachelor in Architecture, portfolio review',
      fees: 'CHF 1,229 per semester',
      scholarship: 'Excellence Scholarship available'
    },
    { 
      id: 7, 
      title: 'Bachelor of Environmental Science', 
      category: 'Environmental Sciences', 
      university: 'University of British Columbia', 
      country: 'Canada', 
      duration: '3 years', 
      intake: 'September, January',
      description: 'This interdisciplinary program combines natural sciences with policy studies to address environmental challenges like climate change and biodiversity loss.',
      requirements: 'High school diploma with biology and chemistry',
      fees: 'CAD $42,803 per year',
      scholarship: 'International Major Entrance Scholarships'
    },
    { 
      id: 8, 
      title: 'Master of Education', 
      category: 'Education & Teaching', 
      university: 'University of Sydney', 
      country: 'Australia', 
      duration: '2 years', 
      intake: 'February, July',
      description: 'Designed for educators who want to advance their careers, this program offers specializations in educational leadership, TESOL, and learning sciences.',
      requirements: 'Bachelor degree, teaching experience preferred',
      fees: 'AUD $42,000 per year',
      scholarship: 'Faculty of Arts and Social Sciences scholarships'
    },
    { 
      id: 9, 
      title: 'Bachelor of Arts in Communication', 
      category: 'Media & Communication', 
      university: 'University of Toronto', 
      country: 'Canada', 
      duration: '3 years', 
      intake: 'September',
      description: 'This program examines how media shapes society and culture, with courses in journalism, digital media, public relations, and cultural studies.',
      requirements: 'High school diploma, supplementary application',
      fees: '$42,180 per year',
      scholarship: 'President\'s Scholars of Excellence Program'
    },
    { 
      id: 10, 
      title: 'Master of International Relations', 
      category: 'Social Sciences & Humanities', 
      university: 'Harvard University', 
      country: 'USA', 
      duration: '2 years', 
      intake: 'Fall',
      description: 'This program prepares students for careers in diplomacy, international organizations, and global policy through rigorous academic training and practical experience.',
      requirements: 'Bachelor degree, GRE scores, writing sample',
      fees: '$54,880 per year',
      scholarship: 'Fellowships and research assistantships available'
    },
    { 
      id: 11, 
      title: 'Bachelor of Tourism Management', 
      category: 'Hospitality & Tourism', 
      university: 'University of Melbourne', 
      country: 'Australia', 
      duration: '3 years', 
      intake: 'February',
      description: 'Combining business fundamentals with tourism studies, this degree prepares students for management roles in hotels, resorts, events, and destination marketing.',
      requirements: 'High school diploma, personal statement',
      fees: 'AUD $41,912 per year',
      scholarship: 'Melbourne International Undergraduate Scholarship'
    },
    { 
      id: 12, 
      title: 'Master of Data Science', 
      category: 'Computer Science & IT', 
      university: 'National University of Singapore', 
      country: 'Singapore', 
      duration: '1.5 years', 
      intake: 'August',
      description: 'This program equips students with skills in machine learning, data visualization, and big data analytics for careers in tech, finance, and research.',
      requirements: 'Bachelor in quantitative field, programming knowledge',
      fees: 'SGD $48,000 for the program',
      scholarship: 'NUS Graduate Scholarship for ASEAN Nationals'
    },
    { 
      id: 13, 
      title: 'Bachelor of Mechanical Engineering', 
      category: 'Engineering & Technology', 
      university: 'University of Oxford', 
      country: 'UK', 
      duration: '4 years', 
      intake: 'October',
      description: 'This rigorous program covers mechanical engineering fundamentals with opportunities for specialization in areas like automotive engineering or renewable energy systems.',
      requirements: 'A-levels with Mathematics and Physics, interview',
      fees: '£37,510 per year',
      scholarship: 'Oxford scholarships available'
    },
    { 
      id: 14, 
      title: 'Master of Public Health', 
      category: 'Health & Medicine', 
      university: 'University of British Columbia', 
      country: 'Canada', 
      duration: '2 years', 
      intake: 'September',
      description: 'This professional program prepares students for leadership roles in public health with focus areas in epidemiology, global health, and health policy.',
      requirements: 'Bachelor degree, relevant work experience preferred',
      fees: 'CAD $9,131 per year (domestic)',
      scholarship: 'Public Health Scholarship Fund'
    },
    { 
      id: 15, 
      title: 'Bachelor of Interior Design', 
      category: 'Art, Design & Architecture', 
      university: 'University of Sydney', 
      country: 'Australia', 
      duration: '3 years', 
      intake: 'February',
      description: 'This studio-based program develops creative and technical skills in spatial design, materials, lighting, and furniture design for residential and commercial spaces.',
      requirements: 'Portfolio, high school diploma, interview',
      fees: 'AUD $40,000 per year',
      scholarship: 'Sydney Scholars Awards'
    },
    { 
      id: 16, 
      title: 'Master of Business Analytics', 
      category: 'Business & Management', 
      university: 'ETH Zurich', 
      country: 'Switzerland', 
      duration: '1.5 years', 
      intake: 'September',
      description: 'This quantitative program combines business knowledge with data science techniques to solve complex business problems using data-driven approaches.',
      requirements: 'Bachelor in quantitative field, programming experience',
      fees: 'CHF 1,229 per semester',
      scholarship: 'Excellence Scholarship & Opportunity Programme'
    },
    { 
      id: 17, 
      title: 'Bachelor of Psychology', 
      category: 'Social Sciences & Humanities', 
      university: 'University of Toronto', 
      country: 'Canada', 
      duration: '4 years', 
      intake: 'September',
      description: 'This program provides comprehensive understanding of human behavior and mental processes through coursework and research opportunities in various psychology fields.',
      requirements: 'High school diploma with strong English marks',
      fees: '$42,180 per year',
      scholarship: 'University of Toronto Scholars Program'
    },
    { 
      id: 18, 
      title: 'Master of Environmental Engineering', 
      category: 'Environmental Sciences', 
      university: 'Harvard University', 
      country: 'USA', 
      duration: '2 years', 
      intake: 'Fall',
      description: 'This program focuses on sustainable solutions for water resources, air quality, and waste management through advanced engineering principles and policy analysis.',
      requirements: 'Engineering bachelor degree, GRE scores',
      fees: '$54,880 per year',
      scholarship: 'Research and teaching assistantships available'
    },
    { 
      id: 19, 
      title: 'Bachelor of Nursing', 
      category: 'Health & Medicine', 
      university: 'University of Melbourne', 
      country: 'Australia', 
      duration: '3 years', 
      intake: 'February, July',
      description: 'This program combines classroom learning with clinical placements to prepare students for professional nursing practice in diverse healthcare settings.',
      requirements: 'High school diploma with biology/chemistry, interview',
      fees: 'AUD $38,720 per year',
      scholarship: 'Nursing and Allied Health Scholarship'
    },
    { 
      id: 20, 
      title: 'Master of Cybersecurity', 
      category: 'Computer Science & IT', 
      university: 'University of Oxford', 
      country: 'UK', 
      duration: '1 year', 
      intake: 'October',
      description: 'This intensive program covers technical and policy aspects of cybersecurity, including cryptography, network security, and cyber risk management.',
      requirements: 'Computer science or math background, interview',
      fees: '£38,945 for the program',
      scholarship: 'Oxford-Thatcher Scholarship in Cybersecurity'
    }
  ];

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setFilteredCourses(courses);
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    let results = [...courses];
    
    if (searchQuery) {
      results = results.filter(course => 
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.university.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    if (selectedCategory) {
      results = results.filter(course => course.category === selectedCategory);
    }
    
    if (selectedCountry) {
      results = results.filter(course => course.country === selectedCountry);
    }
    
    setFilteredCourses(results);
  }, [searchQuery, selectedCategory, selectedCountry]);

  const getCategoryCourses = (categoryName) => {
    return courses.filter(course => course.category === categoryName).slice(0, 3);
  };

  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Hero Section */}
      <div className="relative h-96 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-80"></div>
        <img 
          src={unsplashImages.heroImage} 
          alt="University campus" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl text-white font-bold mb-4">
              Explore the Right Course for Your Global Career
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              From Engineering to Arts, find your perfect match with Univista
            </p>
            <Link to="/Consultation" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-3 px-6 rounded-md transition duration-300 transform hover:scale-105 shadow-md">
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white py-8 shadow-md">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search courses, universities..."
                className="w-full px-4 py-3 pl-12 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-4 top-3.5 text-gray-400" size={18} />
            </div>
            
            <div className="relative">
              <button 
                className="w-full md:w-auto px-4 py-3 bg-white border border-gray-200 rounded-md flex items-center justify-between gap-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
              >
                <Filter size={18} className="text-gray-500" />
                <span>{selectedCategory || "All Categories"}</span>
                <ChevronDown size={16} className="text-gray-500" />
              </button>
              
              {showCategoryDropdown && (
                <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
                  <div 
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSelectedCategory('');
                      setShowCategoryDropdown(false);
                    }}
                  >
                    All Categories
                  </div>
                  {courseCategories.map(category => (
                    <div 
                      key={category.id}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setSelectedCategory(category.name);
                        setShowCategoryDropdown(false);
                      }}
                    >
                      {category.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="relative">
              <button 
                className="w-full md:w-auto px-4 py-3 bg-white border border-gray-200 rounded-md flex items-center justify-between gap-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                onClick={() => setShowCountryDropdown(!showCountryDropdown)}
              >
                <Globe size={18} className="text-gray-500" />
                <span>{selectedCountry || "All Countries"}</span>
                <ChevronDown size={16} className="text-gray-500" />
              </button>
              
              {showCountryDropdown && (
                <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
                  <div 
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSelectedCountry('');
                      setShowCountryDropdown(false);
                    }}
                  >
                    All Countries
                  </div>
                  {studyDestinations.map(destination => (
                    <div 
                      key={destination.country}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setSelectedCountry(destination.country);
                        setShowCountryDropdown(false);
                      }}
                    >
                      <span className="mr-2">{destination.flag}</span>
                      {destination.country}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Popular Course Categories */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Popular Course Categories</h2>
          <p className="text-gray-600 mb-10">Explore diverse academic paths tailored to your career aspirations</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courseCategories.map(category => (
              <div 
                key={category.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105"
              >
                <div className="h-40 bg-gray-200 relative">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <span className="text-yellow-400 bg-navy-900 bg-opacity-70 p-1 rounded text-xs font-medium">
                        {category.courses} Courses
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-navy-800 bg-opacity-10 p-2 rounded-full">
                      {category.icon}
                    </div>
                    <h3 className="font-semibold text-lg">{category.name}</h3>
                  </div>
                  <button 
                    className="mt-3 text-navy-800 hover:text-yellow-500 text-sm font-medium flex items-center transition duration-300"
                    onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                  >
                    Explore Courses <ChevronDown size={16} className="ml-1" />
                  </button>
                  
                  {expandedCategory === category.id && (
                    <div className="mt-4 border-t pt-4">
                      <h4 className="font-medium text-sm mb-2">Popular courses in this category:</h4>
                      <ul className="space-y-2">
                        {getCategoryCourses(category.name).map((course, index) => (
                          <li key={index} className="text-sm text-gray-600 hover:text-navy-800 cursor-pointer">
                            {course.title}
                          </li>
                        ))}
                      </ul>
                      <button 
                        className="mt-3 text-yellow-500 hover:text-yellow-600 text-sm font-medium"
                        onClick={() => setSelectedCategory(category.name)}
                      >
                        View all {category.courses} courses
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Course List Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Available Courses</h2>
          <p className="text-gray-600 mb-10">Browse through our extensive collection of international programs</p>
          
          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-navy-800"></div>
            </div>
          ) : filteredCourses.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-gray-700">No courses match your search criteria.</p>
              <button 
                className="mt-4 text-yellow-500 hover:text-yellow-600 font-medium"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('');
                  setSelectedCountry('');
                }}
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map(course => (
                <div 
                  key={course.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-1"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-lg text-navy-800">{course.title}</h3>
                      <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded">
                        {course.category}
                      </span>
                    </div>
                    <div className="mb-4">
                      <p className="text-gray-700">{course.university}</p>
                      <p className="text-gray-500 text-sm flex items-center mt-1">
                        <Globe size={14} className="mr-1" /> {course.country}
                      </p>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500 mb-4">
                      <span>Duration: {course.duration}</span>
                      <span>Intake: {course.intake}</span>
                    </div>
                    <button 
                      className="w-full bg-navy-800 hover:bg-navy-900 text-white font-medium py-2 rounded transition duration-300"
                      onClick={() => setSelectedCourse(course)}
                    >
                      Course Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Course Details Dialog */}
      <Dialog 
        open={!!selectedCourse} 
        onClose={() => setSelectedCourse(null)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle className="flex justify-between items-center border-b pb-4">
          <div>
            <h2 className="text-xl font-bold">{selectedCourse?.title}</h2>
            <p className="text-gray-600 text-sm">{selectedCourse?.university}, {selectedCourse?.country}</p>
          </div>
          <IconButton onClick={() => setSelectedCourse(null)}>
            <X size={20} />
          </IconButton>
        </DialogTitle>
        <DialogContent className="pt-4">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Program Description</h3>
              <p className="text-gray-700">{selectedCourse?.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Duration</h3>
                <p className="text-gray-700">{selectedCourse?.duration}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Intake Periods</h3>
                <p className="text-gray-700">{selectedCourse?.intake}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Tuition Fees</h3>
                <p className="text-gray-700">{selectedCourse?.fees}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Scholarships</h3>
                <p className="text-gray-700">{selectedCourse?.scholarship}</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Admission Requirements</h3>
              <p className="text-gray-700">{selectedCourse?.requirements}</p>
            </div>
            
            <div className="pt-4 flex justify-end">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-2 px-6 rounded-md transition duration-300">
                Apply Now
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Top Universities */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Top Universities</h2>
          <p className="text-gray-600 mb-10">Partner institutions offering world-class education</p>
          
          <div className="flex overflow-x-auto pb-6 gap-6 hide-scrollbar">
            {universities.map((university, index) => (
              <div 
                key={index}
                className="min-w-64 bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col"
              >
                <div className="h-48 bg-navy-50 flex items-center justify-center p-4">
  <img 
    src={university.image} 
    alt={university.name} 
    className="max-w-[80%] max-h-[80%] w-auto h-auto object-contain"
  />
</div>
                <div className="p-5 flex-grow">
                  <h3 className="font-semibold text-lg mb-1">{university.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{university.country}</p>
                  <p className="text-gray-500 text-sm italic">{university.tagline}</p>
                  <button 
                    className="mt-4 text-navy-800 hover:text-yellow-500 text-sm font-medium flex items-center transition duration-300"
                    onClick={() => setSelectedUniversity(university)}
                  >
                    View Programs <ChevronDown size={16} className="ml-1 transform rotate-270" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* University Programs Dialog */}
      <Dialog 
        open={!!selectedUniversity} 
        onClose={() => setSelectedUniversity(null)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle className="flex justify-between items-center border-b pb-4">
          <div>
            <h2 className="text-xl font-bold">{selectedUniversity?.name}</h2>
            <p className="text-gray-600 text-sm">{selectedUniversity?.country}</p>
          </div>
          <IconButton onClick={() => setSelectedUniversity(null)}>
            <X size={20} />
          </IconButton>
        </DialogTitle>
        <DialogContent className="pt-4">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-3">Popular Programs</h3>
              <ul className="space-y-2">
                {selectedUniversity?.programs.map((program, index) => (
                  <li key={index} className="text-gray-700 border-b pb-2 last:border-b-0">
                    {program}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="pt-4 flex justify-end">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-2 px-6 rounded-md transition duration-300">
                View All Programs
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Study Destinations */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Popular Study Destinations</h2>
          <p className="text-gray-600 mb-10">Choose from these top global education hubs</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {studyDestinations.map((destination, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:transform hover:translate-y-1 text-center py-6"
              >
                <div className="text-4xl mb-3">{destination.flag}</div>
                <h3 className="font-semibold text-lg mb-1">{destination.country}</h3>
                <p className="text-gray-500 text-sm">{destination.courses} Courses</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits of Studying Abroad */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Benefits of Studying Abroad</h2>
          <p className="text-gray-600 mb-10">Discover how an international education can transform your life</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-400">
                <h3 className="font-semibold text-xl mb-3">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/Consultation" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-3 px-8 rounded-md transition duration-300 transform hover:scale-105 shadow-md">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .bg-navy-800 {
          background-color: #0A192F;
        }
        
        .bg-navy-900 {
          background-color: #05101F;
        }
        
        .text-navy-800 {
          color: #0A192F;
        }
      `}</style>
    </div>
  );
}