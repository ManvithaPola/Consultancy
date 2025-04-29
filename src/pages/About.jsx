// src/pages/About.jsx
import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import AboutHero from '../components/AboutHero'; // Later you might create AboutHeroSection
import OurStorySection from '../components/OurStorySection';
import OurApproachSection from '../components/OurApproachSection';
import GlobalReachSection from '../components/GlobalReachSection';
import StudentSuccessStories from '../components/StudentSuccessStories';
import OurPartners from '../components/OurPartners';
import BehindTheScenes from '../components/BehindTheScenes';

function About() {
  return (
    <div>

      {/* Hero Section */}
      <AboutHero />

      {/* Our Story Section */}
      <OurStorySection />

      {/* Our Approach Section */}
      <OurApproachSection />

      {/* Global Reach Section */}
      <GlobalReachSection />

      {/* Student Success Stories Section */}
      <StudentSuccessStories />

      {/* Our Partners Section */}
      <OurPartners />

      {/* Behind the Scenes Section */}
      <BehindTheScenes />
    </div>
  );
}

export default About;