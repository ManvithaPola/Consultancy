import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  UserCheck, 
  Target, 
  Compass, 
  BookOpen, 
  GraduationCap, 
  Globe, 
  MessageSquare
} from 'lucide-react';

const OurApproachSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const approachItems = [
    {
      icon: <UserCheck className="w-10 h-10 text-[#FFC300]" />,
      title: "Personalized Counseling",
      description: "We believe every student is unique. Our counselors develop a custom roadmap based on your academic background, career aspirations, and personal preferences."
    },
    {
      icon: <Target className="w-10 h-10 text-[#FFC300]" />,
      title: "Goal-Oriented Guidance",
      description: "We focus on understanding your long-term career goals first, then map out educational pathways that will help you achieve them efficiently."
    },
    {
      icon: <Globe className="w-10 h-10 text-[#FFC300]" />,
      title: "Global Perspective",
      description: "With partner institutions across 30+ countries, we provide insights into diverse educational systems and cultures to help you make informed decisions."
    },
    {
      icon: <BookOpen className="w-10 h-10 text-[#FFC300]" />,
      title: "Comprehensive Support",
      description: "From university selection to visa preparation, admission applications to pre-departure briefings – we're with you through every step of your journey."
    }
  ];

  const leftSlideVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const rightSlideVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="py-16 md:py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          <h2 className="font-montserrat font-bold text-2xl md:text-3xl text-[#0A192F] mb-4">
            Our <span className="text-[#FFC300]">Approach</span>
          </h2>
          <div className="w-20 h-1 bg-[#FFC300] mx-auto mb-6"></div>
          <p className="font-roboto text-[#0A192F] text-base md:text-lg max-w-3xl mx-auto">
            At Univista, we believe in a student-first philosophy that prioritizes your unique needs and aspirations. Our approach combines expert guidance with genuine care to transform your international education dreams into reality.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
          <motion.div
            className="w-full lg:w-1/2"
            initial="hidden"
            animate={controls}
            variants={leftSlideVariants}
            custom={0}
          >
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Students discussing with counselor" 
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </motion.div>
          
          <motion.div
            className="w-full lg:w-1/2"
            initial="hidden"
            animate={controls}
            variants={rightSlideVariants}
            custom={1}
          >
            <h3 className="font-montserrat font-semibold text-xl md:text-2xl text-[#FFC300] mb-4">
              Student-First Philosophy
            </h3>
            <p className="font-roboto text-[#0A192F] text-base mb-6">
              Our founding principle is to always put students at the center of everything we do. This means taking the time to understand your academic background, career aspirations, financial considerations, and personal preferences before recommending any path forward.
            </p>
            <div className="flex items-start mb-4">
              <MessageSquare className="text-[#FFC300] w-6 h-6 mt-1 mr-3 flex-shrink-0" />
              <p className="font-roboto text-[#0A192F] text-base">
                "Univista transformed my study abroad journey from overwhelming to exciting. Their personalized approach helped me secure admission to my dream university with a scholarship I didn't think was possible."
              </p>
            </div>
            <p className="font-roboto text-sm text-[#0A192F] italic ml-9">
              — Sarah K., University of Melbourne
            </p>
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {approachItems.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate={controls}
              variants={index % 2 === 0 ? leftSlideVariants : rightSlideVariants}
              className="bg-gray-50 rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div className="flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h4 className="font-montserrat font-semibold text-lg text-[#FFC300] text-center mb-3">
                {item.title}
              </h4>
              <p className="font-roboto text-sm text-[#0A192F] text-center">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-8 bg-gray-50 rounded-xl p-6 md:p-10"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.6 } }
          }}
        >
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="relative w-48 h-48 md:w-56 md:h-56">
              <GraduationCap className="absolute inset-0 w-full h-full text-[#FFC300]" />
              <Compass className="absolute inset-0 w-full h-full text-[#0A192F] opacity-10" />
            </div>
          </div>
          
          <div className="w-full lg:w-2/3">
            <h3 className="font-montserrat font-semibold text-xl md:text-2xl text-[#FFC300] mb-4">
              Our Promise to You
            </h3>
            <p className="font-roboto text-[#0A192F] text-base mb-4">
              At Univista, we promise to be more than just consultants – we are your partners in this transformative journey. Our commitment extends beyond the application process; we prepare you for success in your academic pursuits and early career through:
            </p>
            <ul className="font-roboto text-[#0A192F] space-y-3">
              <li className="flex items-start">
                <span className="text-[#FFC300] mr-2">•</span>
                <span><span className="font-semibold">Honest guidance</span> based on your unique profile and circumstances</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FFC300] mr-2">•</span>
                <span><span className="font-semibold">Transparent information</span> about admission chances, costs, and outcomes</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FFC300] mr-2">•</span>
                <span><span className="font-semibold">Continuous support</span> throughout your academic journey abroad</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurApproachSection;