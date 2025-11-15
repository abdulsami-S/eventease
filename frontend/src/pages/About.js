import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Target, Eye, Heart, Zap } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const values = [
    {
      icon: <Target size={40} />,
      title: 'Our Mission',
      description: 'To create a seamless platform that connects students with enriching campus events, fostering a vibrant community where every student can discover opportunities for growth, learning, and memorable experiences.'
    },
    {
      icon: <Eye size={40} />,
      title: 'Our Vision',
      description: 'To become the go-to platform for campus event management, making every event accessible and every experience unforgettable for students across universities worldwide.'
    },
    {
      icon: <Heart size={40} />,
      title: 'Our Values',
      description: 'We believe in inclusivity, innovation, and community. Every student deserves access to amazing campus experiences, and we are committed to making that happen through technology and passion.'
    },
    {
      icon: <Zap size={40} />,
      title: 'What We Do',
      description: 'EventEase simplifies event discovery and participation. From workshops to festivals, tech talks to competitions, we bring all campus events together in one beautiful, easy-to-use platform.'
    }
  ];

  return (
    <div className="min-h-screen gradient-bg">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6" data-testid="about-page-title">About EventEase</h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              We are passionate about transforming campus life by making every event accessible, exciting, and effortless to discover.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8"
                data-testid={`value-card-${index}`}
              >
                <div className="text-yellow-400 mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card p-12"
            data-testid="story-section"
          >
            <h2 className="text-4xl font-bold mb-6 text-center">Our Story</h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                EventEase was born from a simple observation: students were missing out on amazing campus events simply because they didn't know about them. Information was scattered across multiple platforms, posters were overlooked, and opportunities were lost.
              </p>
              <p>
                We created EventEase to solve this problem. Our platform brings together all campus events in one beautiful, intuitive interface. Whether you're looking for tech workshops to sharpen your skills, cultural festivals to celebrate diversity, or competitions to showcase your talents, EventEase has it all.
              </p>
              <p>
                Today, we're proud to serve thousands of students, helping them discover events that shape their college experience and create memories that last a lifetime. We're not just a platform; we're a community dedicated to making every campus event count.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { number: '500+', label: 'Events Listed' },
              { number: '10,000+', label: 'Student Users' },
              { number: '50+', label: 'Partner Clubs' }
            ].map((stat, index) => (
              <div
                key={index}
                className="glass-card p-8 text-center"
                data-testid={`stat-card-${index}`}
              >
                <h3 className="text-5xl font-bold mb-2" style={{background: 'linear-gradient(135deg, #667eea 0%, #FFD700 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                  {stat.number}
                </h3>
                <p className="text-gray-300 text-lg">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
