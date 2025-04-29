import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter,
  ChevronRight,
  Send,
  ArrowUp
} from 'lucide-react';
import { Typography, TextField, Button, Divider } from '@mui/material';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#0A192F] text-white w-full">
      {/* Newsletter Section - Stacked Layout */}
<div className="bg-[#0A192F] w-full py-12 px-4 border-b border-[rgba(255,255,255,0.1)]">
  <div className="max-w-3xl mx-auto text-center">
    <div className="mb-8">
      <Typography variant="h5" className="font-bold mb-3">
        Stay Updated with Univista
      </Typography>
      <Typography variant="body1" className="text-gray-300">
        Subscribe to receive the latest study abroad news and opportunities
      </Typography>
    </div>
    
    <form onSubmit={handleSubmit} className="flex w-full max-w-md mx-auto">
      <TextField
        placeholder="Your email address"
        variant="outlined"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        sx={{
          '& .MuiOutlinedInput-root': {
            bgcolor: 'white',
            borderRadius: '6px 0 0 6px',
            color: '#0A192F',
            '& fieldset': {
              borderColor: '#E2E8F0',
              borderRight: 'none',
            },
            '&:hover fieldset': {
              borderColor: '#FFC300',
              borderRight: 'none',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#FFC300',
              borderRight: 'none',
            },
          },
        }}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          bgcolor: '#FFC300',
          color: '#0A192F',
          borderRadius: '0 6px 6px 0',
          height: '56px',
          minWidth: '120px',
          '&:hover': {
            bgcolor: '#e6b000',
          },
        }}
      >
        {subscribed ? 'Subscribed!' : 'Subscribe'}
      </Button>
    </form>
  </div>
</div>

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Typography variant="h6" className="font-bold mb-4 text-[#FFC300]">
              Univista Global
            </Typography>
            <Typography variant="body2" className="text-gray-300 mb-4">
              Helping students achieve their dreams of studying abroad since 2010.
            </Typography>
            <div className="flex items-center mb-3">
              <MapPin size={18} className="text-[#FFC300] mr-2" />
              <Typography variant="body2" className="text-gray-300">
                123 University St, City, Country
              </Typography>
            </div>
            <div className="flex items-center mb-3">
              <Mail size={18} className="text-[#FFC300] mr-2" />
              <a href="mailto:info@univista.com" className="text-gray-300 hover:text-[#FFC300]">
                info@univista.com
              </a>
            </div>
            <div className="flex items-center">
              <Phone size={18} className="text-[#FFC300] mr-2" />
              <a href="tel:+1234567890" className="text-gray-300 hover:text-[#FFC300]">
                +123 456 7890
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <Typography variant="h6" className="font-bold mb-4 text-[#FFC300]">
              Quick Links
            </Typography>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Services', 'Universities', 'Testimonials', 'Contact'].map((item) => (
                <motion.li 
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <a href="#" className="text-gray-300 hover:text-[#FFC300] flex items-center">
                    <ChevronRight size={14} className="mr-1" />
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <Typography variant="h6" className="font-bold mb-4 text-[#FFC300]">
              Our Services
            </Typography>
            <ul className="space-y-2">
              {['University Selection', 'Visa Assistance', 'Scholarships', 'Test Preparation', 'Application Help', 'Pre-Departure'].map((service) => (
                <motion.li 
                  key={service}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <a href="#" className="text-gray-300 hover:text-[#FFC300] flex items-center">
                    <ChevronRight size={14} className="mr-1" />
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <Typography variant="h6" className="font-bold mb-4 text-[#FFC300]">
              Connect With Us
            </Typography>
            <div className="flex space-x-4 mb-6">
              {[
                { icon: Facebook, url: '#' },
                { icon: Twitter, url: '#' },
                { icon: Instagram, url: '#' },
                { icon: Linkedin, url: '#' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  className="bg-[rgba(255,255,255,0.1)] p-2 rounded-full hover:bg-[#FFC300] transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={20} className="text-white" />
                </motion.a>
              ))}
            </div>
            <Typography variant="body2" className="text-gray-300 mb-2">
              Office Hours:
            </Typography>
            <Typography variant="body2" className="text-gray-300">
              Mon-Fri: 9AM - 6PM
            </Typography>
          </div>
        </div>

        <Divider sx={{ my: 6, bgcolor: 'rgba(255,255,255,0.1)' }} />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Typography variant="body2" className="text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Univista. All rights reserved.
          </Typography>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-[#FFC300] text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-[#FFC300] text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-[#FFC300] text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-[#FFC300] text-[#0A192F] p-2 rounded-full shadow-lg z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
};

export default Footer;