import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter,
  ChevronDown
} from 'lucide-react';
import { TextField, Button, CircularProgress } from '@mui/material';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="font-['Poppins'] bg-white text-gray-800">
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-blue-50 to-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={fadeInUp}
            className="absolute top-0 right-0 -z-10 opacity-10 w-full h-full"
          >
            <img 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="World Map Background" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.h1 
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A192F]"
          >
            Get in Touch with Univista
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="mt-4 text-xl md:text-2xl text-gray-600 max-w-3xl"
          >
            We're here to help you start your study abroad journey.
          </motion.p>

          <motion.div 
            variants={fadeInUp}
            className="mt-12 flex justify-center"
          >
            <motion.a
              href="#contact-form"
              className="flex items-center text-[#0A192F] group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">Scroll to Contact Form</span>
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Contact Form Section */}
        <motion.div
          id="contact-form"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-xl p-8 md:p-10"
        >
          <h2 className="text-3xl font-bold text-[#0A192F] mb-6">Send Us a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <TextField
                label="Full Name"
                variant="outlined"
                fullWidth
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                error={!!errors.fullName}
                helperText={errors.fullName}
                className="bg-[#F5F7FA]"
                InputProps={{
                  style: { borderRadius: '8px' }
                }}
              />
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <TextField
                  label="Email Address"
                  variant="outlined"
                  fullWidth
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  className="bg-[#F5F7FA]"
                  InputProps={{
                    style: { borderRadius: '8px' }
                  }}
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <TextField
                  label="Phone Number"
                  variant="outlined"
                  fullWidth
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-[#F5F7FA]"
                  InputProps={{
                    style: { borderRadius: '8px' }
                  }}
                />
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <TextField
                label="Subject"
                variant="outlined"
                fullWidth
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                error={!!errors.subject}
                helperText={errors.subject}
                className="bg-[#F5F7FA]"
                InputProps={{
                  style: { borderRadius: '8px' }
                }}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <TextField
                label="Your Message"
                variant="outlined"
                fullWidth
                multiline
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                error={!!errors.message}
                helperText={errors.message}
                className="bg-[#F5F7FA]"
                InputProps={{
                  style: { borderRadius: '8px' }
                }}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="pt-2"
            >
              <Button
                type="submit"
                variant="contained"
                disabled={isSubmitting}
                sx={{
                  backgroundColor: '#0A192F',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  textTransform: 'none',
                  fontSize: '16px',
                  fontWeight: '600',
                  '&:hover': {
                    backgroundColor: '#FFC300',
                    color: '#0A192F'
                  }
                }}
                className="w-full md:w-auto flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
              </Button>
            </motion.div>
            
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 text-green-700 p-4 rounded-lg"
              >
                Thank you! Your message has been sent successfully. We'll get back to you shortly.
              </motion.div>
            )}
          </form>
        </motion.div>
        
        {/* Contact Info and Map Section */}
        <div className="space-y-12">
          {/* Direct Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0A192F] text-white rounded-xl p-8 shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.div 
                variants={fadeInUp}
                className="flex items-start"
              >
                <MapPin size={24} className="text-[#FFC300] mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Our Office</h3>
                  <p className="text-gray-300">123 Global Education Street<br />
                  Silicon Valley, CA 94024<br />
                  United States</p>
                </div>
              </motion.div>
              
              <motion.div 
                variants={fadeInUp}
                className="flex items-start"
              >
                <Phone size={24} className="text-[#FFC300] mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                  <p className="text-gray-300">Mon-Fri, 9AM-6PM EST</p>
                </div>
              </motion.div>
              
              <motion.div 
                variants={fadeInUp}
                className="flex items-start"
              >
                <Mail size={24} className="text-[#FFC300] mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                  <p className="text-gray-300">info@univista.com</p>
                  <p className="text-gray-300">support@univista.com</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Google Maps */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-xl overflow-hidden shadow-lg h-80"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50766.83026215485!2d-122.14450537425955!3d37.44007350364989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fa6b1117280ff%3A0xebbf998e5df289ab!2sPalo%20Alto%2C%20CA!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Univista Office Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
      
      
    </div>
  );
};

export default ContactUsPage;