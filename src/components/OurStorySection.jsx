import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Users, Trophy, Flag } from 'lucide-react';

const OurStorySection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const milestones = [
    {
      year: '2010',
      title: 'Our Beginning',
      description: 'Univista was founded with a mission to make quality education abroad accessible to all deserving students.',
      icon: <Calendar className="text-[#FFC300] w-10 h-10" />,
    },
    {
      year: '2015',
      title: 'Expanding Horizons',
      description: 'Established partnerships with over 100 universities across 15 countries, opening new pathways for our students.',
      icon: <Flag className="text-[#FFC300] w-10 h-10" />,
    },
    {
      year: '2018',
      title: 'Growing Community',
      description: 'Celebrated helping 5,000+ students achieve their dreams of studying at prestigious institutions worldwide.',
      icon: <Users className="text-[#FFC300] w-10 h-10" />,
    },
    {
      year: '2022',
      title: 'Industry Recognition',
      description: 'Awarded "Best Education Consultancy" for our innovative approach and exceptional student success rates.',
      icon: <Trophy className="text-[#FFC300] w-10 h-10" />,
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="bg-[#F5F7FA] py-16 md:py-24" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="bg-white rounded-xl shadow-lg p-6 md:p-12"
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
          }}
        >
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, transition: { duration: 0.8 } }
            }}
          >
            <h2 className="font-montserrat font-bold text-2xl md:text-3xl lg:text-4xl text-[#0A192F] mb-4">
              Our <span className="text-[#FFC300]">Story</span>
            </h2>
            <div className="w-20 h-1 bg-[#FFC300] mx-auto mb-6"></div>
            <p className="font-roboto text-[#0A192F] text-base md:text-lg max-w-3xl mx-auto">
              From a small office with big dreams to an industry-leading consultancy, our journey has been dedicated to transforming students' lives through quality education abroad.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } }
              }}
              className="flex items-center justify-center"
            >
              <img 
                src="https://img.freepik.com/premium-photo/group-highschool-students-looking-globe_266732-9564.jpg?uid=R122682615&ga=GA1.1.675669965.1739375808&semt=ais_hybrid&w=740" 
                alt="Univista Founding Team" 
                className="rounded-lg shadow-md w-full h-auto max-h-96 object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.4 } }
              }}
              className="flex flex-col justify-center"
            >
              <h3 className="font-montserrat font-semibold text-xl md:text-2xl text-[#0A192F] mb-4">
                A Vision for Global Education
              </h3>
              <p className="font-roboto text-[#0A192F] text-sm md:text-base mb-4">
                Univista was born from a simple yet powerful idea: that every student deserves access to quality education regardless of borders. Our founder, after experiencing the transformative power of studying abroad, wanted to create a pathway for others to have the same opportunity.
              </p>
              <p className="font-roboto text-[#0A192F] text-sm md:text-base">
                What began as a small team of passionate educators has grown into a comprehensive consultancy with a track record of <span className="text-[#FFC300] font-semibold">10,000+ successful placements</span> across the globe. Our personalized approach to student counseling remains at the heart of everything we do.
              </p>
            </motion.div>
          </div>

          <h3 className="font-montserrat font-semibold text-xl md:text-2xl text-[#0A192F] text-center mb-8">
            Our <span className="text-[#FFC300]">Milestones</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate={controls}
                variants={fadeInUp}
                className="bg-[#F5F7FA] p-6 rounded-lg transition-all duration-300 hover:shadow-md"
              >
                <div className="flex items-center mb-4">
                  {milestone.icon}
                  <span className="ml-3 font-montserrat font-bold text-[#FFC300] text-xl">{milestone.year}</span>
                </div>
                <h4 className="font-montserrat font-semibold text-lg text-[#0A192F] mb-2">{milestone.title}</h4>
                <p className="font-roboto text-sm text-[#0A192F]">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12 md:mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.8 } }
            }}
          >
            <h3 className="font-montserrat font-semibold text-xl md:text-2xl text-[#0A192F] mb-4">
              The Future Ahead
            </h3>
            <p className="font-roboto text-[#0A192F] text-sm md:text-base max-w-3xl mx-auto">
              Today, Univista continues to innovate in the field of international education consultancy. We're expanding our digital services, developing AI-powered course matching systems, and building a global alumni network that connects students across continents. Our vision remains unchanged: to be the bridge that connects ambitious students with life-changing educational opportunities worldwide.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStorySection;