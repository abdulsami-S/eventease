// import React, { useState, useEffect } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { Menu, X, Calendar, LogOut, User, LayoutDashboard } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { isAuthenticated, getUserRole, getUserEmail, logout, validateSession } from '@/utils/auth';
// import LoginModal from '@/components/LoginModal';
// import SignupModal from '@/components/SignupModal';
// import { toast } from 'sonner';

// export const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showLoginModal, setShowLoginModal] = useState(false);
//   const [showSignupModal, setShowSignupModal] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userRole, setUserRole] = useState('');
//   const [userEmail, setUserEmail] = useState('');
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const sessionCheck = validateSession();
//     if (!sessionCheck.valid) {
//       toast.error(sessionCheck.message);
//     }
//     setIsLoggedIn(isAuthenticated());
//     setUserRole(getUserRole());
//     setUserEmail(getUserEmail());
//   }, [location]);

//   const navLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'Events', path: '/events' },
//     { name: 'About', path: '/about' },
//   ];

//   const isActive = (path) => location.pathname === path;

//   const handleLogout = () => {
//     logout();
//     setIsLoggedIn(false);
//     setUserRole('');
//     setUserEmail('');
//     toast.success('Logged out successfully');
//     navigate('/');
//   };

//   return (
//     <>
//       <nav className="fixed top-0 left-0 right-0 z-50 glass-card" data-testid="navbar">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-20">
//             {/* Logo */}
//             <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity" data-testid="logo-link">
//               <Calendar size={32} className="text-yellow-400" />
//               <span className="text-2xl font-bold">EventEase</span>
//             </Link>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center gap-8">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   className={`text-lg font-medium transition-all duration-300 relative ${
//                     isActive(link.path) ? 'text-yellow-400' : 'text-white hover:text-yellow-400'
//                   }`}
//                 >
//                   {link.name}
//                   {isActive(link.path) && (
//                     <motion.div
//                       layoutId="activeNav"
//                       className="absolute -bottom-2 left-0 right-0 h-0.5 bg-yellow-400"
//                       transition={{ type: 'spring', stiffness: 300, damping: 30 }}
//                     />
//                   )}
//                 </Link>
//               ))}

//               {/* ✅ Organizer Dashboard link */}
//               {isLoggedIn && userRole === 'Organizer' && (
//                 <Link
//                   to="/dashboard"
//                   className={`text-lg font-medium flex items-center gap-2 transition-all ${
//                     isActive('/dashboard') ? 'text-yellow-400' : 'text-white hover:text-yellow-400'
//                   }`}
//                 >
//                   <LayoutDashboard size={18} />
//                   Dashboard
//                 </Link>
//               )}

//               {/* Auth Section */}
//               {isLoggedIn ? (
//                 <div className="flex items-center gap-4">
//                   <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full">
//                     <User size={18} className="text-yellow-400" />
//                     <span className="text-sm">
//                       <span className="text-gray-400">Welcome, </span>
//                       <span className="font-semibold text-yellow-400">{userRole}</span>
//                     </span>
//                   </div>
//                   <button
//                     onClick={handleLogout}
//                     className="flex items-center gap-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-full transition-colors"
//                   >
//                     <LogOut size={18} />
//                     <span>Logout</span>
//                   </button>
//                 </div>
//               ) : (
//                 <div className="flex items-center gap-4">
//                   <button onClick={() => setShowLoginModal(true)} className="btn-secondary">
//                     Login
//                   </button>
//                   <button onClick={() => setShowSignupModal(true)} className="btn-primary">
//                     <span>Sign Up</span>
//                   </button>
//                 </div>
//               )}
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               className="md:hidden text-white p-2"
//               onClick={() => setIsOpen(!isOpen)}
//             >
//               {isOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         <AnimatePresence>
//           {isOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: 'auto' }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3 }}
//               className="md:hidden overflow-hidden"
//             >
//               <div className="px-4 pt-2 pb-6 space-y-4">
//                 {navLinks.map((link) => (
//                   <Link
//                     key={link.path}
//                     to={link.path}
//                     onClick={() => setIsOpen(false)}
//                     className={`block text-lg font-medium transition-colors ${
//                       isActive(link.path) ? 'text-yellow-400' : 'text-white hover:text-yellow-400'
//                     }`}
//                   >
//                     {link.name}
//                   </Link>
//                 ))}

//                 {/* ✅ Mobile Dashboard link for Organizers */}
//                 {isLoggedIn && userRole === 'Organizer' && (
//                   <Link
//                     to="/dashboard"
//                     onClick={() => setIsOpen(false)}
//                     className="block text-lg font-medium text-yellow-400 flex items-center gap-2"
//                   >
//                     <LayoutDashboard size={18} />
//                     Dashboard
//                   </Link>
//                 )}

//                 {/* Mobile Auth Section */}
//                 {isLoggedIn ? (
//                   <div className="pt-4 border-t border-white/10">
//                     <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg mb-3">
//                       <User size={18} className="text-yellow-400" />
//                       <span className="text-sm">
//                         <span className="text-gray-400">Welcome, </span>
//                         <span className="font-semibold text-yellow-400">{userRole}</span>
//                       </span>
//                     </div>
//                     <button
//                       onClick={() => {
//                         handleLogout();
//                         setIsOpen(false);
//                       }}
//                       className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-colors"
//                     >
//                       <LogOut size={18} />
//                       <span>Logout</span>
//                     </button>
//                   </div>
//                 ) : (
//                   <div className="pt-4 border-t border-white/10 space-y-3">
//                     <button
//                       onClick={() => {
//                         setShowLoginModal(true);
//                         setIsOpen(false);
//                       }}
//                       className="w-full btn-secondary"
//                     >
//                       Login
//                     </button>
//                     <button
//                       onClick={() => {
//                         setShowSignupModal(true);
//                         setIsOpen(false);
//                       }}
//                       className="w-full btn-primary"
//                     >
//                       <span>Sign Up</span>
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </nav>

//       {/* Login Modal */}
//       <LoginModal 
//         isOpen={showLoginModal} 
//         onClose={() => setShowLoginModal(false)}
//         onSwitchToSignup={() => setShowSignupModal(true)}
//       />

//       {/* Signup Modal */}
//       <SignupModal 
//         isOpen={showSignupModal} 
//         onClose={() => setShowSignupModal(false)}
//         onSwitchToLogin={() => setShowLoginModal(true)}
//       />
//     </>
//   );
// };

// export default Navbar;





import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Calendar, LogOut, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { isAuthenticated, getUserRole, getUserEmail, logout, validateSession } from "@/utils/auth";
import LoginModal from "@/components/LoginModal";
import SignupModal from "@/components/SignupModal";
import { toast } from "sonner";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const sessionCheck = validateSession();
    if (!sessionCheck.valid) toast.error(sessionCheck.message);

    setIsLoggedIn(isAuthenticated());
    setUserRole(getUserRole());
    setUserEmail(getUserEmail());
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "About", path: "/about" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    logout();
    setIsLoggedIn(false);
    toast.success("Logged out successfully");
    navigate("/");
  };

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center glass-card shadow-lg"
        style={{
          backdropFilter: "blur(18px)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        {/* Logo */}
        <Link
  to="/"
  className="flex items-center gap-3 text-white hover:opacity-90 transition"
>
  <motion.div
    initial={{ rotate: 0 }}
    animate={{ rotate: [0, 12,0,-12,0] }} // gentle sway motion
    transition={{
      repeat: Infinity,
      duration: 2.5, // slower, smoother motion
      ease: "easeInOut",
      repeatType: "mirror",
    }}
  >
    <Calendar className="text-yellow-400" size={28} />
  </motion.div>

  <motion.span
    className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.4 }}
  >
    EventEase
  </motion.span>
</Link>

        {/* <Link
          to="/"
          className="flex items-center gap-3 text-white hover:opacity-90 transition"
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          >
            <Calendar className="text-yellow-400" size={28} />
          </motion.div>
          <motion.span
            className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            EventEase
          </motion.span>
        </Link> */}

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.div
              key={link.path}
              whileHover={{ scale: 1.1 }}
              className="relative"
            >
              <Link
                to={link.path}
                className={`text-lg font-medium ${
                  isActive(link.path)
                    ? "text-yellow-400"
                    : "text-white hover:text-yellow-400"
                }`}
              >
                {link.name}
              </Link>
              {isActive(link.path) && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-purple-400"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </motion.div>
          ))}

          {isLoggedIn ? (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <User size={16} className="text-yellow-400" />
                <span className="text-sm text-gray-300">
                  {userRole} | {userEmail?.split("@")[0]}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="btn-secondary flex items-center gap-2"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <button onClick={() => setShowLoginModal(true)} className="btn-secondary">
                Login
              </button>
              <button onClick={() => setShowSignupModal(true)} className="btn-primary">
                <span>Sign Up</span>
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-20 inset-x-0 bg-black/80 backdrop-blur-md z-40 md:hidden p-6 space-y-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block text-lg ${
                  isActive(link.path)
                    ? "text-yellow-400 font-semibold"
                    : "text-gray-300 hover:text-yellow-400"
                }`}
              >
                {link.name}
              </Link>
            ))}
            {isLoggedIn ? (
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="w-full btn-secondary mt-4"
              >
                Logout
              </button>
            ) : (
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="btn-secondary w-full"
                >
                  Login
                </button>
                <button
                  onClick={() => setShowSignupModal(true)}
                  className="btn-primary w-full"
                >
                  Sign Up
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modals */}
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onSwitchToSignup={() => setShowSignupModal(true)}
      />
      <SignupModal
        isOpen={showSignupModal}
        onClose={() => setShowSignupModal(false)}
        onSwitchToLogin={() => setShowLoginModal(true)}
      />
    </>
  );
};

export default Navbar;
