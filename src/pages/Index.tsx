
import React from 'react';
import { Layout } from '../components/Layout';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const testimonials = [
    {
      quote: "Echo Mentor changed my career trajectory completely. My mentor provided exactly the guidance I needed to advance in my field.",
      author: "Alex Johnson",
      role: "Software Engineer",
    },
    {
      quote: "The personalized matching algorithm paired me with someone who understood my goals perfectly. The mentorship experience was exceptional.",
      author: "Sarah Chen",
      role: "Marketing Specialist",
    },
    {
      quote: "As a mentor, I've found the platform intuitive and rewarding. It's fulfilling to help others grow in their careers.",
      author: "Michael Rodriguez",
      role: "Senior Product Manager",
    },
  ];

  return (
    <Layout>
      <Hero />
      <Features />
      
      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block px-3 py-1 bg-echo-50 text-echo-700 rounded-full text-sm font-medium mb-4"
            >
              Process
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold mb-4"
            >
              How Echo Mentor Works
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg"
            >
              A simple three-step process to connect with the perfect mentor and begin your growth journey.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            {/* Connection line (desktop only) */}
            <div className="hidden lg:block absolute top-1/3 left-0 right-0 h-0.5 bg-echo-100"></div>
            
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm relative z-10"
            >
              <div className="bg-echo-50 text-echo-700 w-12 h-12 flex items-center justify-center rounded-full mb-6 font-bold">1</div>
              <h3 className="text-xl font-semibold mb-3">Create Your Profile</h3>
              <p className="text-muted-foreground mb-4">
                Sign up and build your profile highlighting your goals, interests, and experience level.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-echo-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Detailed preference settings</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-echo-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Skill assessment tools</span>
                </li>
              </ul>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm relative z-10"
            >
              <div className="bg-echo-50 text-echo-700 w-12 h-12 flex items-center justify-center rounded-full mb-6 font-bold">2</div>
              <h3 className="text-xl font-semibold mb-3">Get Matched</h3>
              <p className="text-muted-foreground mb-4">
                Our algorithm matches you with compatible mentors based on your profile and goals.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-echo-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>AI-powered matching</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-echo-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Preview potential mentors</span>
                </li>
              </ul>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm relative z-10"
            >
              <div className="bg-echo-50 text-echo-700 w-12 h-12 flex items-center justify-center rounded-full mb-6 font-bold">3</div>
              <h3 className="text-xl font-semibold mb-3">Begin Your Journey</h3>
              <p className="text-muted-foreground mb-4">
                Connect with your mentor, set goals, and start your personalized mentorship experience.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-echo-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Regular check-ins</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-echo-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Progress tracking tools</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-echo-50">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block px-3 py-1 bg-white text-echo-700 rounded-full text-sm font-medium mb-4"
            >
              Testimonials
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold mb-4"
            >
              What Our Community Says
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg"
            >
              Hear from mentors and mentees who have experienced the power of Echo Mentor.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="mb-6 text-echo-500">
                  <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.95 36C9.975 36 6.675 34.575 4.05 31.725C1.35 29.025 0 25.275 0 20.475C0 16.8 0.9 13.5 2.7 10.575C4.5 7.65 6.75 5.175 9.45 3.15C12.15 1.05 14.85 0 17.55 0L19.8 6.075C17.175 6.225 14.7 7.2 12.375 9C10.05 10.8 8.7 12.6 8.325 14.4C8.925 13.95 9.9 13.725 11.25 13.725C13.8 13.725 15.975 14.625 17.775 16.425C19.575 18.3 20.475 20.55 20.475 23.175C20.475 26.025 19.5 28.425 17.55 30.375C15.6 34.125 13.05 36 13.95 36ZM38.475 36C34.5 36 31.2 34.575 28.575 31.725C25.875 29.025 24.525 25.275 24.525 20.475C24.525 16.8 25.425 13.5 27.225 10.575C29.025 7.65 31.275 5.175 33.975 3.15C36.675 1.05 39.375 0 42.075 0L44.325 6.075C41.7 6.225 39.225 7.2 36.9 9C34.575 10.8 33.225 12.6 32.85 14.4C33.45 13.95 34.425 13.725 35.775 13.725C38.325 13.725 40.5 14.625 42.3 16.425C44.1 18.3 45 20.55 45 23.175C45 26.025 44.025 28.425 42.075 30.375C40.125 34.125 37.575 36 38.475 36Z" fill="currentColor" fillOpacity="0.2"/>
                  </svg>
                </div>
                <p className="text-foreground mb-6 italic">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-blue-600 mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-2">10,000+</h3>
              <p className="text-muted-foreground">Active Users</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 text-green-600 mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-2">94%</h3>
              <p className="text-muted-foreground">Success Rate</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-50 text-purple-600 mb-4">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-2">250K+</h3>
              <p className="text-muted-foreground">Goals Achieved</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-echo-900 text-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold mb-6"
            >
              Ready to Start Your Mentorship Journey?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white/80 text-lg mb-8"
            >
              Join thousands of professionals who are growing their careers and achieving their goals with Echo Mentor.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                to="/join"
                className="inline-flex items-center justify-center bg-white text-echo-800 hover:bg-echo-50 px-6 py-3 rounded-md font-medium transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
              >
                Get Started Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
