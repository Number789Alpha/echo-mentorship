
import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Target, MessageSquare, BookOpen } from 'lucide-react';

const features = [
  {
    title: 'Personalized Matching',
    description: 'Our intelligent algorithm pairs mentees with the perfect mentor based on goals, experience, and industry.',
    icon: UserPlus,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Goal Tracking',
    description: 'Set milestones, track progress, and celebrate achievements on your journey to success.',
    icon: Target,
    color: 'bg-green-50 text-green-600',
  },
  {
    title: 'Discussion Forums',
    description: 'Engage in meaningful conversations and learn from a diverse community of professionals.',
    icon: MessageSquare,
    color: 'bg-purple-50 text-purple-600',
  },
  {
    title: 'Resource Library',
    description: 'Access a curated collection of learning materials, templates, and guides for your growth.',
    icon: BookOpen,
    color: 'bg-amber-50 text-amber-600',
  },
];

export const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.19, 1, 0.22, 1],
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-echo-50">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-3 py-1 bg-echo-50 text-echo-700 rounded-full text-sm font-medium mb-4"
          >
            Features
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            Everything you need for effective mentorship
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Our platform provides all the tools necessary to make the mentorship journey seamless and impactful.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <div className={`${feature.color} p-3 rounded-lg inline-block mb-4`}>
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
