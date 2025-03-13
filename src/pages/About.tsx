import React from 'react';
import { Layout } from '../components/Layout';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Briefcase, GraduationCap, Lightbulb, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const teamMembers = [
    {
      name: 'Aashika Jain',
      role: 'Founder',
      
      image: 'https://iconduck.com/icons/58658/person-icon',
    },
    {
      name: 'Divyanshi Agarwal',
      role: 'Founder',
      image: 'https://iconduck.com/icons/58658/person-icon',
    },
    {
      name: 'ABC XYZ',
      role: 'Head of Mentorship',
      bio: 'Former executive coach who oversees the mentorship program quality and helps design effective mentor-mentee relationships.',
      image: 'https://iconduck.com/icons/58658/person-icon',
    },
  ];

  const values = [
    {
      title: 'Accessibility',
      description: 'We believe quality mentorship should be accessible to everyone, regardless of background or resources.',
      icon: Users,
      color: 'bg-blue-50 text-blue-600',
    },
    {
      title: 'Growth Mindset',
      description: 'We foster continuous learning and development through curiosity, resilience, and a willingness to evolve.',
      icon: GraduationCap,
      color: 'bg-green-50 text-green-600',
    },
    {
      title: 'Authentic Connection',
      description: 'We create space for genuine relationships built on trust, empathy, and mutual respect.',
      icon: Heart,
      color: 'bg-red-50 text-red-600',
    },
    {
      title: 'Purposeful Impact',
      description: 'We are dedicated to creating meaningful change in people\'s lives and professional journeys.',
      icon: Lightbulb,
      color: 'bg-amber-50 text-amber-600',
    },
  ];

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
                About Us
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Our Mission & Vision
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-muted-foreground text-lg mb-8"
              >
                Echo Mentor was founded with a simple yet powerful vision: to democratize access to quality mentorship and create a world where everyone has the guidance they need to reach their full potential.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative aspect-square max-w-md mx-auto overflow-hidden rounded-2xl shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&h=800&q=80" 
                    alt="Team collaboration" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-5 -right-5 bg-echo-50 rounded-lg p-6 shadow-sm">
                  <blockquote className="text-echo-800 font-medium italic">
                    "Mentorship is a brain to pick, an ear to listen, and a push in the right direction."
                  </blockquote>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-muted-foreground mb-6">
                  Echo Mentor exists to bridge the gap between experienced professionals and those seeking guidance, creating a platform where knowledge can be shared, goals can be achieved, and careers can flourish.
                </p>
                <p className="text-muted-foreground mb-8">
                  We believe that effective mentorship can transform careers and lives. By leveraging technology, we make it possible for anyone to connect with the right mentor or mentee, regardless of geographical barriers or industry constraints.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-echo-50 p-2 rounded-md mr-4 mt-1">
                      <Briefcase className="h-5 w-5 text-echo-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Career Acceleration</h3>
                      <p className="text-muted-foreground">We help professionals at all stages accelerate their career growth through targeted mentorship.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-echo-50 p-2 rounded-md mr-4 mt-1">
                      <GraduationCap className="h-5 w-5 text-echo-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Skill Development</h3>
                      <p className="text-muted-foreground">We facilitate the transfer of knowledge and skills from experienced professionals to emerging talent.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-echo-50">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold mb-6"
              >
                Our Core Values
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-muted-foreground text-lg"
              >
                The principles that guide everything we do at Echo Mentor.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-sm"
                >
                  <div className={`${value.color} p-3 rounded-lg inline-block mb-4`}>
                    <value.icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold mb-6"
              >
                Meet the Team
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-muted-foreground text-lg"
              >
                The passionate individuals behind Echo Mentor who are dedicated to transforming mentorship experiences.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100"
                >
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 ease-out-expo hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-echo-600 mb-4">{member.role}</p>
                    <p className="text-muted-foreground">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
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
                Join Our Growing Community
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-white/80 text-lg mb-8"
              >
                Be part of the Echo Mentor community and experience the power of meaningful mentorship connections.
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
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
