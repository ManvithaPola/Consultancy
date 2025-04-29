import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  BookOpen, 
  Calendar, 
  User, 
  Clock, 
  ChevronRight
} from 'lucide-react';

const BlogResourcesSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Complete Guide to Scholarship Applications: Tips from Successful Students",
      excerpt: "Discover proven strategies and insider tips from students who successfully secured scholarships for their international education.",
      image: "https://img.freepik.com/free-photo/scholarship-application-form-foundation-concept_53876-121218.jpg?uid=R122682615&ga=GA1.1.675669965.1739375808&semt=ais_hybrid&w=740",
      category: "Scholarships",
      author: "Dr. Sarah Johnson",
      date: "April 21, 2025",
      readTime: "7 min read",
      featured: true
    },
    {
      id: 2,
      title: "Student Visa Interview: Common Questions and How to Answer Them",
      excerpt: "Prepare for your student visa interview with our comprehensive guide covering frequently asked questions.",
      image: "https://img.freepik.com/premium-photo/portrait-bearded-male-consultant-working-us-embassy-office-holding-application-form-while_622301-5736.jpg?uid=R122682615&ga=GA1.1.675669965.1739375808&semt=ais_hybrid&w=740",
      category: "Visa Guide",
      author: "Michael Chen",
      date: "April 15, 2025",
      readTime: "5 min read",
      featured: false
    },
    {
      id: 3,
      title: "Cost of Living Comparison: Top 10 Student Cities Around the World",
      excerpt: "An in-depth analysis of living expenses in popular study destinations to help you budget accurately.",
      image: "https://img.freepik.com/free-photo/front-view-arrangement-economy-elements_23-2148793796.jpg?uid=R122682615&ga=GA1.1.675669965.1739375808&semt=ais_hybrid&w=740",
      category: "Student Life",
      author: "Emma Rodriguez",
      date: "April 10, 2025",
      readTime: "8 min read",
      featured: false
    },
    {
      id: 4,
      title: "How to Choose the Right University: Beyond Rankings and Reputation",
      excerpt: "Learn what factors to consider beyond university rankings when selecting the perfect institution.",
      image: "https://img.freepik.com/free-photo/medium-shot-graduate-student_23-2148950577.jpg?uid=R122682615&ga=GA1.1.675669965.1739375808&semt=ais_hybrid&w=740",
      category: "University Selection",
      author: "Prof. James Wilson",
      date: "April 5, 2025",
      readTime: "6 min read",
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-[#F5F7FA]" id="blog-resources">
      <div className="container mx-auto px-4">
        <SectionHeader />
        <FeaturedArticle blogPost={blogPosts.find(post => post.featured)} />
        <ArticleGrid blogPosts={blogPosts.filter(post => !post.featured)} />
      </div>
    </section>
  );
};

const SectionHeader = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const headerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={headerVariants}
      className="mb-12"
    >
      

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-4xl font-bold text-[#0A192F] text-center font-montserrat"
      >
        Helpful Resources
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-lg text-gray-600 mt-2 text-center font-inter"
      >
        Expert guides to help you navigate your study abroad journey
      </motion.p>
    </motion.div>
  );
};

const FeaturedArticle = ({ blogPost }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const featuredVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  if (!blogPost) return null;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={featuredVariants}
      className="bg-white rounded-xl overflow-hidden shadow-lg mb-12 group"
    >
      <div className="grid md:grid-cols-2 gap-0">
        <div className="relative overflow-hidden h-full min-h-[300px]">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="h-full"
          >
            <img 
              src={blogPost.image} 
              alt={blogPost.title} 
              className="w-full h-full object-cover" 
            />
          </motion.div>
          <div className="absolute top-4 left-4">
            <span className="bg-blue-600 text-white text-xs font-bold py-1 px-3 rounded-full uppercase">
              Featured
            </span>
          </div>
        </div>
        <div className="p-8 flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center mb-4">
              <span className="bg-blue-50 text-blue-600 text-xs font-semibold py-1 px-2 rounded">
                {blogPost.category}
              </span>
              <span className="text-gray-400 text-sm ml-3 flex items-center">
                <Clock size={14} className="mr-1" />
                {blogPost.readTime}
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-[#0A192F] mb-3 font-inter leading-tight group-hover:text-blue-700 transition-colors duration-300">
              {blogPost.title}
            </h3>
            
            <p className="text-gray-600 mb-6 font-inter">
              {blogPost.excerpt}
            </p>
          </div>
          
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                <User size={18} className="text-gray-500" />
              </div>
              <div>
                <div className="text-sm font-medium text-[#0A192F]">{blogPost.author}</div>
                <div className="text-xs text-gray-500 flex items-center">
                  <Calendar size={12} className="mr-1" />
                  {blogPost.date}
                </div>
              </div>
            </div>
            
            <motion.button 
              className="text-blue-600 font-medium flex items-center hover:text-blue-800 transition-colors duration-300"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              Read Full Article
              <ChevronRight size={16} className="ml-1" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ArticleGrid = ({ blogPosts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {blogPosts.map((post, index) => (
        <ArticleCard key={post.id} post={post} index={index} />
      ))}
    </div>
  );
};

const ArticleCard = ({ post, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group h-full flex flex-col"
    >
      <div className="relative overflow-hidden h-48">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="h-full"
        >
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover" 
          />
        </motion.div>
        <div className="absolute top-3 left-3">
          <span className="bg-blue-50 text-blue-600 text-xs font-semibold py-1 px-2 rounded">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-xs text-gray-500 mb-3">
          <span className="flex items-center mr-3">
            <Calendar size={12} className="mr-1" />
            {post.date}
          </span>
          <span className="flex items-center">
            <Clock size={12} className="mr-1" />
            {post.readTime}
          </span>
        </div>
        
        <h3 className="text-lg font-bold text-[#0A192F] mb-3 font-inter group-hover:text-blue-700 transition-colors duration-300">
          {post.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 flex-grow">
          {post.excerpt}
        </p>
        
        <motion.button 
          className="text-blue-600 text-sm font-medium flex items-center hover:text-blue-800 transition-colors duration-300 mt-auto"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          Read Article
          <ChevronRight size={14} className="ml-1" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default BlogResourcesSection;