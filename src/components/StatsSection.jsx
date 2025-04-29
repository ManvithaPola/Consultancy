import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Typography, Box, Grid } from '@mui/material';
import { GraduationCap, Globe, Users, Check, Building, Award } from 'lucide-react';

const StatsSection = () => {
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

  const statsData = [
    {
      icon: <GraduationCap size={48} />,
      number: 5000,
      label: "Students Placed",
      suffix: "+",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: <Globe size={48} />,
      number: 100,
      label: "University Partners",
      suffix: "+",
      image: "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: <Users size={48} />,
      number: 90,
      label: "Student Satisfaction",
      suffix: "%",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: <Building size={48} />,
      number: 25,
      label: "Countries Represented",
      suffix: "+",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: <Award size={48} />,
      number: 15,
      label: "Years of Experience",
      suffix: "+",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: <Check size={48} />,
      number: 98,
      label: "Visa Success Rate",
      suffix: "%",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <Box 
      className="w-full py-20 relative overflow-hidden"
      sx={{ 
        backgroundColor: '#0A192F',
        position: 'relative',
      }}
    >
      <Box className="max-w-6xl mx-auto px-4 relative z-10">
        <Grid container spacing={4} ref={ref}>
          {statsData.map((stat, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="h-full"
              >
                <Box 
                  className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center justify-center h-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg border border-blue-300 border-opacity-20"
                  sx={{
                    height: '100%',
                    minHeight: '350px',
                    backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.7), rgba(10, 25, 47, 0.7)), url(${stat.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.3 }}
                    className="text-blue-300 mb-4"
                  >
                    {stat.icon}
                  </motion.div>
                  
                  <CountUp 
                    end={stat.number} 
                    suffix={stat.suffix} 
                    inView={inView} 
                    delay={index * 0.2}
                  />
                  
                  <Typography 
                    className="text-center mt-2"
                    sx={{ 
                      fontFamily: 'Roboto, sans-serif',
                      color: '#e0e0e0',
                      fontSize: '1rem',
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

// Custom CountUp component
const CountUp = ({ end, suffix = "", inView, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const duration = 2000;
  const frameDuration = 1000 / 60;
  const totalFrames = Math.round(duration / frameDuration);

  useEffect(() => {
    if (inView) {
      let frame = 0;
      const timer = setTimeout(() => {
        const counter = setInterval(() => {
          frame++;
          const progress = frame / totalFrames;
          const currentCount = Math.round(easeOutQuad(progress) * end);
          
          if (frame === totalFrames) {
            clearInterval(counter);
            setCount(end);
          } else {
            setCount(currentCount);
          }
        }, frameDuration);
        
        return () => clearInterval(counter);
      }, delay * 1000);
      
      return () => clearTimeout(timer);
    }
  }, [inView, end, delay]);

  const easeOutQuad = t => t * (2 - t);

  return (
    <Typography 
      variant="h3" 
      component="div"
      className="font-bold"
      sx={{ 
        fontFamily: 'Montserrat, sans-serif',
        color: '#FFC300',
        fontSize: { xs: '2.5rem', md: '3rem' },
        letterSpacing: '0.05em',
      }}
    >
      {count}{suffix}
    </Typography>
  );
};

export default StatsSection;