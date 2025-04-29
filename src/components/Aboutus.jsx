import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Globe, Award, BookOpen, Users, TrendingUp } from 'lucide-react';

const AboutUs = () => {
  // Setup for scroll animations
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Core values data
  const coreValues = [
    { 
      icon: <Award className="text-blue-600" size={36} />,
      title: "Excellence",
      description: "We maintain the highest standards in our guidance and services to help students achieve their dreams."
    },
    { 
      icon: <Users className="text-blue-600" size={36} />,
      title: "Student-Centered",
      description: "Every student's journey is unique. We provide personalized guidance tailored to individual aspirations."
    },
    { 
      icon: <BookOpen className="text-blue-600" size={36} />,
      title: "Educational Expertise",
      description: "Our counselors bring years of experience and in-depth knowledge of global education systems."
    },
    { 
      icon: <TrendingUp className="text-blue-600" size={36} />,
      title: "Continuous Growth",
      description: "We constantly evolve our services to meet the changing landscape of international education."
    },
  ];

  return (
    <section className="py-16 bg-gray-50" id="about-us">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.div variants={itemVariants} className="inline-block mb-4">
            <Globe className="text-blue-600 mx-auto mb-4" size={48} />
          </motion.div>
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold mb-4 text-gray-800 font-montserrat"
          >
            Who We Are
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="h-1 w-24 bg-blue-600 mx-auto mb-8"
          />
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-700 max-w-3xl mx-auto mb-8 font-open-sans leading-relaxed"
          >
            At Univista, we believe that education transcends borders. For over a decade, we've been guiding aspiring students toward their international academic goals with personalized mentorship and comprehensive support. Our mission is to transform educational aspirations into achievements by connecting students with world-class universities that align with their career ambitions and personal growth objectives.
          </motion.p>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-700 max-w-3xl mx-auto mb-12 font-open-sans leading-relaxed"
          >
            Founded by education enthusiasts who once walked in your shoes, Univista understands the journey's challenges and rewards. With counselors who've collectively helped over 5,000 students reach universities across 20+ countries, we bring both expertise and empathy to every consultation.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
            >
              <motion.div 
                variants={iconVariants}
                className="mb-4 flex justify-center"
              >
                {value.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-montserrat">{value.title}</h3>
              <p className="text-gray-600 font-open-sans">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="bg-blue-700 text-white p-8 rounded-xl shadow-xl"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl font-bold mb-6 font-montserrat"
          >
            What Sets Univista Apart
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants} className="flex items-start">
              <div className="mr-4 mt-1">
                <motion.div variants={iconVariants}>
                  <Award className="text-yellow-300" size={28} />
                </motion.div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 font-montserrat">Unmatched Success Rate</h4>
                <p className="font-open-sans">Our 95% visa approval rate and university acceptance success speak to our meticulous application preparation and strategic university selection process.</p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex items-start">
              <div className="mr-4 mt-1">
                <motion.div variants={iconVariants}>
                  <Users className="text-yellow-300" size={28} />
                </motion.div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 font-montserrat">End-to-End Support</h4>
                <p className="font-open-sans">From initial counseling to pre-departure orientation and even post-arrival assistance, we remain your partners throughout your academic journey abroad.</p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex items-start">
              <div className="mr-4 mt-1">
                <motion.div variants={iconVariants}>
                  <Globe className="text-yellow-300" size={28} />
                </motion.div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 font-montserrat">Global University Network</h4>
                <p className="font-open-sans">We maintain direct relationships with over 500 universities across North America, Europe, Australia, and Asia, giving you privileged access and insights.</p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex items-start">
              <div className="mr-4 mt-1">
                <motion.div variants={iconVariants}>
                  <TrendingUp className="text-yellow-300" size={28} />
                </motion.div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 font-montserrat">Transparent Process</h4>
                <p className="font-open-sans">No hidden fees or misleading promises. We pride ourselves on ethical practices and clear communication at every step of your application journey.</p>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            variants={itemVariants}
            className="text-center mt-10"
          >
            <p className="text-lg font-semibold font-open-sans italic">
              "Univista doesn't just send students abroad; we launch careers and transform lives through the power of global education."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;