import React, { useEffect, useState } from 'react';
import { Star, ArrowRight, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button, Fade } from '@mui/material';

export default function StudentSuccessStories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  
  // Student success stories data
  const successStories = [
    {
      id: 1,
      name: "Emma Richardson",
      program: "International Business",
      university: "London School of Economics",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      quote: "Working with Univista transformed my application from ordinary to exceptional. Their strategic guidance helped me secure a spot at my dream school with a scholarship.",
      achievement: "Full scholarship recipient"
    },
    {
      id: 2, 
      name: "David Chen",
      program: "Computer Science",
      university: "Stanford University",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      quote: "The personalized approach from Univista's consultants helped me highlight my unique strengths. Their interview preparation was invaluable for my success.",
      achievement: "Research position secured"
    },
    {
      id: 3,
      name: "Sophia Martinez",
      program: "Medicine",
      university: "Johns Hopkins University",
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      quote: "I was struggling with my personal statement until Univista helped me craft a compelling narrative that showcased my passion for medicine and service.",
      achievement: "Merit-based scholarship"
    },
    {
      id: 4,
      name: "James Wilson",
      program: "Architecture",
      university: "MIT",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      quote: "From application strategy to portfolio refinement, Univista provided comprehensive guidance that made all the difference in my acceptance to MIT.",
      achievement: "Featured portfolio award"
    },
    {
      id: 5,
      name: "Aisha Patel",
      program: "International Relations",
      university: "Oxford University",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      quote: "The consultants at Univista helped me articulate my vision and experiences in a way that resonated with admissions committees internationally.",
      achievement: "Rhodes Scholar finalist"
    }
  ];

  // Handle resize and set up Intersection Observer
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    
    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    // Observe all elements with animation classes
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);

  // Calculate number of visible cards based on screen width
  const getVisibleCards = () => {
    if (windowWidth >= 1280) return 3;
    if (windowWidth >= 768) return 2;
    return 1;
  };

  const visibleCards = getVisibleCards();

  // Navigate through cards
  const nextSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex + visibleCards >= successStories.length 
        ? 0 
        : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 
        ? Math.max(0, successStories.length - visibleCards) 
        : prevIndex - 1
    );
  };

  // Determine which cards are currently visible
  const visibleStories = successStories.slice(
    activeIndex,
    Math.min(activeIndex + visibleCards, successStories.length)
  );

  return (
    <section className="py-16 bg-white" id="success-stories">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
          <h2 className="text-4xl font-bold font-['Montserrat'] text-[#0A192F] mb-4">
            Student Success Stories
          </h2>
          <div className="w-24 h-1 bg-[#FFC300] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg font-['Roboto'] text-[#0A192F]">
            Discover how Univista has helped students achieve their academic dreams and secure 
            placements at prestigious institutions around the world.
          </p>
        </div>

        {/* Success Stories Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="hidden md:flex justify-between absolute top-1/2 -translate-y-1/2 w-full px-4 z-10">
            <Button 
              onClick={prevSlide}
              className="min-w-0 w-12 h-12 rounded-full bg-white shadow-md hover:bg-gray-50 transition-all duration-300 flex items-center justify-center"
              aria-label="Previous slide"
            >
              <ChevronLeft className="text-[#0A192F]" size={24} />
            </Button>
            <Button 
              onClick={nextSlide}
              className="min-w-0 w-12 h-12 rounded-full bg-white shadow-md hover:bg-gray-50 transition-all duration-300 flex items-center justify-center"
              aria-label="Next slide"
            >
              <ChevronRight className="text-[#0A192F]" size={24} />
            </Button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {visibleStories.map((story, index) => (
              <Fade 
                in={true} 
                timeout={500} 
                style={{ transitionDelay: `${index * 150}ms` }} 
                key={story.id}
              >
                <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out bg-white rounded-lg shadow-md hover:shadow-lg border border-gray-100 overflow-hidden transition-all">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={story.image} 
                      alt={story.name} 
                      className="w-full h-full object-cover transition-transform duration-500 ease-out transform hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A192F] to-transparent p-6">
                      <h3 className="text-xl font-['Montserrat'] font-semibold text-white">{story.name}</h3>
                      <p className="text-sm text-gray-200 font-['Roboto']">{story.program}, {story.university}</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start mb-4">
                      <Quote className="text-[#FFC300] mr-2 flex-shrink-0 opacity-50" size={24} />
                      <p className="font-['Roboto'] text-[#0A192F] text-base italic">
                        {story.quote}
                      </p>
                    </div>
                    
                    <div className="flex items-center mt-6 pt-4 border-t border-gray-100">
                      <Star className="text-[#FFC300] mr-2" size={20} />
                      <span className="font-['Montserrat'] font-medium text-[#FFC300]">
                        Achievement: <span className="font-['Roboto'] text-[#0A192F]">{story.achievement}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center mt-8 md:hidden">
            {Array.from({ length: Math.ceil(successStories.length / getVisibleCards()) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index * getVisibleCards())}
                className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
                  activeIndex === index * getVisibleCards() ? 'bg-[#FFC300]' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-20 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-3xl font-['Montserrat'] font-bold text-[#FFC300] mb-2">94%</h3>
              <p className="font-['Roboto'] text-[#0A192F]">Acceptance rate at top-tier universities</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-3xl font-['Montserrat'] font-bold text-[#FFC300] mb-2">85%</h3>
              <p className="font-['Roboto'] text-[#0A192F]">Students receive scholarships or financial aid</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-3xl font-['Montserrat'] font-bold text-[#FFC300] mb-2">500+</h3>
              <p className="font-['Roboto'] text-[#0A192F]">Students placed in global institutions yearly</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}