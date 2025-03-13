import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { motion } from 'framer-motion';
import { Check, ArrowRight, UserPlus, Users } from 'lucide-react';
import { toast } from 'sonner';

const Join = () => {
  const [userType, setUserType] = useState<'mentor' | 'mentee' | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    profession: '',
    experience: '',
    interests: '',
    goals: '',
    expectations: '',
    agreement: false,
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    if (!formData.agreement) {
      toast.error('Please agree to the terms and conditions');
      return;
    }
    
    // Form submission would go here in a real application
    toast.success(`Thank you for joining Echo Mentor as a ${userType}! We'll be in touch soon.`);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      profession: '',
      experience: '',
      interests: '',
      goals: '',
      expectations: '',
      agreement: false,
    });
    
    setUserType(null);
  };
  
  const benefits = {
    mentor: [
      'Share your expertise and knowledge',
      'Develop leadership and coaching skills',
      'Expand your professional network',
      'Gain fresh perspectives from mentees',
      'Make a meaningful impact on others\' careers',
    ],
    mentee: [
      'Receive personalized guidance from experts',
      'Accelerate your professional growth',
      'Gain industry insights and knowledge',
      'Expand your professional network',
      'Develop new skills with expert support',
    ],
  };

  return (
    <Layout>
      <div className="pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-echo-50 to-white">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-block px-3 py-1 bg-echo-100 text-echo-700 rounded-full text-sm font-medium mb-4"
              >
                Join Us
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Begin Your Mentorship Journey
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-muted-foreground text-lg mb-8"
              >
                Whether you're looking to share your expertise or seeking guidance to grow, Echo Mentor is the platform for you.
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* User Type Selection */}
        {!userType && (
          <section className="py-16 bg-white">
            <div className="section-container max-w-5xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-6">Choose Your Path</h2>
                <p className="text-muted-foreground text-lg">
                  Tell us how you'd like to participate in the Echo Mentor community.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white border border-gray-200 hover:border-echo-300 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                  onClick={() => setUserType('mentor')}
                >
                  <div className="bg-blue-50 text-blue-600 p-3 rounded-lg inline-block mb-6">
                    <UserPlus size={30} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Become a Mentor</h3>
                  <p className="text-muted-foreground mb-6">
                    Share your knowledge and experience to help others grow in their professional journey.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {benefits.mentor.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setUserType('mentor')}
                    className="flex items-center justify-center w-full bg-blue-50 hover:bg-blue-100 text-blue-700 px-6 py-3 rounded-md font-medium transition-all duration-300"
                  >
                    Join as a Mentor
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-white border border-gray-200 hover:border-echo-300 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                  onClick={() => setUserType('mentee')}
                >
                  <div className="bg-green-50 text-green-600 p-3 rounded-lg inline-block mb-6">
                    <Users size={30} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Become a Mentee</h3>
                  <p className="text-muted-foreground mb-6">
                    Connect with experienced professionals who can guide you toward your goals.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {benefits.mentee.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setUserType('mentee')}
                    className="flex items-center justify-center w-full bg-green-50 hover:bg-green-100 text-green-700 px-6 py-3 rounded-md font-medium transition-all duration-300"
                  >
                    Join as a Mentee
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </motion.div>
              </div>
            </div>
          </section>
        )}
        
        {/* Registration Form */}
        {userType && (
          <section className="py-16 bg-white">
            <div className="section-container max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm"
              >
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-4">
                    {userType === 'mentor' ? 'Mentor Registration' : 'Mentee Registration'}
                  </h2>
                  <p className="text-muted-foreground">
                    {userType === 'mentor' 
                      ? 'Share your expertise and help shape the next generation of professionals.'
                      : 'Connect with experienced mentors who can guide you on your professional journey.'}
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-echo-500 transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-echo-500 transition-all"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="profession" className="block text-sm font-medium text-foreground mb-1">
                      Profession / Industry <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="profession"
                      name="profession"
                      value={formData.profession}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-echo-500 transition-all"
                      required
                    />
                  </div>
                  
                  {userType === 'mentor' && (
                    <div>
                      <label htmlFor="experience" className="block text-sm font-medium text-foreground mb-1">
                        Years of Experience <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-echo-500 transition-all"
                        required
                      >
                        <option value="">Select years of experience</option>
                        <option value="1-3">1-3 years</option>
                        <option value="4-6">4-6 years</option>
                        <option value="7-10">7-10 years</option>
                        <option value="10+">10+ years</option>
                      </select>
                    </div>
                  )}
                  
                  <div>
                    <label htmlFor="interests" className="block text-sm font-medium text-foreground mb-1">
                      Areas of Interest / Expertise
                    </label>
                    <textarea
                      id="interests"
                      name="interests"
                      value={formData.interests}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-echo-500 transition-all"
                      placeholder={userType === 'mentor' ? 'What areas are you skilled in and can provide guidance on?' : 'What topics would you like to learn more about?'}
                    />
                  </div>
                  
                  {userType === 'mentee' && (
                    <div>
                      <label htmlFor="goals" className="block text-sm font-medium text-foreground mb-1">
                        Your Professional Goals
                      </label>
                      <textarea
                        id="goals"
                        name="goals"
                        value={formData.goals}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-echo-500 transition-all"
                        placeholder="What are you hoping to achieve through mentorship?"
                      />
                    </div>
                  )}
                  
                  <div>
                    <label htmlFor="expectations" className="block text-sm font-medium text-foreground mb-1">
                      Mentorship Expectations
                    </label>
                    <textarea
                      id="expectations"
                      name="expectations"
                      value={formData.expectations}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-echo-500 transition-all"
                      placeholder={userType === 'mentor' ? 'What do you hope to achieve by mentoring others?' : 'What are you looking for in a mentor?'}
                    />
                  </div>
                  
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="agreement"
                      name="agreement"
                      checked={formData.agreement}
                      onChange={handleCheckboxChange}
                      className="mt-1 mr-2"
                      required
                    />
                    <label htmlFor="agreement" className="text-sm text-muted-foreground">
                      I agree to the <a href="#" className="text-echo-600 hover:text-echo-700 underline">Terms of Service</a> and <a href="#" className="text-echo-600 hover:text-echo-700 underline">Privacy Policy</a> of Echo Mentor.
                    </label>
                  </div>
                  
                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={() => setUserType(null)}
                      className="px-6 py-2 border border-gray-300 rounded-md text-foreground hover:bg-gray-50 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-echo-500 hover:bg-echo-600 text-white rounded-md transition-colors"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
};

export default Join;
