import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Award, 
  Users, 
  Globe, 
  BookOpen, 
  TrendingUp, 
  Clock,
  Headphones,
  Database
} from 'lucide-react';

const WhyChooseUsSection = () => {
  const reasons = [
    {
      id: 1,
      title: "Expert Consultants",
      description: "Certified education consultants with extensive experience in international education.",
      icon: <Award size={32} className="text-blue-600" />,
      stats: "15+ years"
    },
    {
      id: 2,
      title: "Personalized Approach",
      description: "Tailored strategies based on your academic background and career goals.",
      icon: <Users size={32} className="text-blue-600" />,
      stats: "Custom plans"
    },
    {
      id: 3,
      title: "Global Network",
      description: "Partnerships with 500+ universities across the US, UK, Canada, Australia, and Europe.",
      icon: <Globe size={32} className="text-blue-600" />,
      stats: "500+ partners"
    },
    {
      id: 4,
      title: "Comprehensive Services",
      description: "End-to-end support from university selection to pre-departure orientation.",
      icon: <BookOpen size={32} className="text-blue-600" />,
      stats: "Full support"
    },
    {
      id: 5,
      title: "Proven Success",
      description: "95% visa success rate with thousands of students placed in top institutions.",
      icon: <TrendingUp size={32} className="text-blue-600" />,
      stats: "95% success"
    },
    {
      id: 6,
      title: "Timely Processing",
      description: "Efficient team ensuring all applications are processed promptly.",
      icon: <Clock size={32} className="text-blue-600" />,
      stats: "On-time"
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="why-choose-us">
      <div className="container mx-auto px-4">
        <Header />
        <AdvantagesGrid reasons={reasons} />
        <StatsCounter />
        <CallToAction />
      </div>
    </section>
  );
};

const Header = () => {
  return (
    <div className="text-center mb-12">
      <motion.h2 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
      >
        Why Choose Us?
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-gray-600 max-w-2xl mx-auto"
      >
        Turning your international education dreams into reality
      </motion.p>
    </div>
  );
};

const AdvantagesGrid = ({ reasons }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {reasons.map((reason, index) => (
        <motion.div
          key={reason.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          whileHover={{ y: -5 }}
          className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all"
        >
          <div className="flex items-center mb-4">
            <div className="bg-blue-50 p-3 rounded-lg mr-4">
              {reason.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{reason.title}</h3>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                {reason.stats}
              </span>
            </div>
          </div>
          <p className="text-gray-600 text-sm">{reason.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

const StatsCounter = () => {
  const stats = [
    { label: "Students Placed", value: "10,000+", icon: <Users size={20} className="text-blue-600" /> },
    { label: "University Partners", value: "500+", icon: <Database size={20} className="text-blue-600" /> },
    { label: "Visa Success Rate", value: "95%", icon: <Award size={20} className="text-blue-600" /> },
    { label: "Countries", value: "15+", icon: <Globe size={20} className="text-blue-600" /> }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="bg-white rounded-lg shadow-sm p-6 mb-12"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="text-center p-3">
            <div className="flex justify-center mb-2">
              {stat.icon}
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const CallToAction = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="bg-blue-600 rounded-lg p-8 text-center text-white"
    >
      <Headphones size={32} className="mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-3">Ready to Begin Your Journey?</h3>
      <p className="text-sm mb-6 max-w-lg mx-auto">
        Schedule a free consultation with our expert advisors today.
      </p>
      <Link to="/Consultation" className="bg-white text-blue-600 font-medium py-2 px-6 rounded-lg shadow-sm hover:shadow-md transition-all">
        Book Free Consultation
      </Link>
    </motion.div>
  );
};

export default WhyChooseUsSection;