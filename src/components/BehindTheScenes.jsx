import { useState, useEffect } from 'react';
import { Users, GraduationCap, Globe, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Founder & CEO",
    expertise: "International Education",
    description: "With over 15 years of experience in international education, Sarah founded Univista to help students unlock global opportunities.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "David Chen",
    position: "Academic Advisor",
    expertise: "University Admissions",
    description: "David specializes in matching students with programs that align with their academic goals and career aspirations.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Maya Patel",
    position: "Visa Specialist",
    expertise: "Immigration Law",
    description: "Maya guides students through the complex visa application process with her extensive knowledge of international immigration policies.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "James Wilson",
    position: "Student Experience Manager",
    expertise: "Cross-cultural Integration",
    description: "James ensures every student has the support needed to thrive academically and personally in their new environment.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const officeImages = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
];

export default function BehindTheScenes() {
  const [visibleSection, setVisibleSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section-tracker');
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75 && rect.bottom >= window.innerHeight * 0.25) {
          setVisibleSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2 
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="section-tracker">
        <motion.div 
          className="max-w-7xl mx-auto text-center mb-16"
          initial="hidden"
          animate={visibleSection >= 0 ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl font-bold font-montserrat text-[#0A192F] mb-6"
            variants={itemVariants}
          >
            Behind the Scenes
          </motion.h2>
          <motion.p 
            className="text-lg font-roboto text-[#0A192F] max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Meet the dedicated professionals who work tirelessly to help students achieve their international education dreams. Our diverse team brings together expertise from across the globe to provide personalized guidance.
          </motion.p>
        </motion.div>
      </div>

      {/* Values Section */}
      <div className="section-tracker">
        <motion.div 
          className="max-w-7xl mx-auto mb-20"
          initial="hidden"
          animate={visibleSection >= 1 ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h3 
            className="text-2xl font-montserrat text-[#0A192F] mb-10 text-center"
            variants={itemVariants}
          >
            Our Values
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Users size={32} />, title: "Student-Centered", text: "Every decision we make puts students' needs first" },
              { icon: <GraduationCap size={32} />, title: "Academic Excellence", text: "We help students achieve their highest potential" },
              { icon: <Globe size={32} />, title: "Global Perspective", text: "We embrace diversity and cultural exchange" },
              { icon: <HeartHandshake size={32} />, title: "Genuine Care", text: "We provide support throughout the entire journey" }
            ].map((value, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-50"
                variants={itemVariants}
              >
                <div className="text-[#FFC300] mb-4">
                  {value.icon}
                </div>
                <h4 className="font-montserrat font-semibold text-[#0A192F] mb-2">{value.title}</h4>
                <p className="font-roboto text-[#0A192F]">{value.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Team Members Section */}
      <div className="section-tracker">
        <motion.div 
          className="max-w-7xl mx-auto mb-20"
          initial="hidden"
          animate={visibleSection >= 2 ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h3 
            className="text-2xl font-montserrat text-[#0A192F] mb-10 text-center"
            variants={itemVariants}
          >
            Meet Our Team
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100"
                variants={itemVariants}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-montserrat font-semibold text-lg text-[#0A192F]">
                    <span className="text-[#FFC300]">{member.name}</span>
                  </h4>
                  <p className="font-roboto text-[#0A192F] font-medium mt-1">{member.position}</p>
                  <p className="font-roboto text-[#0A192F] text-sm mt-1">{member.expertise}</p>
                  <p className="font-roboto text-[#0A192F] mt-4 text-sm">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Office Space Section */}
      <div className="section-tracker">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="hidden"
          animate={visibleSection >= 3 ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h3 
            className="text-2xl font-montserrat text-[#0A192F] mb-10 text-center"
            variants={itemVariants}
          >
            Our Workspace
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {officeImages.map((image, index) => (
              <motion.div 
                key={index}
                className="rounded-lg overflow-hidden shadow-sm"
                variants={itemVariants}
              >
                <img 
                  src={image} 
                  alt={`Univista office space ${index + 1}`} 
                  className="w-full h-64 object-cover"
                />
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-12 text-center bg-gray-50 p-8 rounded-lg border-l-4 border-[#FFC300]"
            variants={itemVariants}
          >
            <h4 className="font-montserrat font-semibold text-lg text-[#0A192F] mb-4">Join Our Team</h4>
            <p className="font-roboto text-[#0A192F] max-w-3xl mx-auto">
              Passionate about international education? We're always looking for dedicated professionals to join our growing team. Send your resume to <span className="text-[#FFC300] font-medium">careers@univista.com</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}