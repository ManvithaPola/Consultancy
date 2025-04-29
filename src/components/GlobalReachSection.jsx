import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Globe, BookOpen, GraduationCap, School } from 'lucide-react';

const GlobalReachSection = () => {
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

  const destinations = [
    {
      country: "United States",
      icon: <GraduationCap className="w-6 h-6" />,
      description: "Home to world-class universities like Harvard, MIT, and Stanford with diverse programs across all disciplines.",
      universities: "500+ partner institutions",
      students: "2,500+ students placed"
    },
    {
      country: "United Kingdom",
      icon: <BookOpen className="w-6 h-6" />,
      description: "Prestigious education from Oxford, Cambridge, and Imperial College with rich cultural heritage and global networking.",
      universities: "250+ partner institutions",
      students: "1,800+ students placed"
    },
    {
      country: "Canada",
      icon: <School className="w-6 h-6" />,
      description: "Quality education with immigration-friendly policies from University of Toronto, UBC, and McGill University.",
      universities: "200+ partner institutions",
      students: "1,500+ students placed"
    },
    {
      country: "Australia",
      icon: <BookOpen className="w-6 h-6" />,
      description: "Innovation-focused education from University of Melbourne, ANU, and University of Sydney with excellent work opportunities.",
      universities: "180+ partner institutions",
      students: "1,300+ students placed"
    },
    {
      country: "Europe",
      icon: <School className="w-6 h-6" />,
      description: "Diverse academic systems across Germany, France, Netherlands, and more with many tuition-free or low-cost options.",
      universities: "350+ partner institutions",
      students: "1,200+ students placed"
    },
    {
      country: "Asia",
      icon: <GraduationCap className="w-6 h-6" />,
      description: "Emerging education hubs in Singapore, Japan, Hong Kong, and South Korea with cutting-edge programs.",
      universities: "150+ partner institutions",
      students: "800+ students placed"
    }
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
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
    <section className="py-16 md:py-24 relative overflow-hidden" ref={ref}>
      {/* Background Map with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="World Map" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-[#0A192F] opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          <h2 className="font-montserrat font-bold text-2xl md:text-3xl text-[#0A192F] mb-4">
            Our <span className="text-[#FFC300]">Global Reach</span>
          </h2>
          <div className="w-20 h-1 bg-[#FFC300] mx-auto mb-6"></div>
          <p className="font-roboto text-[#0A192F] text-base md:text-lg max-w-3xl mx-auto">
            Univista has established strong partnerships with leading universities and educational institutions across six continents, opening doors to diverse academic opportunities worldwide.
          </p>
        </motion.div>

        <motion.div 
          className="mb-16 relative overflow-hidden rounded-xl shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.2 } }
          }}
        >
          <div className="relative h-64 md:h-96 bg-[#0A192F]">
            <img 
              src="https://img.freepik.com/free-vector/clean-black-world-map-silhouette-style-template-design_1017-46154.jpg?uid=R122682615&ga=GA1.1.675669965.1739375808&semt=ais_hybrid&w=740" 
              alt="World Map with Highlighted Destinations" 
              className="w-full h-full object-cover opacity-40"
            />
            
            {/* Map Pins */}
            <motion.div 
              className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 0, opacity: 0 }}
              animate={controls}
              variants={{
                visible: { scale: 1, opacity: 1, transition: { delay: 0.4, duration: 0.5 } }
              }}
            >
              <div className="relative">
                <MapPin className="w-6 h-6 md:w-8 md:h-8 text-[#FFC300]" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#FFC300] rounded-full animate-ping"></div>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 0, opacity: 0 }}
              animate={controls}
              variants={{
                visible: { scale: 1, opacity: 1, transition: { delay: 0.6, duration: 0.5 } }
              }}
            >
              <div className="relative">
                <MapPin className="w-6 h-6 md:w-8 md:h-8 text-[#FFC300]" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#FFC300] rounded-full animate-ping"></div>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute top-1/3 left-3/4 transform -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 0, opacity: 0 }}
              animate={controls}
              variants={{
                visible: { scale: 1, opacity: 1, transition: { delay: 0.8, duration: 0.5 } }
              }}
            >
              <div className="relative">
                <MapPin className="w-6 h-6 md:w-8 md:h-8 text-[#FFC300]" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#FFC300] rounded-full animate-ping"></div>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute top-2/3 left-1/5 transform -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 0, opacity: 0 }}
              animate={controls}
              variants={{
                visible: { scale: 1, opacity: 1, transition: { delay: 1.0, duration: 0.5 } }
              }}
            >
              <div className="relative">
                <MapPin className="w-6 h-6 md:w-8 md:h-8 text-[#FFC300]" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#FFC300] rounded-full animate-ping"></div>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 0, opacity: 0 }}
              animate={controls}
              variants={{
                visible: { scale: 1, opacity: 1, transition: { delay: 1.2, duration: 0.5 } }
              }}
            >
              <div className="relative">
                <MapPin className="w-6 h-6 md:w-8 md:h-8 text-[#FFC300]" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#FFC300] rounded-full animate-ping"></div>
              </div>
            </motion.div>
            
            {/* Stats overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A192F] to-transparent py-4">
              <div className="container mx-auto px-4 flex justify-center">
                <motion.div 
                  className="flex items-center justify-center space-x-4 md:space-x-8 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                  variants={{
                    visible: { opacity: 1, y: 0, transition: { delay: 1.4, duration: 0.5 } }
                  }}
                >
                  <div className="flex flex-col items-center">
                    <span className="font-montserrat font-bold text-xl md:text-3xl text-[#FFC300]">30+</span>
                    <span className="font-roboto text-xs md:text-sm">Countries</span>
                  </div>
                  <div className="h-8 w-px bg-gray-400 opacity-50"></div>
                  <div className="flex flex-col items-center">
                    <span className="font-montserrat font-bold text-xl md:text-3xl text-[#FFC300]">1500+</span>
                    <span className="font-roboto text-xs md:text-sm">Universities</span>
                  </div>
                  <div className="h-8 w-px bg-gray-400 opacity-50"></div>
                  <div className="flex flex-col items-center">
                    <span className="font-montserrat font-bold text-xl md:text-3xl text-[#FFC300]">10000+</span>
                    <span className="font-roboto text-xs md:text-sm">Students</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate={controls}
              variants={fadeInUpVariants}
              className="bg-white rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-md hover:translate-y-[-4px]"
            >
              <div className="flex items-center mb-4">
                <div className="mr-3 p-2 rounded-full bg-[#FFC300] bg-opacity-20">
                  {destination.icon}
                </div>
                <h3 className="font-montserrat font-semibold text-lg text-[#0A192F]">{destination.country}</h3>
              </div>
              <p className="font-roboto text-sm text-[#0A192F] mb-4">
                {destination.description}
              </p>
              <div className="flex justify-between text-sm font-roboto">
                <div className="flex items-center">
                  <School className="w-4 h-4 text-[#FFC300] mr-1" />
                  <span className="text-[#0A192F]">{destination.universities}</span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-4 h-4 text-[#FFC300] mr-1" />
                  <span className="text-[#0A192F]">{destination.students}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, transition: { delay: 1.6, duration: 0.6 } }
          }}
        >
          <p className="font-roboto text-[#0A192F] text-base md:text-lg max-w-3xl mx-auto">
            No matter where you want to study, Univista's network of partner institutions ensures you'll find the perfect fit for your academic journey.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalReachSection;