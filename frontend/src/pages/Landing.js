// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import { Calendar, Users, Trophy, Sparkles } from 'lucide-react';

// const Landing = () => {
//   const navigate = useNavigate();
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const features = [
//     {
//       icon: <Calendar size={40} />,
//       title: 'Diverse Events',
//       description: 'From tech talks to cultural fests, find events that match your interests'
//     },
//     {
//       icon: <Users size={40} />,
//       title: 'Connect & Network',
//       description: 'Meet like-minded students and build lasting connections'
//     },
//     {
//       icon: <Trophy size={40} />,
//       title: 'Competitions',
//       description: 'Showcase your skills and compete for exciting prizes'
//     },
//     {
//       icon: <Sparkles size={40} />,
//       title: 'Memorable Experiences',
//       description: 'Create unforgettable campus memories that last a lifetime'
//     }
//   ];

//   return (
//     <div className="min-h-screen gradient-bg">
//       <Navbar />
      
//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
//         {/* Floating particles */}
//         <div className="particle" style={{top: '10%', left: '10%', width: '80px', height: '80px', background: 'rgba(255, 215, 0, 0.2)', animationDelay: '0s'}}></div>
//         <div className="particle" style={{top: '60%', right: '15%', width: '60px', height: '60px', background: 'rgba(138, 43, 226, 0.2)', animationDelay: '2s'}}></div>
//         <div className="particle" style={{bottom: '20%', left: '20%', width: '100px', height: '100px', background: 'rgba(102, 126, 234, 0.2)', animationDelay: '4s'}}></div>
        
//         <div className="relative z-10 text-center max-w-5xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
//               Experience Every Event,
//               <span className="block mt-2" style={{background: 'linear-gradient(135deg, #667eea 0%, #FFD700 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
//                 Effortlessly
//               </span>
//             </h1>
//           </motion.div>
          
//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
//           >
//             Discover, explore, and participate in the most exciting campus events. Your gateway to unforgettable college experiences.
//           </motion.p>
          
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="flex flex-wrap gap-4 justify-center"
//           >
//             <button 
//               className="btn-primary" 
//               onClick={() => navigate('/events')}
//               data-testid="explore-events-btn"
//             >
//               <span>Explore Events</span>
//             </button>
//             <button 
//               className="btn-secondary" 
//               onClick={() => navigate('/about')}
//               data-testid="learn-more-btn"
//             >
//               Learn More
//             </button>
//           </motion.div>
//         </div>
        
//         {/* Scroll indicator */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 1 }}
//           className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
//         >
//           <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
//             <motion.div
//               animate={{ y: [0, 12, 0] }}
//               transition={{ duration: 1.5, repeat: Infinity }}
//               className="w-1 h-3 bg-white/60 rounded-full"
//             />
//           </div>
//         </motion.div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 px-4 relative" data-testid="features-section">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl sm:text-5xl font-bold mb-4">Why Choose EventEase?</h2>
//             <p className="text-lg text-gray-300 max-w-2xl mx-auto">Everything you need to make the most of your campus life</p>
//           </motion.div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="glass-card p-8 hover:scale-105 transition-transform duration-300"
//                 data-testid={`feature-card-${index}`}
//               >
//                 <div className="text-yellow-400 mb-4">
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
//                 <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 px-4 relative">
//         <div className="max-w-4xl mx-auto text-center">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="glass-card p-12"
//             data-testid="cta-section"
//           >
//             <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to Get Started?</h2>
//             <p className="text-lg text-gray-300 mb-8">Join thousands of students discovering amazing campus events every day</p>
//             <button 
//               className="btn-primary" 
//               onClick={() => navigate('/events')}
//               data-testid="get-started-btn"
//             >
//               <span>Get Started Now</span>
//             </button>
//           </motion.div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Landing;











import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Users, Trophy, Sparkles, Star,ArrowRight } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: (
        <Calendar
          size={40}
          style={{ color: "rgba(29, 178, 201, 1)" }} // 🌟 Refined golden yellow (Diverse Events)
        />
      ),
      title: "Diverse Events",
      description:
        "From tech talks to cultural fests, find events that match your interests.",
    },
    {
      icon: (
        <Users
          size={40}
          style={{ color: "rgb(192, 132, 252)" }} // 💜 Light purple (Connect & Network)
        />
      ),
      title: "Connect & Network",
      description:
        "Meet like-minded students and build lasting connections.",
    },
    {
      icon: (
        <Trophy
          size={40}
          style={{ color: "rgba(239, 215, 79, 1)" }} // 🏆 Keep same golden color (Competitions)
        />
      ),
      title: "Competitions",
      description:
        "Showcase your skills and compete for exciting prizes.",
    },
    {
      icon: (
        <Sparkles
          size={40}
          style={{ color: "rgb(244, 114, 182)" }} // 💖 Soft pink (Modern Experience)
        />
      ),
      title: "Memorable Experiences",
      description:
        "Create unforgettable campus memories that last a lifetime.",
    },
  ];

  return (
    <div className="min-h-screen gradient-bg text-white">
      <Navbar />

      {/* 🟣 Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* ✨ Floating particles */}
        <div
          className="particle"
          style={{
            top: "10%",
            left: "10%",
            width: "80px",
            height: "80px",
            background: "rgba(255, 215, 0, 0.15)",
            animationDelay: "0s",
          }}
        ></div>
        <div
          className="particle"
          style={{
            top: "60%",
            right: "15%",
            width: "60px",
            height: "60px",
            background: "rgba(138, 43, 226, 0.15)",
            animationDelay: "2s",
          }}
        ></div>
        <div
          className="particle"
          style={{
            bottom: "20%",
            left: "20%",
            width: "100px",
            height: "100px",
            background: "rgba(102, 126, 234, 0.15)",
            animationDelay: "4s",
          }}
        ></div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
          >
            {/* <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Experience Every Event,
              <span
                className="block mt-2"
                style={{
                  background:
                    "linear-gradient(135deg, #667eea 0%, #FFD700 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Effortlessly
              </span>
            </h1> */}

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-[1.2]">
               Experience Every Event,
            <span
               className="block mt-2 pb-2"
               style={{
               background: 'linear-gradient(135deg, #667eea 0%, #FFD700 100%)',
               WebkitBackgroundClip: 'text',
               WebkitTextFillColor: 'transparent',
               }}
  >
               Effortlessly
            </span>
            </h1>

          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
          >
            Discover, explore, and participate in the most exciting campus
            events. Your gateway to unforgettable college experiences.
          </motion.p>




      <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center gap-6"
          >
            <button
              onClick={() => navigate("/events")}
              className="btn-primary flex items-center gap-2"
            >
              Explore Events <ArrowRight size={18} />
            </button>
            <button
              onClick={() => navigate("/about")}
              className="btn-secondary flex items-center gap-2"
            >
              Learn More <Sparkles size={18} />
            </button>
          </motion.div>
      





          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <button
              className="btn-primary flex items-center gap-2"
              onClick={() => navigate("/events")}
            >
              <span>Explore Events  </span>
            </button>
            <button
              className="btn-secondary flex items-center gap-2"
              onClick={() => navigate("/about")}
            >
              Learn More 
            </button>
          </motion.div>
          */}

        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white/60 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* 💛 Features Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-16"
        >
          <span className="text-yellow-400">Why Choose </span>
          <span className="bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent">
            EventEase?
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-10 rounded-2xl hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
