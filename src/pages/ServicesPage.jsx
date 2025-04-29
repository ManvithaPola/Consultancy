import React, { useState, useEffect } from 'react';
import { ChevronRight, Globe, FileText, PenTool, Award, Home, Plane, MapPin, MessageCircle, Book, BookOpen, GraduationCap, CreditCard, Calendar, Check, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerItems = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function ServicesPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "University Admissions Assistance",
      icon: <GraduationCap size={28} className="text-blue-900" />,
      description: "Expert guidance through the entire application process for top global universities tailored to your academic profile.",
      image: "https://img.freepik.com/free-photo/team-working-together-project_23-2149273706.jpg?uid=R122682615&ga=GA1.1.675669965.1739375808&semt=ais_hybrid&w=740"
    },
    {
      title: "Visa Counseling",
      icon: <FileText size={28} className="text-blue-900" />,
      description: "End-to-end support for student visa applications with high success rates and personalized interview preparation.",
      image: "https://img.freepik.com/premium-photo/asian-girl-traveler-is-showing-ticket-passport-airport-terminal-excited-young-woman-after-successful-registration-showing-her-ticket-passport_255847-12581.jpg?uid=R122682615&ga=GA1.1.675669965.1739375808&semt=ais_hybrid&w=740"
    },
    {
      title: "Course Selection Guidance",
      icon: <BookOpen size={28} className="text-blue-900" />,
      description: "Strategic course recommendations aligned with your career goals, strengths, and global employment trends.",
      image: "https://img.freepik.com/premium-photo/group-people-are-sitting-around-table-with-white-board-front-them_394312-5101.jpg?uid=R122682615&ga=GA1.1.675669965.1739375808&semt=ais_hybrid&w=740"
    },
    {
      title: "Test Preparation Coaching",
      icon: <PenTool size={28} className="text-blue-900" />,
      description: "Comprehensive coaching for IELTS, TOEFL, GRE, GMAT, and other standardized tests with certified instructors.",
      image: "https://img.freepik.com/premium-photo/education-reading-students-university-learning-studying-brainstorming-classroom-man-woman-together-with-books-teamwork-exam-preparation-discussion-college_590464-403599.jpg?uid=R122682615&ga=GA1.1.675669965.1739375808&semt=ais_hybrid&w=740"
    },
    {
      title: "Scholarship Assistance",
      icon: <Award size={28} className="text-blue-900" />,
      description: "Identifying and applying for scholarships, grants, and financial aid opportunities to support your studies abroad.",
      image: "https://img.freepik.com/free-photo/businesswomen-working-with-documents-outdoor-cafe_74855-4974.jpg?uid=R122682615&ga=GA1.1.675669965.1739375808&semt=ais_hybrid&w=740"
    },
    {
      title: "Pre-Departure Briefing",
      icon: <Plane size={28} className="text-blue-900" />,
      description: "Comprehensive orientation sessions covering cultural adaptation, housing, banking, transportation, and student life.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVTwjKcueh2JlVlzi6dloZjW3x2Emnce2xZg&s"
    },
    {
      title: "Accommodation & Travel Help",
      icon: <Home size={28} className="text-blue-900" />,
      description: "Assistance with finding suitable accommodation options and planning travel arrangements for a smooth transition.",
      image: "https://5.imimg.com/data5/SELLER/Default/2021/12/IF/QZ/KG/36249651/accommodation-and-travel-assistance-services.jpg"
    },
    {
      title: "Post-Arrival Support",
      icon: <MessageCircle size={28} className="text-blue-900" />,
      description: "Ongoing guidance after you arrive at your destination through our global partner network and alumni community.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlXLjzKIz33WO--l7WAcqXmPnHtEHWo-efeQ&s"
    }
  ];

  const processSteps = [
    {
      title: "Free Consultation",
      description: "Meet our experts to discuss your academic goals, preferences, and budget constraints.",
      icon: <MessageCircle size={24} className="text-yellow-500" />
    },
    {
      title: "University Shortlisting",
      description: "Based on your profile, we identify the most suitable universities and programs aligned with your goals.",
      icon: <Book size={24} className="text-yellow-500" />
    },
    {
      title: "Application Submission",
      description: "Our team prepares and submits compelling applications to maximize your chances of acceptance.",
      icon: <FileText size={24} className="text-yellow-500" />
    },
    {
      title: "Visa Processing",
      description: "Step-by-step guidance through the visa application process with interview preparation.",
      icon: <Globe size={24} className="text-yellow-500" />
    },
    {
      title: "Pre-Departure Support",
      description: "Comprehensive briefings to ensure you're fully prepared for life and studies abroad.",
      icon: <Plane size={24} className="text-yellow-500" />
    }
  ];

  const countries = [
    { name: "United States", flag: "🇺🇸", count: "500+ Universities" },
    { name: "United Kingdom", flag: "🇬🇧", count: "250+ Universities" },
    { name: "Canada", flag: "🇨🇦", count: "150+ Universities" },
    { name: "Australia", flag: "🇦🇺", count: "180+ Universities" },
    { name: "Germany", flag: "🇩🇪", count: "120+ Universities" },
    { name: "New Zealand", flag: "🇳🇿", count: "80+ Universities" },
    { name: "Ireland", flag: "🇮🇪", count: "70+ Universities" },
    { name: "Singapore", flag: "🇸🇬", count: "35+ Universities" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      university: "University of Toronto",
      country: "Canada",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
      quote: "Univista transformed my dream of studying abroad into reality. Their personalized guidance made the complex process seem effortless."
    },
    {
      name: "Michael Chen",
      university: "Imperial College London",
      country: "United Kingdom",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      quote: "From application strategies to securing scholarships, Univista's comprehensive support was instrumental in my academic journey."
    },
    {
      name: "Priya Patel",
      university: "University of Melbourne",
      country: "Australia",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
      quote: "The visa counseling service was exceptional. They prepared me thoroughly for the interview, resulting in a smooth approval process."
    }
  ];

  const features = [
    { title: "98% Visa Success Rate", icon: <Check size={20} className="text-blue-900" /> },
    { title: "10,000+ Students Placed", icon: <GraduationCap size={20} className="text-blue-900" /> },
    { title: "1200+ University Partnerships", icon: <Book size={20} className="text-blue-900" /> },
    { title: "Global Office Network", icon: <Globe size={20} className="text-blue-900" /> }
  ];

  return (
    <div className="font-['Poppins'] overflow-hidden">
      {/* Hero Section */}
      <motion.div 
        className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-800 overflow-hidden"
        initial="hidden"
        animate="visible"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{
            backgroundImage: `url(https://img.freepik.com/premium-photo/happy-students-celebrating-success-london_380164-221713.jpg?uid=R122682615&ga=GA1.1.675669965.1739375808&semt=ais_hybrid&w=740)`,
            opacity: 0.2,
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        />
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
            variants={fadeIn}
          >
            OUR SERVICES
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10"
            variants={fadeIn}
          >
            Empowering Your Global Education Journey with Univista
          </motion.p>
          <motion.div variants={fadeIn}>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center mx-auto">
              Get Started Today
              <ChevronRight size={20} className="ml-2" />
            </button>
          </motion.div>
        </div>
        
        {/* Abstract Shape */}
        <div className="absolute -bottom-32 left-0 right-0">
          <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,106.7C96,117,192,139,288,154.7C384,171,480,181,576,160C672,139,768,85,864,69.3C960,53,1056,75,1152,90.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </motion.div>

      {/* Features Strip */}
      <div className="bg-white py-10">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerItems}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="flex items-center justify-center space-x-3 py-4"
                variants={fadeIn}
              >
                <div className="bg-gray-50 p-3 rounded-full">
                  {feature.icon}
                </div>
                <span className="text-lg font-semibold text-blue-900">{feature.title}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">COMPREHENSIVE SERVICES</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From university selection to post-arrival support, we provide end-to-end assistance for your international education journey
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerItems}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:translate-y-[-5px] transition-all duration-300"
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    {service.icon}
                  </div>
                  <h3 className="font-bold text-xl text-blue-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">OUR PROVEN PROCESS</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A transparent step-by-step approach designed to simplify your journey to studying abroad
            </p>
          </motion.div>

          <motion.div 
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerItems}
          >
            {/* Process Connection Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2 z-0"></div>
            
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row items-center mb-12 md:mb-24 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
                variants={fadeIn}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} text-center md:text-${index % 2 === 0 ? 'left' : 'right'}`}>
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">
                    <span className="inline-block bg-yellow-400 text-blue-900 rounded-full w-8 h-8 text-center mr-2">
                      {index + 1}
                    </span>
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                
                <div className="relative z-10 my-6 md:my-0">
                  <div className="bg-white rounded-full p-5 border-4 border-yellow-400 shadow-lg">
                    {step.icon}
                  </div>
                </div>
                
                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Destinations Section */}
      <div className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">GLOBAL DESTINATIONS</h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              We have partnerships with prestigious institutions in these leading education destinations
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerItems}
          >
            {countries.map((country, index) => (
              <motion.div
                key={index}
                className="bg-blue-800 bg-opacity-40 backdrop-blur-md rounded-xl p-6 text-center hover:bg-blue-700 transition-all duration-300"
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-2">{country.flag}</div>
                <h3 className="font-bold text-xl mb-1">{country.name}</h3>
                <p className="text-gray-300">{country.count}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Testimonials Section
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">STUDENT SUCCESS STORIES</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from our students who achieved their international education dreams with Univista
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerItems}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg p-6"
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover rounded-full border-4 border-yellow-400"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-blue-900">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.university}</p>
                    <p className="text-yellow-500">{testimonial.country}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div> */}

      {/* CTA Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl overflow-hidden shadow-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Begin Your Global Education Journey?</h2>
                <p className="text-gray-200 mb-8">
                  Schedule a free consultation with our expert advisors to discuss your academic goals and explore opportunities abroad.
                </p>
                <Link to="/Consultation" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center">
                  Book Free Consultation
                  <ChevronRight size={20} className="ml-2" />
                </Link>
              </div>
              <div className="md:w-1/2 relative min-h-[300px]">
                <img 
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Students consulting" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-blue-900 opacity-60"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Additional Services */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">SPECIALIZED SERVICES</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Beyond our core offerings, we provide these specialized services to enhance your education journey
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerItems}
          >
            <motion.div
              className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row"
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <div className="md:w-2/5 h-64 md:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1557425955-df376b5903c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Financial planning" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:w-3/5">
                <div className="flex items-center mb-4">
                  <CreditCard size={28} className="text-blue-900 mr-3" />
                  <h3 className="font-bold text-xl text-blue-900">Financial Planning</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Comprehensive financial planning services to help you budget for your international education expenses, including tuition, accommodation, living costs, and emergency funds.
                </p>
                <button className="text-blue-900 font-semibold flex items-center hover:text-yellow-500 transition-colors">
                  Learn More <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row"
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <div className="md:w-2/5 h-64 md:h-auto">
                <img 
                  src="https://img.freepik.com/premium-photo/smiling-businesswoman-interviewing-disabled-candidate_13339-134498.jpg?uid=R122682615&ga=GA1.1.675669965.1739375808&semt=ais_hybrid&w=740" 
                  alt="Career counseling" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:w-3/5">
                <div className="flex items-center mb-4">
                  <RefreshCw size={28} className="text-blue-900 mr-3" />
                  <h3 className="font-bold text-xl text-blue-900">Career Counseling</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Expert guidance on aligning your academic choices with career goals, including industry trends analysis, employment projections, and post-graduation work permit options.
                </p>
                <button className="text-blue-900 font-semibold flex items-center hover:text-yellow-500 transition-colors">
                  Learn More <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row"
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <div className="md:w-2/5 h-64 md:h-auto">
                <img 
                  src="https://www.oacm.group/img/website/cultural_lists/thumbs/multicultural-e1505772192814.jpg" 
                  alt="Cultural integration" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:w-3/5">
                <div className="flex items-center mb-4">
                  <Globe size={28} className="text-blue-900 mr-3" />
                  <h3 className="font-bold text-xl text-blue-900">Cultural Integration</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Workshops and resources designed to help you adapt to new cultural environments, overcome culture shock, and build social connections in your host country.
                </p>
                <button className="text-blue-900 font-semibold flex items-center hover:text-yellow-500 transition-colors">
                  Learn More <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row"
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <div className="md:w-2/5 h-64 md:h-auto">
                <img 
                  src="https://img.freepik.com/free-photo/family-insurance-reimbursement-protection-concept_53876-138642.jpg?uid=R122682615&ga=GA1.1.675669965.1739375808&semt=ais_hybrid&w=740" 
                  alt="Health insurance" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:w-3/5">
                <div className="flex items-center mb-4">
                  <Calendar size={28} className="text-blue-900 mr-3" />
                  <h3 className="font-bold text-xl text-blue-900">Health Insurance Assistance</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Guidance on selecting appropriate health insurance plans for international students, ensuring you have adequate coverage during your studies abroad.
                </p>
                <button className="text-blue-900 font-semibold flex items-center hover:text-yellow-500 transition-colors">
                  Learn More <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">FREQUENTLY ASKED QUESTIONS</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services and the study abroad process
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <FAQAccordion />
          </div>
        </div>
      </div>

      {/* Contact Strip
      <div className="bg-blue-900 py-16 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-between"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Still Have Questions?</h3>
              <p className="text-gray-300">Our expert consultants are ready to assist you</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-900 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center justify-center">
                <MessageCircle size={20} className="mr-2" />
                Chat Now
              </button>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center justify-center">
                <Calendar size={20} className="mr-2" />
                Book Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </div> */}

      {/* Newsletter Section
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">Subscribe to Our Newsletter</h3>
              <p className="text-gray-600">
                Stay updated with the latest opportunities, scholarships, and educational insights
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
              <button className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div> */}
    </div>
  );
}

// FAQ Accordion Component
function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How early should I start the application process?",
      answer: "We recommend starting at least 12-18 months before your intended intake. This provides ample time for university research, standardized test preparation, application submission, and visa processing. However, we can assist with accelerated timelines when necessary."
    },
    {
      question: "Do I need to pay universities directly or through Univista?",
      answer: "All university fees such as application fees and tuition are paid directly to the institutions. Univista provides guidance on the payment process, but we do not handle university payments on your behalf to ensure transparency and security."
    },
    {
      question: "How does Univista help with scholarship applications?",
      answer: "Our scholarship assistance includes identifying suitable opportunities based on your profile, guidance on application requirements, review and refinement of scholarship essays, and preparation for scholarship interviews if applicable."
    },
    {
      question: "Can Univista guarantee visa approval?",
      answer: "While we cannot guarantee visa approval as the final decision rests with immigration authorities, our experts provide comprehensive guidance to maximize your chances. Our processes have resulted in a 98% visa success rate for our students."
    },
    {
      question: "What makes Univista different from other consultancies?",
      answer: "Univista distinguishes itself through personalized counseling, direct university partnerships, transparent processes, continuous support throughout your journey, and a global network of offices providing localized expertise."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <motion.div 
      className="divide-y divide-gray-200" 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerItems}
    >
      {faqs.map((faq, index) => (
        <motion.div key={index} variants={fadeIn}>
          <button
            className="w-full py-6 text-left focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-semibold text-blue-900">{faq.question}</h4>
              <span className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                <ChevronRight size={20} className={`${activeIndex === index ? 'text-yellow-500' : 'text-blue-900'}`} />
              </span>
            </div>
          </button>
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: activeIndex === index ? 'auto' : 0,
              opacity: activeIndex === index ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600">{faq.answer}</p>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}