import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Award, Globe } from 'lucide-react';
import { Tooltip, Fade, Chip } from '@mui/material';

export default function OurPartners() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [visiblePartners, setVisiblePartners] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerRow, setItemsPerRow] = useState(4);

  // Partner university data with real universities
  const partners = [
    {
      id: 1,
      name: "Harvard University",
      country: "USA",
      region: "north-america",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFPA9X9upaWwUX6csGax_p9LYiXJSlSvcpMQ&s",
      scholarships: true,
      exclusive: true,
      website: "https://harvard.edu",
      description: "Exclusive scholarship opportunities for international students in STEM programs."
    },
    {
      id: 2,
      name: "University of Oxford",
      country: "UK",
      region: "europe",
      logo: "https://cdn.britannica.com/03/117103-050-F4C2FC83/view-University-of-Oxford-England-Oxfordshire.jpg",
      scholarships: true,
      exclusive: true,
      website: "https://ox.ac.uk",
      description: "Rhodes scholarship counseling and preparation for qualified candidates."
    },
    {
      id: 3,
      name: "ETH Zurich",
      country: "Switzerland",
      region: "europe",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1qU3FsrvoQGxMEmzDllAA1YJhlrQUctw9qA&s",
      scholarships: true,
      exclusive: false,
      website: "https://ethz.ch",
      description: "Engineering and science program placements with excellence scholarships."
    },
    {
      id: 4,
      name: "University of Tokyo",
      country: "Japan",
      region: "asia",
      logo: "https://info.japantimes.co.jp/japanese-university-guide/u-tokyo/images/pic01.jpg",
      scholarships: true,
      exclusive: false,
      website: "https://www.u-tokyo.ac.jp/en",
      description: "MEXT scholarship guidance for research and graduate programs."
    },
    {
      id: 5,
      name: "Stanford University",
      country: "USA",
      region: "north-america",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9kLusoGCsICr2RV8w7FevQWHnv3wLmmBOww&s",
      scholarships: true,
      exclusive: true,
      website: "https://stanford.edu",
      description: "Knight-Hennessy Scholars program preparation and counseling."
    },
    {
      id: 6,
      name: "University of Melbourne",
      country: "Australia",
      region: "oceania",
      logo: "https://edysor.in/images/university/banner/University-of-Melbourne.webp",
      scholarships: true,
      exclusive: false,
      website: "https://unimelb.edu.au",
      description: "Melbourne International Undergraduate Scholarship application support."
    },
    {
      id: 7,
      name: "University of Cape Town",
      country: "South Africa",
      region: "africa",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZYzrxjvTxQaQA_nvH6xjasvSnZIPzudKRvg&s",
      scholarships: true,
      exclusive: false,
      website: "https://www.uct.ac.za",
      description: "UCT International and Refugee Scholarships application guidance."
    },
    {
      id: 8,
      name: "National University of Singapore",
      country: "Singapore",
      region: "asia",
      logo: "https://images.shiksha.com/mediadata/images/1533299525phpREOvbA.jpeg",
      scholarships: true,
      exclusive: true,
      website: "https://nus.edu.sg",
      description: "Science & Technology Undergraduate Scholarship exclusive counseling."
    },
    {
      id: 9,
      name: "University of Toronto",
      country: "Canada",
      region: "north-america",
      logo: "https://d3d0lqu00lnqvz.cloudfront.net/media/media/UofT_cmh2315fl.jpg",
      scholarships: true,
      exclusive: false,
      website: "https://utoronto.ca",
      description: "Lester B. Pearson International Scholarship application support."
    },
    {
      id: 10,
      name: "Technical University of Munich",
      country: "Germany",
      region: "europe",
      logo: "https://images.shiksha.com/mediadata/images/1533559592phpsYF8Oy.jpeg",
      scholarships: true,
      exclusive: false,
      website: "https://www.tum.de/en",
      description: "Engineering excellence programs with DAAD scholarship counseling."
    },
    {
      id: 11,
      name: "Tsinghua University",
      country: "China",
      region: "asia",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT4xrZcOLwInDtoa-8qdKgrRW7Zq5piRQMSA&s",
      scholarships: true,
      exclusive: true,
      website: "https://www.tsinghua.edu.cn/en",
      description: "Exclusive Schwarzman Scholars program preparation and mentoring."
    },
    {
      id: 12,
      name: "University of Edinburgh",
      country: "UK",
      region: "europe",
      logo: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/f8/e6/41/photo1jpg.jpg?w=900&h=500&s=1",
      scholarships: true,
      exclusive: false,
      website: "https://www.ed.ac.uk",
      description: "Edinburgh Global Research Scholarships application support."
    }
  ];

  // Filter partners based on active category
  useEffect(() => {
    let filtered = [...partners];
    
    if (activeCategory === 'exclusive') {
      filtered = partners.filter(partner => partner.exclusive);
    } else if (activeCategory === 'scholarships') {
      filtered = partners.filter(partner => partner.scholarships);
    } else if (activeCategory !== 'all') {
      filtered = partners.filter(partner => partner.region === activeCategory);
    }
    
    setVisiblePartners(filtered);
    setCurrentIndex(0);
  }, [activeCategory]);

  // Handle window resize to adjust items per row
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setItemsPerRow(4);
      } else if (window.innerWidth >= 768) {
        setItemsPerRow(3);
      } else if (window.innerWidth >= 640) {
        setItemsPerRow(2);
      } else {
        setItemsPerRow(1);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    
    // Animation setup
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);

  // Navigation functions
  const nextSlide = () => {
    if (currentIndex + itemsPerRow < visiblePartners.length) {
      setCurrentIndex(currentIndex + itemsPerRow);
    }
  };

  const prevSlide = () => {
    if (currentIndex - itemsPerRow >= 0) {
      setCurrentIndex(currentIndex - itemsPerRow);
    }
  };

  // Calculate current page and total pages for pagination
  const currentPage = Math.floor(currentIndex / itemsPerRow) + 1;
  const totalPages = Math.ceil(visiblePartners.length / itemsPerRow);
  
  // Get current visible partners
  const currentPartners = visiblePartners.slice(
    currentIndex,
    currentIndex + itemsPerRow
  );

  return (
    <section className="py-16 bg-[#F5F7FA]" id="our-partners">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
          <h2 className="text-4xl font-bold font-['Montserrat'] text-[#0A192F] mb-3">Our Partners</h2>
          <div className="w-24 h-1 bg-[#FFC300] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg font-['Roboto'] text-[#0A192F]">
            Univista collaborates with prestigious universities worldwide, providing exclusive access to scholarship opportunities and academic pathways.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out delay-100">
          <Chip 
            label="All Partners" 
            className={`font-['Roboto'] px-4 py-3 ${activeCategory === 'all' ? 'bg-[#0A192F] text-white' : 'bg-white text-[#0A192F]'}`}
            onClick={() => setActiveCategory('all')}
            clickable
          />
          <Chip 
            label="Exclusive Partnerships" 
            className={`font-['Roboto'] px-4 py-3 ${activeCategory === 'exclusive' ? 'bg-[#0A192F] text-white' : 'bg-white text-[#0A192F]'}`}
            onClick={() => setActiveCategory('exclusive')}
            clickable
          />
          <Chip 
            label="With Scholarships" 
            className={`font-['Roboto'] px-4 py-3 ${activeCategory === 'scholarships' ? 'bg-[#0A192F] text-white' : 'bg-white text-[#0A192F]'}`}
            onClick={() => setActiveCategory('scholarships')}
            clickable
          />
          <Chip 
            label="North America" 
            className={`font-['Roboto'] px-4 py-3 ${activeCategory === 'north-america' ? 'bg-[#0A192F] text-white' : 'bg-white text-[#0A192F]'}`}
            onClick={() => setActiveCategory('north-america')}
            clickable
          />
          <Chip 
            label="Europe" 
            className={`font-['Roboto'] px-4 py-3 ${activeCategory === 'europe' ? 'bg-[#0A192F] text-white' : 'bg-white text-[#0A192F]'}`}
            onClick={() => setActiveCategory('europe')}
            clickable
          />
          <Chip 
            label="Asia" 
            className={`font-['Roboto'] px-4 py-3 ${activeCategory === 'asia' ? 'bg-[#0A192F] text-white' : 'bg-white text-[#0A192F]'}`}
            onClick={() => setActiveCategory('asia')}
            clickable
          />
        </div>

        {/* Partners Grid */}
        <div className="relative">
          {/* Navigation Buttons */}
          {visiblePartners.length > itemsPerRow && (
            <div className="hidden md:flex justify-between absolute top-1/2 -translate-y-1/2 w-full px-4 z-10">
              <button 
                onClick={prevSlide} 
                disabled={currentIndex === 0}
                className={`flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'} transition-all duration-300`}
                aria-label="Previous"
              >
                <ChevronLeft className="text-[#0A192F]" size={24} />
              </button>
              <button 
                onClick={nextSlide} 
                disabled={currentIndex + itemsPerRow >= visiblePartners.length}
                className={`flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md ${currentIndex + itemsPerRow >= visiblePartners.length ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'} transition-all duration-300`}
                aria-label="Next"
              >
                <ChevronRight className="text-[#0A192F]" size={24} />
              </button>
            </div>
          )}

          {/* Partners display */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentPartners.map((partner, index) => (
              <Fade in={true} timeout={500} style={{ transitionDelay: `${index * 100}ms` }} key={partner.id}>
                <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out bg-white rounded-lg shadow-md hover:shadow-lg p-6">
                  <a 
                    href={partner.website}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div className="h-32 flex items-center justify-center mb-4 relative overflow-hidden rounded-md bg-white p-4">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`} 
                        className="max-h-full max-w-full object-cover transform transition-transform duration-500 group-hover:scale-110" 
                      />
                    </div>
                    
                    <h3 className="text-lg font-['Montserrat'] font-semibold text-[#0A192F] text-center mb-2 group-hover:text-[#FFC300] transition-colors duration-300">
                      {partner.name}
                    </h3>
                    
                    <div className="flex items-center justify-center text-sm text-gray-500 mb-3">
                      <Globe size={16} className="mr-1" />
                      <span className="font-['Roboto']">{partner.country}</span>
                    </div>
                    
                    <p className="font-['Roboto'] text-[#0A192F] text-sm text-center mb-4">
                      {partner.description}
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-2">
                      {partner.exclusive && (
                        <Tooltip title="Exclusive partnership with priority placements">
                          <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-[#0A192F] text-white">
                            <Award size={12} className="mr-1" /> Exclusive
                          </span>
                        </Tooltip>
                      )}
                      {partner.scholarships && (
                        <Tooltip title="Scholarship opportunities available">
                          <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-[#FFC300] text-[#0A192F]">
                            Scholarships
                          </span>
                        </Tooltip>
                      )}
                    </div>
                  </a>
                </div>
              </Fade>
            ))}
          </div>

          {/* Pagination for mobile */}
          {visiblePartners.length > itemsPerRow && (
            <div className="flex justify-center items-center mt-8">
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className={`w-10 h-10 flex items-center justify-center rounded-full ${currentIndex === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-[#0A192F] hover:bg-gray-100'}`}
              >
                <ChevronLeft size={20} />
              </button>
              
              <span className="mx-4 font-['Roboto'] text-[#0A192F]">
                Page {currentPage} of {totalPages}
              </span>
              
              <button
                onClick={nextSlide}
                disabled={currentIndex + itemsPerRow >= visiblePartners.length}
                className={`w-10 h-10 flex items-center justify-center rounded-full ${currentIndex + itemsPerRow >= visiblePartners.length ? 'text-gray-300 cursor-not-allowed' : 'text-[#0A192F] hover:bg-gray-100'}`}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>

        {/* Partnership Benefits */}
        <div className="mt-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
          <h3 className="text-2xl font-['Montserrat'] font-semibold text-[#0A192F] text-center mb-8">
            Benefits of Our University Partnerships
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-['Montserrat'] font-medium text-lg text-[#FFC300] mb-3">
                Exclusive Access
              </h4>
              <p className="font-['Roboto'] text-[#0A192F]">
                Gain priority consideration and direct pathways to admissions at prestigious partner institutions through our established relationships.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-['Montserrat'] font-medium text-lg text-[#FFC300] mb-3">
                Scholarship Opportunities
              </h4>
              <p className="font-['Roboto'] text-[#0A192F]">
                Access specialized guidance for scholarship applications with higher success rates through our partner-specific expertise.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-['Montserrat'] font-medium text-lg text-[#FFC300] mb-3">
                Application Support
              </h4>
              <p className="font-['Roboto'] text-[#0A192F]">
                Receive tailored application strategies based on insider knowledge of what each university values in their ideal candidates.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
          <a 
            href="#contact" 
            className="inline-flex items-center font-['Montserrat'] font-medium bg-[#0A192F] text-white hover:bg-[#132447] py-3 px-8 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
          >
            Explore Partnership Opportunities
            <ExternalLink size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}