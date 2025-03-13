
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-echo-100 opacity-50" />
        <div className="absolute top-[60%] -left-[10%] w-[50%] h-[50%] rounded-full bg-echo-50 blur-3xl" />
      </div>

      <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          className="max-w-2xl"
        >
          <span className="inline-block px-3 py-1 bg-echo-50 text-echo-700 rounded-full text-sm font-medium mb-6">
            Mentorship Platform
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 text-balance">
            Where <span className="text-gradient">Guidance Today</span><br />
            Meets <span className="text-gradient">Tomorrow</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl">
            Echo Mentor connects aspiring professionals with experienced mentors, fostering growth through personalized guidance, goal tracking, and a community of support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/join"
              className="relative group flex items-center justify-center bg-echo-500 hover:bg-echo-600 text-white px-6 py-3 rounded-md transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
            >
              <span>Find a Mentor</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/join"
              className="flex items-center justify-center bg-white border border-echo-200 hover:border-echo-300 text-echo-700 px-6 py-3 rounded-md transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-md"
            >
              Become a Mentor
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full h-[500px] rounded-xl overflow-hidden glass-morphism flex justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&h=1000&q=80"
              alt="Mentorship session"
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            
            {/* Stats Cards */}
            <div className="absolute bottom-6 left-6 glass-morphism rounded-lg p-4 w-48">
              <p className="text-sm text-foreground/90 mb-1">Active Mentors</p>
              <p className="text-2xl font-bold text-echo-700">2,500+</p>
            </div>
            
            <div className="absolute top-6 right-6 glass-morphism rounded-lg p-4 w-48">
              <p className="text-sm text-foreground/90 mb-1">Success Rate</p>
              <p className="text-2xl font-bold text-echo-700">94%</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
