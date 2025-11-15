// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { X, Mail, Lock, LogIn } from 'lucide-react';
// import { authenticateUser, login } from '@/utils/auth';
// import { toast } from 'sonner';

// export const LoginModal = ({ isOpen, onClose, onSwitchToSignup }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [isShaking, setIsShaking] = useState(false);

//   const triggerShake = () => {
//     setIsShaking(true);
//     setTimeout(() => setIsShaking(false), 500);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError('');

//     if (!email || !password) {
//       setError('Please fill in all fields');
//       triggerShake();
//       return;
//     }

//     // Authenticate user
//     const result = authenticateUser(email, password);
    
//     if (result.success) {
//       const { user } = result;
//       login(user.email, user.role);
      
//       toast.success(`Welcome back, ${user.role}!`);
      
//       // Reload to update auth state
//       setTimeout(() => {
//         window.location.href = '/';
//       }, 500);
//     } else {
//       setError(result.message);
//       triggerShake();
//     }
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <>
//           {/* Backdrop */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={onClose}
//             className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
//             data-testid="login-modal-backdrop"
//           />

//           {/* Modal */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9, y: 20 }}
//             animate={{ 
//               opacity: 1, 
//               scale: 1, 
//               y: 0,
//               x: isShaking ? [0, -10, 10, -10, 10, 0] : 0
//             }}
//             exit={{ opacity: 0, scale: 0.9, y: 20 }}
//             transition={{ duration: 0.3 }}
//             className="fixed inset-0 z-50 flex items-center justify-center p-4"
//             data-testid="login-modal"
//           >
//             <div className="glass-card p-8 w-full max-w-md relative">
//               {/* Close Button */}
//               <button
//                 onClick={onClose}
//                 className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
//                 data-testid="close-login-modal"
//               >
//                 <X size={24} />
//               </button>

//               {/* Header */}
//               <div className="text-center mb-8">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400/20 rounded-full mb-4">
//                   <LogIn className="text-yellow-400" size={32} />
//                 </div>
//                 <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
//                 <p className="text-gray-400">Login to access your account</p>
//               </div>

//               {/* Form */}
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 {/* Email Input */}
//                 <div>
//                   <label className="block text-sm font-medium mb-2">Email</label>
//                   <div className="relative">
//                     <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//                     <input
//                       type="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       placeholder="your.email@example.com"
//                       className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
//                       data-testid="login-email-input"
//                     />
//                   </div>
//                 </div>

//                 {/* Password Input */}
//                 <div>
//                   <label className="block text-sm font-medium mb-2">Password</label>
//                   <div className="relative">
//                     <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//                     <input
//                       type="password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       placeholder="Enter your password"
//                       className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
//                       data-testid="login-password-input"
//                     />
//                   </div>
//                 </div>

//                 {/* Error Message */}
//                 {error && (
//                   <motion.div
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg"
//                     data-testid="login-error-message"
//                   >
//                     <p className="text-red-400 text-sm">{error}</p>
//                   </motion.div>
//                 )}

//                 {/* Submit Button */}
//                 <button
//                   type="submit"
//                   className="w-full btn-primary"
//                   data-testid="login-submit-btn"
//                 >
//                   <span>Login</span>
//                 </button>
//               </form>

//               {/* Switch to Signup */}
//               <div className="mt-6 text-center">
//                 <p className="text-gray-400 text-sm">
//                   Don't have an account?{' '}
//                   <button
//                     onClick={() => {
//                       onClose();
//                       onSwitchToSignup();
//                     }}
//                     className="text-yellow-400 hover:text-yellow-300 font-semibold transition-colors"
//                     data-testid="switch-to-signup-btn"
//                   >
//                     Sign Up
//                   </button>
//                 </p>
//               </div>

//               {/* Demo Credentials */}
//               <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
//                 <p className="text-xs text-gray-400 mb-2 text-center font-semibold">Demo Organizer Account:</p>
//                 <div className="space-y-1 text-xs text-gray-400">
//                   <p className="text-center">Email: <span className="text-yellow-400 font-mono">eventsorganizer@iiitdwd.ac.in</span></p>
//                   <p className="text-center">Password: <span className="text-yellow-400 font-mono">EventEase</span></p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// };

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, LogIn } from 'lucide-react';
import { authenticateUser, login } from '@/utils/auth';
import { toast } from 'sonner';

export const LoginModal = ({ isOpen, onClose, onSwitchToSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isShaking, setIsShaking] = useState(false);
  const showDemo = process.env.REACT_APP_SHOW_DEMO === 'true';
  const [demoLoading, setDemoLoading] = useState(false);

  const triggerShake = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      triggerShake();
      return;
    }

    // Authenticate user (local util)
    const result = authenticateUser(email, password);

    if (result.success) {
      const { user } = result;
      login(user.email, user.role);

      toast.success(`Welcome back, ${user.role}!`);

      // Reload to update auth state
      setTimeout(() => {
        window.location.href = '/';
      }, 500);
    } else {
      setError(result.message);
      triggerShake();
    }
  };

  // Secure demo login: calls backend endpoint which returns session token or sets cookie
  const handleDemoLogin = async () => {
    setDemoLoading(true);
    setError('');
    try {
      const res = await fetch('/api/auth/demo', {
        method: 'POST',
        credentials: 'include', // allow cookie set by server
        headers: { 'Content-Type': 'application/json' }
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || 'Demo login failed');
      }

      // If server returns token JSON (optional)
      const data = await res.json().catch(() => null);
      if (data?.token) {
        // if token is returned, store accordingly (or rely on cookie)
        localStorage.setItem('token', data.token);
      }

      toast.success('Logged in as demo organizer');
      // Redirect to home or organizer page
      setTimeout(() => {
        window.location.href = '/events';
      }, 400);
    } catch (err) {
      console.error(err);
      toast.error(err.message || 'Demo login failed');
    } finally {
      setDemoLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999]"
            data-testid="login-modal-backdrop"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              x: isShaking ? [0, -10, 10, -10, 10, 0] : 0
            }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            data-testid="login-modal"
          >
            <div className="glass-card p-8 w-full max-w-md relative">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                data-testid="close-login-modal"
              >
                <X size={24} />
              </button>

              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400/20 rounded-full mb-4">
                  <LogIn className="text-yellow-400" size={32} />
                </div>
                <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
                <p className="text-gray-400">Login to access your account</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Input */}
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                      data-testid="login-email-input"
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div>
                  <label className="block text-sm font-medium mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                      data-testid="login-password-input"
                    />
                  </div>
                </div>

                {/* Error Message */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg"
                    data-testid="login-error-message"
                  >
                    <p className="text-red-400 text-sm">{error}</p>
                  </motion.div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full btn-primary"
                  data-testid="login-submit-btn"
                >
                  <span>Login</span>
                </button>
              </form>

              {/* Switch to Signup */}
              <div className="mt-6 text-center">
                <p className="text-gray-400 text-sm">
                  Don't have an account?{' '}
                  <button
                    onClick={() => {
                      onClose();
                      onSwitchToSignup();
                    }}
                    className="text-yellow-400 hover:text-yellow-300 font-semibold transition-colors"
                    data-testid="switch-to-signup-btn"
                  >
                    Sign Up
                  </button>
                </p>
              </div>

              {/* Demo Login Button (only if env allows) */}
              {showDemo && (
                <div className="mt-6 text-center">
                  <button
                    onClick={handleDemoLogin}
                    className="w-full btn-secondary"
                    disabled={demoLoading}
                    data-testid="demo-login-btn"
                  >
                    {demoLoading ? 'Logging in…' : 'Use demo organizer account'}
                  </button>
                  <p className="text-xs text-gray-400 mt-2">Demo login is enabled for development only.</p>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;
