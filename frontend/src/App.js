// import React, { useEffect } from 'react';
// import '@/App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Landing from '@/pages/Landing';
// import Events from '@/pages/Events';
// import EventDetails from '@/pages/EventDetails';
// import About from '@/pages/About';
// import { validateSession } from '@/utils/auth';
// import { toast, Toaster } from 'sonner';

// function App() {
//   useEffect(() => {
//     // Security check on app mount
//     const sessionCheck = validateSession();
//     if (!sessionCheck.valid) {
//       toast.error(sessionCheck.message);
//     }
//   }, []);

//   return (
//     <div className="App">
//       <Toaster position="top-right" richColors />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Landing />} />
//           <Route path="/events" element={<Events />} />
//           <Route path="/event/:id" element={<EventDetails />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;




// import React, { useEffect, useState } from "react";
// import "@/App.css";
// import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// import Landing from "@/pages/Landing";
// import Events from "@/pages/Events";
// import EventDetails from "@/pages/EventDetails";
// import About from "@/pages/About";
// import { validateSession } from "@/utils/auth";
// import { toast, Toaster } from "sonner";
// import Dashboard from "@/pages/Dashboard";

// <Route path="/dashboard" element={<Dashboard />} />


// /**
//  * Small wrapper to allow useNavigate in top-level component
//  * (BrowserRouter must wrap components using useNavigate).
//  */
// function AppRouter() {
//   const navigate = useNavigate();
//   const [checking, setChecking] = useState(true);

//   useEffect(() => {
//     let mounted = true;

//     // Support both sync and async validateSession()
//     (async () => {
//       try {
//         const sessionCheck = await validateSession();
//         if (!sessionCheck || !sessionCheck.valid) {
//           // show error & redirect to landing page
//           const message = sessionCheck?.message || "Session invalid. Please sign in.";
//           toast.error(message);
//           if (mounted) navigate("/");
//         }
//       } catch (err) {
//         // network or unexpected error
//         toast.error("Session validation failed.");
//         // optional: console.error(err);
//       } finally {
//         if (mounted) setChecking(false);
//       }
//     })();

//     return () => {
//       mounted = false;
//     };
//   }, [navigate]);

//   if (checking) {
//     // Simple loading UI — replace with your spinner/component if you have one
//     return (
//       <div className="app-loading" style={{ display: "flex", height: "100vh", alignItems: "center", justifyContent: "center" }}>
//         <div>Loading…</div>
//       </div>
//     );
//   }

//   return (
//     <Routes>
//       <Route path="/" element={<Landing />} />
//       <Route path="/events" element={<Events />} />
//       <Route path="/event/:id" element={<EventDetails />} />
//       <Route path="/about" element={<About />} />
//     </Routes>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <Toaster position="top-right" richColors />
//       <BrowserRouter>
//         <AppRouter />
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;




import React, { useEffect, useState } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Landing from "@/pages/Landing";
import Events from "@/pages/Events";
import EventDetails from "@/pages/EventDetails";
import About from "@/pages/About";
import Dashboard from "@/pages/Dashboard";
import { validateSession } from "@/utils/auth";
import { toast, Toaster } from "sonner";

/**
 * Small wrapper to allow useNavigate in top-level component
 * (BrowserRouter must wrap components using useNavigate).
 */
function AppRouter() {
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    let mounted = true;

    // ✅ Validate user session when app loads
    (async () => {
      try {
        const sessionCheck = await validateSession();
        if (!sessionCheck || !sessionCheck.valid) {
          const message =
            sessionCheck?.message || "Session invalid. Please sign in again.";
          toast.error(message);
          if (mounted) navigate("/");
        }
      } catch (err) {
        console.error("Session validation error:", err);
        toast.error("Session validation failed.");
      } finally {
        if (mounted) setChecking(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, [navigate]);

  if (checking) {
    // ✨ Smooth luxury loading screen
    return (
      <div
        className="gradient-bg flex items-center justify-center h-screen text-white text-2xl font-semibold"
        style={{ letterSpacing: "1px" }}
      >
        <div className="glass-card p-6 rounded-2xl glow text-center">
          <span className="text-yellow-400">EventEase</span> Loading…
        </div>
      </div>
    );
  }

  return (
    <Routes>
      {/* 🌟 Public Routes */}
      <Route path="/" element={<Landing />} />
      <Route path="/events" element={<Events />} />
      <Route path="/event/:id" element={<EventDetails />} />
      <Route path="/about" element={<About />} />

      {/* 🧠 Organizer Route */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* 🚫 Catch-All Fallback */}
      <Route
        path="*"
        element={
          <div className="min-h-screen gradient-bg flex items-center justify-center text-white">
            <div className="glass-card p-10 text-center">
              <h2 className="text-3xl font-bold mb-3 text-yellow-400">
                404 - Page Not Found
              </h2>
              <p className="text-gray-300 mb-6">
                Oops! The page you’re looking for doesn’t exist.
              </p>
              <button
                onClick={() => navigate("/")}
                className="btn-primary px-6 py-3"
              >
                Back to Home
              </button>
            </div>
          </div>
        }
      />
    </Routes>
  );
}

function App() {
  return (
    <div className="App">
      {/* Global Toast Notifications */}
      <Toaster position="top-right" richColors />
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
