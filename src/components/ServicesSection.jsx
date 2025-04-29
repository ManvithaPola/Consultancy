import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  BookOpen, 
  Plane, 
  Award, 
  Globe, 
  User, 
  Home, 
  BadgeCheck, 
  Book 
} from 'lucide-react';
import { Button } from '@mui/material';

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 }
    }
  };

  const services = [
    {
      id: 0,
      title: "University Application Assistance",
      icon: <BookOpen size={40} />,
      description: "Our comprehensive university application service guides you through every step of the process. From selecting the right programs to match your academic profile and career goals, to preparing impactful personal statements and handling application submissions. We maintain relationships with over 500+ universities worldwide to ensure your application stands out.",
      features: [
        "Personalized university shortlisting based on your academic profile",
        "Application document preparation and review by experts",
        "Direct submission to universities with follow-up communications",
        "Application fee waivers where available"
      ],
      image: "/api/placeholder/600/400",
      imageAlt: "University application process",
      color: "bg-blue-100 text-blue-600"
    },
    {
      id: 1,
      title: "Visa Guidance & Documentation",
      icon: <Plane size={40} />,
      description: "Our visa experts make the complex visa process straightforward and stress-free. We provide step-by-step guidance for student visa applications with country-specific expertise to ensure your documentation meets all requirements. Our 95% visa success rate speaks to our meticulous preparation process.",
      features: [
        "Complete documentation checklist tailored to your destination country",
        "Mock visa interview preparations with feedback",
        "Financial documentation guidance",
        "Application tracking and follow-up services"
      ],
      image: "/api/placeholder/600/400",
      imageAlt: "Visa application guidance",
      color: "bg-green-100 text-green-600"
    },
    {
      id: 2,
      title: "Scholarship & Financial Aid Support",
      icon: <Award size={40} />,
      description: "We help you identify and secure financial support opportunities to make your international education more affordable. Our counselors assist in finding scholarships, grants, and financial aid packages suited to your profile, and guide you through the application process to maximize your chances.",
      features: [
        "Personalized scholarship matching based on your profile",
        "Application preparation for university and external scholarships",
        "Financial planning and budget estimation for studying abroad",
        "Assistance with scholarship essays and applications"
      ],
      image: "/api/placeholder/600/400",
      imageAlt: "Scholarship application support",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      id: 3,
      title: "Test Preparation & Academic Counseling",
      icon: <Book size={40} />,
      description: "Excel in standardized tests required for international admissions with our specialized preparation programs. We offer comprehensive coaching for IELTS, TOEFL, GRE, GMAT, SAT, and other entrance exams. Our experienced trainers provide personalized guidance to help you achieve your target scores.",
      features: [
        "Customized study plans based on diagnostic assessments",
        "One-on-one coaching with experienced trainers",
        "Practice tests with detailed feedback",
        "Score improvement strategies and techniques"
      ],
      image: "/api/placeholder/600/400",
      imageAlt: "Test preparation services",
      color: "bg-purple-100 text-purple-600"
    },
    {
      id: 4,
      title: "Pre-departure & Orientation Services",
      icon: <Plane size={40} />,
      description: "We prepare you for life abroad with comprehensive pre-departure guidance and orientation. From cultural adjustment tips to practical matters like accommodation, banking, and healthcare, we ensure you're well-prepared for your international education journey.",
      features: [
        "Pre-departure orientation workshops",
        "Accommodation search assistance",
        "Cultural adaptation guidance",
        "Essential paperwork and checklist preparation"
      ],
      image: "/api/placeholder/600/400",
      imageAlt: "Pre-departure orientation",
      color: "bg-red-100 text-red-600"
    },
    {
      id: 5,
      title: "Career Guidance & Pathway Planning",
      icon: <BadgeCheck size={40} />,
      description: "Our career advisors help you align your international education with your long-term career goals. We provide guidance on course selection, internship opportunities, and post-graduation pathways to ensure your study abroad experience maximizes your career potential.",
      features: [
        "Career mapping sessions with industry specialists",
        "Course selection guidance aligned with career objectives",
        "Internship and work placement opportunities",
        "Post-graduation planning and employment guidance"
      ],
      image: "/api/placeholder/600/400",
      imageAlt: "Career guidance services",
      color: "bg-indigo-100 text-indigo-600"
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" id="services">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold mb-4 text-gray-800 font-montserrat tracking-tight"
          >
            Our Services
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="h-1 w-24 bg-blue-600 mx-auto mb-8"
          />
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-700 max-w-3xl mx-auto"
          >
            Univista offers end-to-end support for your international education journey, from university selection to arrival in your destination country.
          </motion.p>
        </motion.div>

        {/* Service Tabs */}
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          animate={controls}
          className="mb-12 overflow-x-auto hide-scrollbar"
        >
          <div className="flex space-x-2 md:space-x-4 justify-center mb-8 min-w-max px-4">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  onClick={() => setActiveTab(index)}
                  className={`flex flex-col items-center px-4 py-3 rounded-lg transition-colors duration-300 ${
                    activeTab === index 
                      ? "bg-blue-600 text-white shadow-lg" 
                      : "bg-white text-gray-700 hover:bg-gray-100 shadow"
                  }`}
                >
                  <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    {service.icon}
                  </motion.div>
                  <span className="mt-2 text-sm font-medium whitespace-nowrap">{service.title.split(' ')[0]}</span>
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Service */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${services[activeTab].color} mb-6`}>
                <motion.div
                  variants={iconVariants}
                  whileHover="hover"
                >
                  {services[activeTab].icon}
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-montserrat text-gray-800">
                {services[activeTab].title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {services[activeTab].description}
              </p>
              <ul className="space-y-3 mb-8">
                {services[activeTab].features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                variant="contained" 
                color="primary"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
              >
                Learn More
              </Button>
            </div>
            <div className="bg-gray-100 flex items-center justify-center p-6">
              <img 
                src={services[activeTab].image} 
                alt={services[activeTab].imageAlt}
                className="rounded-lg shadow-lg max-h-96 object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Service Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className={`h-2 ${service.color.split(' ')[0]}`}></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                    className={`p-3 rounded-full ${service.color} mr-4`}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold font-montserrat text-gray-800">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {service.description}
                </p>
                <Button 
                  variant="outlined" 
                  color="primary"
                  className="w-full"
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
          >
            View All Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;