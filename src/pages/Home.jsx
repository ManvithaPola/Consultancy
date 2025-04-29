// src/pages/Home.js
import React from 'react';
import Hero from '../components/Hero';
import Aboutus from '../components/Aboutus';
import HowItWorksSection from '../components/HowItWorksSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import TopDestinationsSection from '../components/TopDestinationsSection';
import BlogResourcesSection from '../components/BlogResourcesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQAccordion from '../components/FAQAccordion';

function Home() {
  return (
    <div>
      <Hero />
      <Aboutus />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <TopDestinationsSection />
      <BlogResourcesSection />
      <TestimonialsSection />
      <FAQAccordion />
    </div>
  );
}

export default Home;