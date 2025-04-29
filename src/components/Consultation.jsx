import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Mail, Phone, User, Send, Check, Clock, MapPin, Globe, GraduationCap } from 'lucide-react';
import { TextField, Button, Alert, Snackbar } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Custom theme for MUI components
const theme = createTheme({
  palette: {
    primary: {
      main: '#FFC300',
    },
    secondary: {
      main: '#172A45',
    },
  },
  typography: {
    fontFamily: 'Inter, Poppins, "Open Sans", sans-serif',
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: '#FFC300',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#FFC300',
            },
          },
        },
      },
    },
  },
});

// Background gradient component
const GradientBackground = () => (
  <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0A192F] to-[#172A45] opacity-90"></div>
);

export default function Consultation() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    consultationDate: '',
    message: '',
  });
  
  const [openSuccess, setOpenSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setOpenSuccess(true);
      setLoading(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        consultationDate: '',
        message: '',
      });
    }, 1500);
  };
  
  const handleCloseSuccess = () => {
    setOpenSuccess(false);
  };
  
  const featuredDestinations = [
    { name: 'United Kingdom', icon: <MapPin size={18} />, count: '200+ Universities' },
    { name: 'United States', icon: <MapPin size={18} />, count: '500+ Universities' },
    { name: 'Canada', icon: <MapPin size={18} />, count: '150+ Universities' },
    { name: 'Australia', icon: <MapPin size={18} />, count: '120+ Universities' },
    { name: 'Germany', icon: <MapPin size={18} />, count: '90+ Universities' },
    { name: 'New Zealand', icon: <MapPin size={18} />, count: '60+ Universities' },
  ];
  
  const benefits = [
    { title: 'Personalized Guidance', icon: <User size={20} /> },
    { title: 'Visa Support', icon: <Globe size={20} /> },
    { title: 'University Selection', icon: <GraduationCap size={20} /> },
    { title: 'Fast Processing', icon: <Clock size={20} /> },
  ];

  return (
    <ThemeProvider theme={theme}>
      <div className="relative min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-[#0A192F] pt-16 pb-32">
          <GradientBackground />
          
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center"
            >
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Begin Your <span className="text-[#FFC300]">Global Education</span> Journey
              </motion.h1>
              
              <motion.p 
                className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                Book your personalized consultation session with our study abroad experts and take the first step toward your international education goals.
              </motion.p>
              
              <motion.div
                className="flex flex-wrap gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-[#FFC300] mr-2">{benefit.icon}</span>
                    <span className="text-white">{benefit.title}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
          
          {/* Wave SVG */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
              <path fill="#ffffff" fillOpacity="1" d="M0,96L80,80C160,64,320,32,480,32C640,32,800,64,960,69.3C1120,75,1280,53,1360,42.7L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
            </svg>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="container mx-auto px-4 md:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Booking Form Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="bg-gray-50 rounded-3xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold mb-6 text-[#0A192F]">Book Your Consultation</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below to schedule your personalized consultation with our experts.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Full Name"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      InputProps={{
                        startAdornment: <User size={18} className="mr-2 text-gray-400" />,
                      }}
                    />
                  </div>
                  
                  <div className="relative">
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      InputProps={{
                        startAdornment: <Mail size={18} className="mr-2 text-gray-400" />,
                      }}
                    />
                  </div>
                  
                  <div className="relative">
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      InputProps={{
                        startAdornment: <Phone size={18} className="mr-2 text-gray-400" />,
                      }}
                    />
                  </div>
                  
                  <div className="relative">
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Preferred Consultation Date"
                      name="consultationDate"
                      type="date"
                      value={formData.consultationDate}
                      onChange={handleChange}
                      required
                      InputLabelProps={{ shrink: true }}
                      InputProps={{
                        startAdornment: <Calendar size={18} className="mr-2 text-gray-400" />,
                      }}
                    />
                  </div>
                  
                  <div className="relative">
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      multiline
                      rows={4}
                    />
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      disabled={loading}
                      fullWidth
                      className="bg-gradient-to-r from-[#0A192F] to-[#172A45] hover:shadow-lg"
                      sx={{ 
                        py: 1.5, 
                        borderRadius: '12px',
                        background: 'linear-gradient(90deg, #0A192F 0%, #172A45 100%)', color: 'white',
                        '&:hover': {
                          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                        }
                      }}
                      endIcon={loading ? undefined : <Send size={18} />}
                    >
                      {loading ? 'Submitting...' : 'Book Consultation'}
                    </Button>
                  </motion.div>
                </form>
              </div>
            </motion.div>
            
            {/* Information Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6 text-[#0A192F]">Why Choose Us?</h2>
                <p className="text-gray-600 mb-8">
                  With over 15 years of experience in international education consulting, we've successfully placed 50,000+ students in top universities worldwide.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                  {featuredDestinations.map((destination, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.03, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                      className="bg-white rounded-xl p-4 shadow-md border border-gray-100 flex items-center"
                    >
                      <div className="h-10 w-10 rounded-full bg-[#172A45] flex items-center justify-center mr-4">
                        <span className="text-[#FFC300]">{destination.icon}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#0A192F]">{destination.name}</h3>
                        <p className="text-sm text-gray-500">{destination.count}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="bg-gradient-to-r from-[#0A192F] to-[#172A45] rounded-3xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Success Rate <span className="text-[#FFC300]">98%</span></h3>
                  <p className="mb-6">
                    Our consultants have helped thousands of students get admissions in their dream universities with scholarships.
                  </p>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex flex-col items-center">
                      <div className="text-3xl font-bold text-[#FFC300]">15k+</div>
                      <div className="text-sm text-gray-300">Students</div>
                    </div>
                    <div className="h-12 w-px bg-gray-600"></div>
                    <div className="flex flex-col items-center">
                      <div className="text-3xl font-bold text-[#FFC300]">25+</div>
                      <div className="text-sm text-gray-300">Countries</div>
                    </div>
                    <div className="h-12 w-px bg-gray-600"></div>
                    <div className="flex flex-col items-center">
                      <div className="text-3xl font-bold text-[#FFC300]">500+</div>
                      <div className="text-sm text-gray-300">Universities</div>
                    </div>
                  </div>
                </div>
              </div>
              
              
            </motion.div>
          </div>
        </div>
        
        {/* Success notification */}
        <Snackbar open={openSuccess} autoHideDuration={6000} onClose={handleCloseSuccess}>
          <Alert
            onClose={handleCloseSuccess}
            severity="success"
            sx={{ 
              width: '100%',
              borderRadius: '10px',
              backgroundColor: '#0A192F',
              color: 'white',
              '& .MuiAlert-icon': {
                color: '#FFC300'
              }
            }}
            icon={<Check size={24} />}
          >
            Your consultation request has been submitted successfully!
          </Alert>
        </Snackbar>
      </div>
    </ThemeProvider>
  );
}