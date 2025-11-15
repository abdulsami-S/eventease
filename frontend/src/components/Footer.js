import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative mt-20 gradient-bg border-t border-white/10" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Calendar size={32} className="text-yellow-400" />
              <span className="text-2xl font-bold">EventEase</span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Your ultimate platform for discovering and experiencing amazing campus events. Making every moment count.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors" data-testid="social-link-twitter">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors" data-testid="social-link-instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors" data-testid="social-link-facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-yellow-400 transition-colors" data-testid="footer-link-home">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-400 hover:text-yellow-400 transition-colors" data-testid="footer-link-events">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-yellow-400 transition-colors" data-testid="footer-link-about">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <Mail size={18} className="text-yellow-400" />
                <span className="text-sm">info@eventease.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone size={18} className="text-yellow-400" />
                <span className="text-sm">+91 9381209966</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin size={18} className="text-yellow-400" />
                <span className="text-sm">IIIT DHARWAD</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} EventEase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
